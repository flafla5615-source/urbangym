import Audience from "@/components/Audience";
import Facilities from "@/components/Facilities";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Reasons from "@/components/Reasons";
import Recovery from "@/components/Recovery";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 1. 히어로 */}
        <Hero />
        {/* 2. 어반짐이 다른 이유 */}
        <Reasons />
        {/* 3. 시설 소개 */}
        <Facilities />
        {/* 4. 추천 대상 */}
        <Audience />
        {/* 5. 운영 철학 */}
        <Philosophy />
        {/* 6. 회복 · 편의 공간 */}
        <Recovery />
        {/* 7. 하단 CTA */}
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
