import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { shareImage, site } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "어반짐 평거점 | 진주 평거동 24시간 헬스장 · PT",
  description:
    "진주 평거동 어반짐. 순환로 541 지원빌딩 6·7층. 24시간 연중무휴 헬스장, 헬스 및 PT 상담 010-2262-7768. 시설과 오시는 길을 확인해보세요.",
  keywords: ["어반짐 평거점", "평거동 헬스장", "진주 헬스장", "평거동 PT", "진주 PT"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "어반짐 평거점 | 24시간, 나의 운동 시간",
    description: "진주 평거동 순환로 541 · 24시간 연중무휴 · 헬스 & PT",
    type: "website",
    locale: "ko_KR",
    siteName: "어반짐 평거점",
    url: "/",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", images: [shareImage] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f7f4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-warm-50 font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
