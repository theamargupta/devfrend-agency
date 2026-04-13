/**
 * POST /api/contact — DA-24
 * Accepts { name, email, budget, message }, dispatches via Resend.
 * Requires RESEND_API_KEY + CONTACT_TO env vars in production.
 * In dev without those, logs the payload and returns 200 so the form
 * still tests end-to-end.
 */

import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface Payload {
  name?: unknown;
  email?: unknown;
  budget?: unknown;
  message?: unknown;
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function sanitize(v: unknown, max = 2000): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = sanitize(body.name, 200);
  const email = sanitize(body.email, 200);
  const budget = sanitize(body.budget, 200);
  const message = sanitize(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "hello@devfrend.com";
  const from = process.env.CONTACT_FROM ?? "Devfrend <hello@devfrend.com>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info("[contact] (dev) payload:", { name, email, budget, message });
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "Email not configured" },
      { status: 500 },
    );
  }

  const subject = `New project inquiry — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Budget: ${budget || "(not specified)"}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject,
        text,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json(
        { error: "Email provider error", detail },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Send failed",
        detail: err instanceof Error ? err.message : "unknown",
      },
      { status: 500 },
    );
  }
}
