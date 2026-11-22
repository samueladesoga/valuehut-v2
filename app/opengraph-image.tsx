import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Default share image (1200×630) for any page that doesn't set its own.
export const alt = "ValueHut Consulting – Agile training, consulting and talent matching in London & Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo192.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #032432 0%, #05668D 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={logoSrc} width={96} height={96} style={{ background: "white", borderRadius: 20, padding: 8 }} />
          <div style={{ fontSize: 40, fontWeight: 700 }}>ValueHut Consulting</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            High-performing teams delivering exceptional outcomes
          </div>
          <div style={{ fontSize: 32, color: "#FBB27A" }}>
            Agile training · Consulting · Talent matching — London &amp; Lagos
          </div>
        </div>
      </div>
    ),
    size
  );
}
