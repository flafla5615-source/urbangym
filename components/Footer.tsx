import Container from "./Container";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <a href="#top" aria-label="어반짐 평거점 홈"><Logo /></a>
          <nav className="footer-nav" aria-label="푸터 메뉴"><a href="#trainers">트레이너</a><a href="#program">헬스 · PT</a><a href="#facility">시설 안내</a><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">인스타그램</a></nav>
        </div>
        <div className="footer-info"><p>{site.contact.address} {site.contact.addressDetail}</p><p>{site.hours[0].value}</p><a href={site.phoneUrl}>{site.contact.phone}</a><p>{site.contact.parking}</p></div>
        <p className="footer-bottom">© {new Date().getFullYear()} {site.brand.ko}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
