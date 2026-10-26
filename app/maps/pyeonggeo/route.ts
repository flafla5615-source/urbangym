import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const config = JSON.stringify({
    latitude: site.map.latitude,
    longitude: site.map.longitude,
    clientId: site.map.clientId,
    mapUrl: site.mapUrl,
  }).replace(/</g, "\\u003c");
  const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>어반짐 평거점 지도</title>
<style>
html,body,#map{width:100%;height:100%;margin:0}body{background:#ededeb;font-family:system-ui,sans-serif;color:#101012}#fallback{position:absolute;inset:0;display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;padding:24px;text-align:center;box-sizing:border-box;background:#ededeb}#fallback[hidden]{display:none}p{margin:0;line-height:1.7;font-size:14px}a{display:inline-flex;align-items:center;min-height:44px;padding:0 20px;background:#101012;color:#fff;text-decoration:none;font-size:14px;font-weight:600;border-radius:3px}a:focus-visible{outline:3px solid #d10e1c;outline-offset:4px}
</style></head><body><div id="map" role="region" aria-label="어반짐 평거점 지도"></div><div id="fallback"><p id="status" role="status">네이버 지도를 불러오는 중입니다.</p><a id="map-link" target="_blank" rel="noopener noreferrer">네이버 지도에서 위치 보기</a></div>
<script>
const config=${config};
const fallback=document.getElementById('fallback');
const status=document.getElementById('status');
document.getElementById('map-link').href=config.mapUrl;
let ready=false;
let observer;
function fail(){ready=false;observer?.disconnect();fallback.hidden=false;status.textContent='네이버 지도에서 정확한 위치를 확인해 주세요.';}
window.navermap_authFailure=fail;
window.addEventListener('error',fail);
window.addEventListener('unhandledrejection',fail);
function init(){
  try{
    const maps=window.naver?.maps;
    if(!maps) return fail();
    const element=document.getElementById('map');
    const center=new maps.LatLng(config.latitude,config.longitude);
    const map=new maps.Map(element,{center,zoom:17,minZoom:10,scrollWheel:false,zoomControl:true,zoomControlOptions:{position:maps.Position.TOP_RIGHT}});
    new maps.Marker({position:center,map,title:'어반짐 평거점 · 지원빌딩 6·7층'});
    observer=new ResizeObserver(()=>{try{const box=element.getBoundingClientRect();if(box.width>0&&box.height>0){map.setSize(new maps.Size(box.width,box.height));map.setCenter(center);}}catch{fail();}});
    observer.observe(element);
    ready=true;fallback.hidden=true;
  }catch{fail();}
}
const script=document.createElement('script');
script.src='https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId='+encodeURIComponent(config.clientId);
script.onload=init;script.onerror=fail;document.head.appendChild(script);
window.setTimeout(()=>{if(!ready)fail();},10000);
</script></body></html>`;
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
    },
  });
}
