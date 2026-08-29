import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111927",
          border: "18px solid #253246",
          color: "#f6f3ec",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 188,
          fontWeight: 650,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-14px",
          paddingRight: 20,
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
