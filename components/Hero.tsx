import Image from "next/image";
import type { CSSProperties } from "react";
import Container from "./Container";
import Icon from "./Icon";
import portrait from "@/assets/plates/portrait.png";
import underline from "@/assets/plates/underline.png";
import facilityPhoto from "@/assets/plates/facility-photo.png";
import inkMask from "@/assets/plates/button-ink-mask.png";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ "--ink-mask": `url("${inkMask.src}")` } as CSSProperties}>
      <Container className="hero-container">
        <div className="hero-stage">
          <h1 className="hero-heading">
            24시간 헬스 · PT
            <Image src={underline} alt="" aria-hidden="true" className="hero-underline" sizes="(max-width: 767px) 52vw, 410px" />
          </h1>
          <div className="hero-portrait">
            <Image src={portrait} alt="어반짐 평거점 김민후 대표" fill priority sizes="(max-width: 767px) 54vw, 520px" />
          </div>
          <div className="hero-voice">
            <p className="hero-attribution">김민후 <span>대표</span></p>
            <blockquote className="hero-quote" cite="#kim-minhu-profile">
              <span className="quote-line">건강한</span>
              <span className="quote-line">움직임으로</span>
              <span className="quote-line quote-red">건강한 신체를</span>
              <span className="quote-line quote-red">만듭니다.</span>
            </blockquote>
          </div>
        </div>
        <div className="hero-consultations">
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="consultation consultation-membership">
            <Icon name="trainer" className="consultation-icon" />
            <span><strong>회원권 상담</strong><span className="consultation-description">24시간 자유로운 운동</span></span>
            <Icon name="arrow" className="consultation-arrow" />
          </a>
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="consultation consultation-pt">
            <Icon name="managed" className="consultation-icon" />
            <span><strong>PT 상담</strong><span className="consultation-description">1:1 맞춤 트레이닝</span></span>
            <Icon name="arrow" className="consultation-arrow" />
          </a>
        </div>
      </Container>
      <div className="hero-floor">
        <Image src={facilityPhoto} alt="창가를 따라 배치된 어반짐 평거점 운동 기구" fill sizes="100vw" />
      </div>
    </section>
  );
}
