import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E8F0E6",
          borderRadius: 16,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#DCE8D8" stroke="#2F5D3A" strokeWidth="1" />
          <path
            d="M24 38c0-10 6-16 14-20-2 12-8 18-14 20Z"
            fill="#2F5D3A"
            opacity="0.9"
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
      </div>
    ),
    { ...size }
  );
}
