import Container from "./Container";

export default function Reasons() {
  return (
    <section id="about" className="intro-section section-space">
      <Container>
        <div className="section-head">
          <h2>웨이트와 유산소를<br />한곳에서.</h2>
          <p>출근 전에도, 퇴근 후에도.<br />하루 일정에 맞춰 운동할 수 있도록<br />어반짐은 24시간 문을 엽니다.</p>
        </div>
        <dl className="intro-list">
          <div><dt>24시간 연중무휴</dt><dd>운동 시간은 내 일정에 맞춰서.</dd></div>
          <div><dt>헬스 · 퍼스널 트레이닝</dt><dd>자유로운 운동부터 개인 목표에 맞는 PT 상담까지.</dd></div>
          <div><dt>스트레칭 · 회복 공간</dt><dd>운동 전후 몸을 풀고 쉴 수 있는 공간.</dd></div>
        </dl>
      </Container>
    </section>
  );
}
