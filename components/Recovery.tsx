import Container from "./Container";
import Photo from "./Photo";
import Icon from "./Icon";
import { images } from "@/lib/site";

export default function Recovery() {
  return <section className="recovery-section section-space"><Container className="recovery-layout">
    <Photo src={images.relax} alt="어반짐 바디프렌드 안마의자와 휴식 공간" className="recovery-photo" position="center 58%" zoom={false} sizes="(max-width: 900px) 100vw, 55vw" />
    <div className="recovery-copy"><h2>운동을 마친 뒤에는<br />잠깐 쉬어가세요.</h2><p>개인 스트레칭 공간에서 몸을 풀고<br />바디프렌드 안마의자에서 쉬어가세요.<br />운동 후의 시간도 편안하게 보낼 수 있습니다.</p><a className="text-action" href="#facility">시설 둘러보기 <Icon name="arrow" /></a></div>
  </Container></section>;
}
