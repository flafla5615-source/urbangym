import Container from "./Container";
import Photo from "./Photo";
import { images } from "@/lib/site";

export default function Reasons() {
  return (
    <section id="about" className="about-section section-space">
      <Container>
        <div className="about-layout">
          <Photo src={images.recovery} alt="어반짐 평거점 회복 공간의 안마의자" className="about-photo" position="center 62%" sizes="(max-width: 767px) 100vw, 42vw" zoom={false} />
          <div className="about-copy">
            <h2>운동 후의<br />시간까지.</h2>
            <p>운동을 마치고 몸을 풀거나 잠시 쉬어갈 때. 스트레칭 공간과 회복 공간도 함께 이용하세요.</p>
            <dl>
              <div><dt>내 일정에 맞춰 운동</dt><dd>출근 전에도, 퇴근 후에도. 24시간 열려 있습니다.</dd></div>
              <div><dt>처음이라 막막하다면</dt><dd>PT 상담에서 운동 목표와 시작 방법부터 이야기해보세요.</dd></div>
              <div><dt>스트레칭과 회복</dt><dd>개인 스트레칭 공간과 프리미엄 안마의자를 갖췄습니다.</dd></div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
