import Container from "./Container";
import Photo from "./Photo";
import { images } from "@/lib/site";

const zones = [
  { name: "머신존", desc: "다양한 머신으로 체계적인 운동", src: images.machine, position: "center 58%" },
  { name: "유산소존", desc: "탁 트인 전망과 쾌적한 운동 환경", src: images.cardio, position: "center 58%" },
  { name: "프리웨이트존", desc: "자유로운 무게 운동이 가능한 공간", src: images.freeWeight, position: "center 62%" },
  { name: "스트레칭존", desc: "운동 전후에 몸을 풀어주는 공간", src: images.stretchingZone, position: "center 62%" },
  { name: "프리미엄 릴랙스존", desc: "운동을 마친 뒤 쉬어갈 수 있는 회복 공간", src: images.relax, position: "center 62%", feature: true },
];

export default function Facilities() {
  return (
    <section id="facility" className="section-space">
      <Container>
        <div className="section-heading"><h2>시설 둘러보기</h2><p>운동할 공간을 미리 살펴보세요.<br />사진은 모두 어반짐 평거점의 실제 모습입니다.</p></div>
        <div className="facility-grid">
          {zones.map((zone) => (
            <figure key={zone.name} className={zone.feature ? "facility-feature" : undefined}>
              <Photo src={zone.src} alt={`어반짐 평거점 ${zone.name}`} position={zone.position} className="facility-photo" sizes={zone.feature ? "100vw" : "(max-width: 767px) calc(100vw - 48px), 50vw"} zoom={false} />
              <figcaption className="facility-caption"><h3>{zone.name}</h3><p>{zone.desc}</p></figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
