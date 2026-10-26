"use client";

import { useRef, useState } from "react";
import Container from "./Container";
import Photo from "./Photo";
import { images } from "@/lib/site";

const zones = [
  { title: "머신 웨이트", image: images.machine, position: "center 63%", description: "다양한 머신을 갖춘 웨이트 공간입니다." },
  { title: "유산소", image: images.cardio, position: "center 60%", description: "창밖을 바라보며 운동하는 유산소 공간입니다." },
  { title: "프리 웨이트", image: images.freeWeight, position: "center 65%", description: "랙과 덤벨로 자유롭게 무게 운동을 하는 공간입니다." },
  { title: "스트레칭", image: images.stretchingZone, position: "center 65%", description: "운동 전후 몸을 풀 수 있는 개인 스트레칭 공간입니다." },
  { title: "휴식 공간", image: images.relax, position: "center 62%", description: "운동을 마친 뒤 안마의자에서 쉬어가세요." },
];

export default function Facilities() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const select = (index: number) => { setActive(index); tabs.current[index]?.focus(); };
  return (
    <section id="facility" className="facility-section section-space">
      <Container>
        <div className="section-head">
          <h2>공간부터<br />둘러보세요.</h2>
          <p>웨이트부터 스트레칭, 운동 후 휴식까지.<br />어반짐의 실제 시설을 담았습니다.</p>
        </div>
        <div className="zone-tabs" role="tablist" aria-label="운동 공간 선택">
          {zones.map((zone, index) => (
            <button key={zone.title} ref={(element) => { tabs.current[index] = element; }} type="button" role="tab" id={"zone-tab-" + index} aria-controls={"zone-panel-" + index} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % zones.length;
              else if (event.key === "ArrowLeft") next = (index + zones.length - 1) % zones.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = zones.length - 1;
              else return;
              event.preventDefault(); select(next);
            }}>{zone.title}</button>
          ))}
        </div>
        {zones.map((zone, index) => (
          <div key={zone.title} id={"zone-panel-" + index} role="tabpanel" aria-labelledby={"zone-tab-" + index} hidden={active !== index} tabIndex={0} className="zone-panel">
            <Photo src={zone.image} alt={"어반짐 평거점 " + zone.title} position={zone.position} className="zone-photo" zoom={false} sizes="(max-width: 768px) 100vw, 90vw" />
            <div className="zone-caption"><p>{zone.description}</p><span aria-label={"전체 5개 공간 중 " + (index + 1) + "번째"}>{String(index + 1).padStart(2, "0")} / 05</span></div>
          </div>
        ))}
      </Container>
    </section>
  );
}
