import Container from "./Container";
import NaverMap from "./NaverMap";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function Location() {
  return <section id="location" className="location-section section-space"><Container>
    <div className="section-head"><h2>평거동에서<br />만나요.</h2><p>{site.contact.address}<br />{site.contact.addressDetail}</p></div>
    <div className="location-layout"><div className="location-info">
      <dl><div><dt>운영시간</dt><dd>24시간 · 365일 연중무휴</dd></div><div><dt>전화 문의</dt><dd><a href={site.phoneUrl}>{site.contact.phone}</a></dd></div><div><dt>주차 안내</dt><dd>{site.contact.parking}</dd></div></dl>
      <a className="action action-dark" href={site.mapUrl} target="_blank" rel="noopener noreferrer">네이버 지도에서 보기 <Icon name="arrow" /></a>
      <a className="text-action" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">네이버 예약 <Icon name="arrow" /></a>
    </div><NaverMap /></div>
  </Container></section>;
}
