import Container from "./Container";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return <footer className="site-footer"><Container>
    <div className="footer-top"><Logo /><p>{site.contact.address}<br />{site.contact.addressDetail}<br /><a href={site.phoneUrl}>{site.contact.phone}</a></p><nav aria-label="하단 메뉴"><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a><a href="#location">오시는 길</a><a href="#top">맨 위로</a></nav></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} URBAN GYM.</span><span>24시간 · 365일 연중무휴</span></div>
  </Container></footer>;
}
