import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111927",
          border: "7px solid #253246",
          color: "#f6f3ec",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 66,
          fontWeight: 650,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-5px",
          paddingRight: 7,
          width: "100%",
        }}
      >
        <span>PW</span>
        <span style={{ color: "#2f6bff" }}>.</span>
      </div>
    ),
    size,
  );
}
