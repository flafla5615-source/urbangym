import Facilities from "@/components/Facilities";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import MobileContactBar from "@/components/MobileContactBar";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import Reasons from "@/components/Reasons";
import Recovery from "@/components/Recovery";
import { site } from "@/lib/site";

const businessData = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.brand.ko,
  url: site.url,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.contact.address} ${site.contact.addressDetail}`,
    addressLocality: "진주시",
    addressRegion: "경상남도",
    addressCountry: "KR",
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  }],
  sameAs: [site.instagramUrl],
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">본문 바로가기</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Reasons />
        <Facilities />
        <Programs />
        <Recovery />
        <Philosophy />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
