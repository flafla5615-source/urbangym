import Icon from "./Icon";
import { site } from "@/lib/site";

/** Keep the third-party map runtime inside its own document. */
export default function NaverMap() {
  return (
    <div className="map-panel">
      <iframe src="/maps/pyeonggeo" title="어반짐 평거점 위치를 표시한 네이버 지도" loading="lazy" className="map-frame" />
      <div className="map-caption">
        <p>{site.brand.ko} · {site.contact.addressDetail}</p>
        <a href={site.mapUrl} target="_blank" rel="noopener noreferrer">네이버 지도에서 위치 보기 <Icon name="arrow" className="h-4 w-4" /></a>
        <p className="map-parking">{site.contact.parking}</p>
      </div>
    </div>
  );
}
