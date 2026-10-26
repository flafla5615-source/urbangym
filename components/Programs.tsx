import Container from "./Container";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function Programs() {
  return (
    <section id="program" className="program-section section-space">
      <Container>
        <div className="section-head"><h2>헬스와 PT,<br />이렇게 이용하세요.</h2><p>혼자 운동할 때도, 지도가 필요할 때도.<br />목표와 일정에 맞춰 상담해 드립니다.</p></div>
        <div className="program-list">
          <article className="program-row">
            <div className="program-title"><h3>헬스 회원권</h3><span>FITNESS MEMBERSHIP</span></div>
            <div className="program-description"><p>24시간 운영하는 어반짐에서 웨이트부터 유산소까지, 나의 루틴에 맞춰 운동해보세요.</p><ul><li>24시간 · 365일 연중무휴</li><li>웨이트 · 유산소 · 스트레칭 공간</li></ul></div>
            <a className="text-action" href={site.phoneUrl}>회원권 문의 <Icon name="arrow" /></a>
          </article>
          <article className="program-row">
            <div className="program-title"><h3>퍼스널 트레이닝</h3><span>PERSONAL TRAINING</span></div>
            <div className="program-description"><p>운동 목표와 현재 상태를 상담하고 나에게 맞는 운동 방향과 PT 이용 방법을 안내받으세요.</p><ul><li>개인 목표에 맞춘 상담</li><li>1:1 맞춤 레슨</li></ul></div>
            <a className="text-action" href={site.phoneUrl}>PT 문의 <Icon name="arrow" /></a>
          </article>
        </div>
        <p className="section-note">회원권 구성과 PT 이용 방법, 가격 및 진행 중인 혜택은 상담 시 안내드립니다. 그룹 수업 일정도 함께 문의해 주세요.</p>
      </Container>
    </section>
  );
}
