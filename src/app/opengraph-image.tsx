import { ImageResponse } from "next/og";
import { BRAND, SEO_DEFAULTS } from "@/lib/constants";

export const runtime = "edge";
export const alt = SEO_DEFAULTS.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(60% 50% at 20% 0%, #3d4bff40 0%, #05050700 60%), #050507",
          color: "#f7f8fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a8f500",
            fontFamily: "monospace",
          }}
        >
          {BRAND.name} / agency
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 960,
          }}
        >
          {BRAND.tagline}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#8a8f9e",
            fontFamily: "monospace",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>{BRAND.domain}</span>
          <span style={{ color: "#a8f500" }}>Start a project →</span>
        </div>
      </div>
    ),
    size,
  );
}
