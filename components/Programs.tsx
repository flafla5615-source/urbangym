import Button from "./Button";
import Container from "./Container";
import { site } from "@/lib/site";

export default function Programs() {
  return (
    <section id="program" className="program-section section-space">
      <Container>
        <div className="section-heading"><h2>회원권과 PT</h2><p>혼자 운동할 때도, 트레이닝이 필요할 때도.<br />이용 방법부터 상담해보세요.</p></div>
        <div className="program-grid">
          <article id="membership" className="program">
            <h3>자유 헬스</h3>
            <p>24시간 운영하는 어반짐에서 웨이트와 유산소, 스트레칭까지. 하루 일정에 맞춰 운동하세요.</p>
            <ul><li>24시간 연중무휴</li><li>웨이트 · 유산소 · 스트레칭</li></ul>
            <Button href={site.bookingUrl} variant="light">회원권 상담 예약</Button>
          </article>
          <article id="personal-training" className="program">
            <h3>퍼스널 트레이닝</h3>
            <p>운동 목표와 현재 상태를 상담하고 나에게 맞는 운동 방향과 PT 이용 방법을 안내받으세요.</p>
            <ul><li>개인 목표 상담</li><li>PT 프로그램 상담</li></ul>
            <Button href={site.bookingUrl} variant="light">PT 상담 예약</Button>
          </article>
        </div>
        <p className="program-note">회원권 구성과 PT 비용, 진행 중인 혜택은 상담 시 안내해 드립니다.</p>
      </Container>
    </section>
  );
}
