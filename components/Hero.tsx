import Icon from "./Icon";
import Photo from "./Photo";
import { images, site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-scene">
        <Photo src={images.freeWeight} alt="창가를 따라 랙과 덤벨이 놓인 어반짐 평거점 웨이트 공간" priority zoom={false} position="center 63%" className="hero-photo" sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <h1>운동 시간은<br />내가 정합니다.</h1>
          <p>24시간 열려 있는 헬스 &amp; PT 공간,<br className="mobile-break" /> 어반짐 평거점.</p>
        </div>
        <div className="hero-bottom">
          <div className="hero-address"><span>365일 연중무휴</span><span>진주 평거동 · 지원빌딩 6·7층</span></div>
          <div className="hero-actions">
            <a className="action action-white" href={site.phoneUrl}>회원권 · PT 문의 <Icon name="arrow" /></a>
            <a className="hero-reserve" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">네이버 예약 <Icon name="arrow" /></a>
          </div>
        </div>
      </div>
      <div className="hero-caption"><span>URBAN GYM PYEONGGEO</span><a href="#facility">공간 둘러보기 <Icon name="arrow" /></a></div>
    </section>
  );
}
