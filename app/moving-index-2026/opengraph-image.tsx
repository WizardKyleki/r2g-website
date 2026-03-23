import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "R2G Moving Index 2026 — Queensland Migration & Housing Trends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/images/logo-r2g-white.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 50%, #1A1A1A 100%)",
          padding: "40px 50px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #F5C400, #d4a900, #F5C400)",
            display: "flex",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src={logoBase64}
              width="140"
              height="50"
              style={{ objectFit: "contain" }}
            />
            <span style={{ color: "#999", fontSize: "16px", letterSpacing: "3px", display: "flex" }}>
              RESEARCH REPORT
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "42px", fontWeight: 800, lineHeight: 1.1, display: "flex" }}>
            The R2G Moving Index
          </span>
          <span style={{ color: "#F5C400", fontSize: "52px", fontWeight: 900, lineHeight: 1.1, display: "flex" }}>
            2026
          </span>
        </div>

        {/* Migration Scorecard */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          {/* QLD */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(34, 197, 94, 0.12)",
              border: "2px solid rgba(34, 197, 94, 0.4)",
              borderRadius: "12px",
              padding: "14px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#999", fontSize: "13px", letterSpacing: "1px", display: "flex" }}>QLD</span>
            <span style={{ color: "#22c55e", fontSize: "32px", fontWeight: 800, display: "flex" }}>+21,595</span>
          </div>
          {/* WA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(34, 197, 94, 0.08)",
              border: "2px solid rgba(34, 197, 94, 0.3)",
              borderRadius: "12px",
              padding: "14px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#999", fontSize: "13px", letterSpacing: "1px", display: "flex" }}>WA</span>
            <span style={{ color: "#22c55e", fontSize: "32px", fontWeight: 800, display: "flex" }}>+10,288</span>
          </div>
          {/* NSW */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(239, 68, 68, 0.12)",
              border: "2px solid rgba(239, 68, 68, 0.4)",
              borderRadius: "12px",
              padding: "14px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#999", fontSize: "13px", letterSpacing: "1px", display: "flex" }}>NSW</span>
            <span style={{ color: "#ef4444", fontSize: "32px", fontWeight: 800, display: "flex" }}>-24,328</span>
          </div>
          {/* VIC */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(239, 68, 68, 0.08)",
              border: "2px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "12px",
              padding: "14px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#999", fontSize: "13px", letterSpacing: "1px", display: "flex" }}>VIC</span>
            <span style={{ color: "#ef4444", fontSize: "32px", fontWeight: 800, display: "flex" }}>-12,400</span>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "auto",
          }}
        >
          {/* Vacancy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(245, 196, 0, 0.1)",
              border: "1px solid rgba(245, 196, 0, 0.3)",
              borderRadius: "10px",
              padding: "12px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#F5C400", fontSize: "30px", fontWeight: 800, display: "flex" }}>0.8%</span>
            <span style={{ color: "#999", fontSize: "13px", display: "flex" }}>Brisbane vacancy rate</span>
          </div>
          {/* Rent */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(245, 196, 0, 0.1)",
              border: "1px solid rgba(245, 196, 0, 0.3)",
              borderRadius: "10px",
              padding: "12px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#F5C400", fontSize: "30px", fontWeight: 800, display: "flex" }}>$727/wk</span>
            <span style={{ color: "#999", fontSize: "13px", display: "flex" }}>Brisbane median rent</span>
          </div>
          {/* Price growth */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(245, 196, 0, 0.1)",
              border: "1px solid rgba(245, 196, 0, 0.3)",
              borderRadius: "10px",
              padding: "12px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#F5C400", fontSize: "30px", fontWeight: 800, display: "flex" }}>14.5%</span>
            <span style={{ color: "#999", fontSize: "13px", display: "flex" }}>Price growth (YoY)</span>
          </div>
          {/* Affordability */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(245, 196, 0, 0.1)",
              border: "1px solid rgba(245, 196, 0, 0.3)",
              borderRadius: "10px",
              padding: "12px 20px",
              flex: 1,
            }}
          >
            <span style={{ color: "#F5C400", fontSize: "30px", fontWeight: 800, display: "flex" }}>33.4%</span>
            <span style={{ color: "#999", fontSize: "13px", display: "flex" }}>Income on rent (record)</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <span style={{ color: "#666", fontSize: "14px", display: "flex" }}>
            www.r2g.com.au/moving-index-2026
          </span>
          <span style={{ color: "#666", fontSize: "14px", display: "flex" }}>
            Source: ABS, RBA, QGSO, Domain
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
