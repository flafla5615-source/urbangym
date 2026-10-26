import Container from "./Container";
import Icon from "./Icon";
import Photo from "./Photo";
import { trainers } from "@/lib/trainers";

export default function Trainers() {
  return (
    <section id="trainers" className="trainer-section">
      <Container>
        <div className="trainer-heading">
          <h2>트레이너 소개</h2>
          <p>어반짐 평거점의<br />전문 트레이너를 만나보세요.</p>
          <a href="#trainer-profiles" className="text-link">전체 보기 <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
        <nav aria-label="트레이너 프로필 바로가기" className="trainer-index">
          {trainers.map((trainer) => (
            <a key={trainer.id} href={`#${trainer.id}-profile`}>
              <strong>{trainer.name}</strong><span>{trainer.role}</span>
            </a>
          ))}
        </nav>
        <div id="trainer-profiles" className="trainer-profiles">
          {trainers.map((trainer) => (
            <article key={trainer.id} id={`${trainer.id}-profile`} aria-labelledby={`${trainer.id}-name`} className="trainer-profile">
              <Photo src={trainer.image} alt={`어반짐 ${trainer.name} ${trainer.role} 프로필 사진`} className="trainer-photo" sizes="(max-width: 767px) calc(100vw - 32px), 32vw" position="center 20%" zoom={false} />
              <div className="trainer-profile-copy">
                <h3 id={`${trainer.id}-name`}><span>{trainer.name}</span><span className="trainer-role">{trainer.role}</span></h3>
                <blockquote className="trainer-slogans">
                  {trainer.slogans.map((slogan) => <p key={slogan}>{slogan}</p>)}
                </blockquote>
                <ul className="trainer-highlights">
                  {trainer.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
              <details className="trainer-details group/profile">
                <summary>
                  <span><span className="sr-only">{trainer.name} </span><span className="group-open/profile:hidden">전체 프로필 보기</span><span className="hidden group-open/profile:inline">프로필 접기</span></span>
                  <span className="detail-indicator" aria-hidden="true" />
                </summary>
                <div className="trainer-credentials">
                  {trainer.sections.map((section) => (
                    <div key={section.title}>
                      <h4>{section.title}</h4>
                      {section.groups.map((group, i) => (
                        <div key={group.title ?? i}>
                          {group.title ? <h5>{group.title}</h5> : null}
                          <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
