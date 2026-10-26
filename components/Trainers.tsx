import Container from "./Container";
import Photo from "./Photo";
import Icon from "./Icon";
import { trainers } from "@/lib/trainers";

export default function Trainers() {
  return (
    <section id="trainers" className="trainer-section section-space">
      <Container>
        <div className="section-head"><h2>함께 운동할<br />트레이너를 만나보세요.</h2><p>어떤 생각으로 가르치는지,<br />어떤 경험을 쌓아왔는지 소개합니다.</p></div>
        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <article key={trainer.id} className="trainer-profile">
              <Photo src={trainer.image} alt={trainer.name + " " + trainer.role} position="center 20%" className="trainer-portrait" zoom={false} sizes="(max-width: 700px) 100vw, 33vw" />
              <div className="trainer-identity"><h3>{trainer.name}</h3><span>{trainer.role}</span></div>
              <blockquote className="trainer-quote">{trainer.slogans.map((slogan) => <p key={slogan}>{slogan}</p>)}</blockquote>
              <ul className="trainer-highlights">{trainer.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              <details className="trainer-details">
                <summary><span><span className="profile-show">프로필 자세히 보기</span><span className="profile-hide">프로필 접기</span><span className="sr-only"> · {trainer.name}</span></span><Icon name="arrow" /></summary>
                <div className="trainer-history">{trainer.sections.map((section) => (
                  <section key={section.title}><h4>{section.title}</h4>{section.groups.map((group, index) => (
                    <div key={index}>{group.title ? <p className="history-group">{group.title}</p> : null}<ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  ))}</section>
                ))}</div>
              </details>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
