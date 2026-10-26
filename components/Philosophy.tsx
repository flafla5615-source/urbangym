import Container from "./Container";
import Photo from "./Photo";
import { images } from "@/lib/site";

export default function Philosophy() {
  return <section className="philosophy-section"><Container className="philosophy-layout">
    <div><h2>처음 시작한 운동을<br />꾸준히 이어가도록.</h2><p>어반짐은 편하게 운동을 시작하고<br />꾸준히 다닐 수 있는 헬스장을 지향합니다.</p></div>
    <Photo src={images.hero} alt="어반짐 안내 데스크" className="philosophy-photo" position="center 50%" zoom={false} sizes="(max-width: 700px) 80vw, 32vw" />
  </Container></section>;
}
