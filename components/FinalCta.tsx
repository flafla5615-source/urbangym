import Container from "./Container";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function FinalCta() {
  return <section id="contact" className="contact-section section-space"><Container className="contact-layout">
    <div><h2>회원권과 PT,<br />궁금한 점을 물어보세요.</h2><p>운동 목표와 가능한 시간을 알려주세요.<br />이용 방법부터 차근차근 안내해 드립니다.</p></div>
    <div className="contact-actions"><a className="action action-white" href={site.phoneUrl}>회원권 · PT 전화 문의 <Icon name="arrow" /></a><a className="text-action" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">네이버 예약 <Icon name="arrow" /></a><a className="contact-number" href={site.phoneUrl}>{site.contact.phone}</a></div>
  </Container></section>;
}
