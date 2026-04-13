"use client";

/**
 * ContactForm — DA-24
 * Posts to /api/contact which dispatches via Resend.
 * No backend secrets in the client. Full keyboard-navigable.
 */

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-2">
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="h-12 rounded-xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/60 px-4 font-body text-[var(--color-fg-0)] outline-none transition-colors focus:border-[var(--color-accent-400)]"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-12 rounded-xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/60 px-4 font-body text-[var(--color-fg-0)] outline-none transition-colors focus:border-[var(--color-accent-400)]"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="budget" className="font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="h-12 rounded-xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/60 px-4 font-body text-[var(--color-fg-0)] outline-none transition-colors focus:border-[var(--color-accent-400)]"
        >
          <option value="" disabled>Pick a range</option>
          <option>$10k — $25k (audit or sprint)</option>
          <option>$25k — $60k (design eng / build)</option>
          <option>$60k+ (launch partner)</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/60 p-4 font-body text-[var(--color-fg-0)] outline-none transition-colors focus:border-[var(--color-accent-400)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-accent-400)] px-8 font-body font-medium text-[var(--color-surface-0)] transition-transform hover:scale-[1.02] disabled:cursor-wait disabled:opacity-50"
        data-cursor="magnet"
      >
        {status === "submitting" ? "Sending…" : "Start a project"}
      </button>

      <div role="status" aria-live="polite" className="min-h-6 font-mono text-xs text-[var(--color-fg-2)]">
        {status === "sent" && "Sent — we reply within one business day."}
        {status === "error" && `Something went wrong: ${errorMsg}. Email hello@devfrend.com instead.`}
      </div>
    </form>
  );
}
