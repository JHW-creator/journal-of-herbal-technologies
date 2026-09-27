import { ImageResponse } from "next/og";

import { siteName, siteTagline } from "@/content/site";

export const runtime = "nodejs";
export const alt = siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(160deg, #F3F7F1 0%, #E4EDE3 55%, #D7E5D4 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="#DCE8D8" stroke="#2F5D3A" strokeWidth="1.5" />
            <path
              d="M24 38c0-10 6-16 14-20-2 12-8 18-14 20Z"
              fill="#2F5D3A"
            />
            <path
              d="M24 38c0-12-7-18-14-22 3 13 8 19 14 22Z"
              fill="#3F7349"
              opacity="0.85"
            />
            <path
              d="M24 38V14"
              stroke="#F4F7F2"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.18em",
              color: "#2F5D3A",
              fontWeight: 600,
            }}
          >
            JHT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.1,
              color: "#1F3D28",
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            {siteName}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#3F5A45",
              maxWidth: 900,
              fontStyle: "italic",
            }}
          >
            {siteTagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
