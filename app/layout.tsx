import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

/** 영문 디스플레이 폰트 (숫자 · 영문 라벨용) */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "어반짐 URBAN GYM | 관리가 다른 헬스장",
  description:
    "전문트레이너 · 청결한 시설 · 친절한 직원. 어반짐은 운동을 처음 시작하는 분도 편하게 다닐 수 있는 관리형 헬스장입니다.",
  openGraph: {
    title: "어반짐 URBAN GYM | 관리가 다른 헬스장",
    description: "운동이 더 나은 일상이 되는 곳, 어반짐입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "어반짐 URBAN GYM",
  },
  // TODO: 실제 도메인이 정해지면 metadataBase 를 추가하세요.
  // metadataBase: new URL("https://urbangym.example.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={outfit.variable}>
      <head>
        {/* 한글 본문 폰트 : Pretendard */}
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-warm-50 font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
