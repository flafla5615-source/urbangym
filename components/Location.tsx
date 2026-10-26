import Button from "./Button";
import Container from "./Container";
import NaverMap from "./NaverMap";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="section-space">
      <Container>
        <div className="location-layout">
          <div className="location-copy">
            <div className="section-heading"><h2>오시는 길</h2></div>
            <dl>
              <div><dt>주소</dt><dd>{site.contact.address}<br />{site.contact.addressDetail}</dd></div>
              <div><dt>운영시간</dt><dd>{site.hours[0].value}</dd></div>
              <div><dt>상담 전화</dt><dd><a href={site.phoneUrl}>{site.contact.phone}</a></dd></div>
            </dl>
            <div className="location-actions"><Button href={site.mapUrl}>네이버 지도</Button><Button href={site.phoneUrl} variant="outline" withArrow={false}>전화 문의</Button></div>
          </div>
          <NaverMap />
        </div>
      </Container>
    </section>
  );
}
