import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

// Social share card (Open Graph / LinkedIn / X). Generated at build time with
// the default next/og font, using the portfolio's dark-scheme colours.

export const alt = "Mohammed Alrabai — Full-Stack Engineer · DevOps & Application Security";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  bg: "#0b0f14",
  border: "#232b36",
  borderStrong: "#34404e",
  text: "#e4e9ef",
  muted: "#8a97a8",
  accent: "#16a34a",
};

const stack = ["React", "Next.js", "Node.js", "NestJS", "Docker", "Oracle Cloud"];

export default function OpengraphImage() {
  const p = profile.en;
  const host = new URL(siteUrl).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: colors.bg,
          color: colors.text,
          padding: "72px 80px 64px",
          borderBottom: `10px solid ${colors.accent}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: colors.muted }}>
            <div style={{ width: 14, height: 14, background: colors.accent, marginRight: 16 }} />
            Available for opportunities
          </div>
          <div style={{ display: "flex", fontSize: 24, color: colors.muted }}>{host}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, letterSpacing: -3, lineHeight: 1.05 }}>
            {p.name}
          </div>
          <div style={{ display: "flex", fontSize: 38, color: colors.muted, marginTop: 24 }}>
            {p.title}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                fontSize: 24,
                color: colors.muted,
                border: `2px solid ${colors.borderStrong}`,
                padding: "10px 18px",
                marginRight: 14,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
