# 카카오톡 공유 썸네일

- 제작일: 2026-10-09
- 방식: 내장 이미지 생성 도구, 실제 매장 사진 `public/images/urbangym/01.jpg`를 참조한 이미지 편집
- 결과: `public/images/urbangym/kakao-share-v1.png`
- 실제 규격: PNG, 1774 × 887px, 2:1, 약 1.8MB
- 적용: Open Graph 및 Twitter 공유 이미지. 공개 URL은 `https://urbangym-eight.vercel.app/images/urbangym/kakao-share-v1.png`

카카오 공식 답변의 링크 미리보기 권장 비율 2:1을 적용했습니다. 참고: https://devtalk.kakao.com/t/topic/140526
이전에 공유한 URL에서 예전 이미지가 표시되면 카카오 URL 메타정보 캐시 갱신이 필요할 수 있습니다. 참고: https://developers.kakao.com/docs/ko/message-template/faq

## 생성 프롬프트

```text
Use case: ads-marketing.
Asset type: KakaoTalk website-link preview thumbnail for Urban Gym Pyeonggeo, Korea. Create one finished wide image, exactly 1600 x 800 pixels, horizontal 2:1 aspect ratio.
Input image 1 is the actual gym reception photograph, to be used as a faithful photo insert. Preserve the architecture, reception desk and existing U wall logo exactly; use a natural crop, do not invent or redesign the facility. No people.
Design: premium, calm editorial fitness branding matching the existing website. Charcoal #191b19, sage #536a5a, warm ivory #f8f7f4. Large readable Korean typography on the left, authentic reception photo on the right. Keep important text inside an 8% safe margin. A subtle sage accent and clean generous spacing, polished and restrained, no gradients or decorative stickers.
Text verbatim, perfectly legible:
small brand line: "URBAN GYM"
large headline: "어반짐 평거점"
supporting line: "24시간 헬스 · PT"
small location: "진주 평거동"
Do not add any other text, price, promotional promise, watermark, fake certification or Kakao/Naver logos. It must read well as a small 800 x 400 chat preview. The result is the finished thumbnail artwork, not a device mockup or web UI.
```
