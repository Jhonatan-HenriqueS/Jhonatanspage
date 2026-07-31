import { ImageResponse } from "next/og";

export const alt =
  "Jhonatan Henrique — sistemas web, landing pages e soluções com IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#d1d3e6",
          color: "#111318",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 68px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid rgba(17,19,24,.32)",
            paddingBottom: "24px",
            fontSize: "22px",
            textTransform: "uppercase",
            letterSpacing: "3px",
          }}
        >
          <span>Jhonatan Henrique</span>
          <span>Ji-Paraná · RO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "132px",
              fontWeight: 800,
              letterSpacing: "-8px",
              lineHeight: 0.92,
            }}
          >
            JHONATAN
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "32px",
              fontSize: "38px",
              lineHeight: 1.15,
              maxWidth: "780px",
            }}
          >
            Sistemas que resolvem. Páginas que vendem.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "34px",
            fontSize: "20px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          <span>Sistemas web</span>
          <span>Landing pages</span>
          <span>IA</span>
        </div>
      </div>
    ),
    size,
  );
}
