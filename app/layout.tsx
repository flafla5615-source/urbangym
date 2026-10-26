import type { Metadata, Viewport } from "next";
import "./globals.css";
import { shareImage, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "어반짐 평거점 | 진주 평거동 24시간 헬스장 · PT",
  description:
    "진주 평거동 어반짐. 순환로 541 지원빌딩 6·7층. 24시간 연중무휴 헬스장, 헬스 및 PT 상담 010-2262-7768. 시설과 오시는 길을 확인해보세요.",
  keywords: ["어반짐 평거점", "평거동 헬스장", "진주 헬스장", "평거동 PT", "진주 PT"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "어반짐 평거점 | 24시간 헬스 · PT",
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
  themeColor: "#f6f6f4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head><link rel="preload" href="/fonts/BlackHanSans-UI.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /></head>
      <body className="bg-warm-50 font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
