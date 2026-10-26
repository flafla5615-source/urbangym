import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="contact" className="final-contact section-space">
      <Container>
        <h2>회원권도, PT도.<br />편하게 물어보세요.</h2>
        <p>진주 평거동 · 24시간 연중무휴<br />방문 상담은 네이버에서 예약할 수 있습니다.</p>
        <div className="final-contact-actions"><Button href={site.bookingUrl} variant="light">네이버 예약</Button><a href={site.phoneUrl} className="contact-phone"><Icon name="phone" className="h-5 w-5" />{site.contact.phone}</a></div>
      </Container>
    </section>
  );
}
