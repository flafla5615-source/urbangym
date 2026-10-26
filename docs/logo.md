# 어반짐 벡터 로고

2026-10-26 사용자 요청에 따라 U자 심벌과 중앙 바를 결합했습니다. 사이트 헤더·푸터에는 `components/Logo.tsx`, 브라우저 아이콘에는 `app/icon.svg`를 사용합니다.

- 단독 심벌: `public/brand/urban-mark.svg`, `urban-mark-light.svg`
- 글자 포함 로고: `public/brand/urban-logo.svg`, `urban-logo-light.svg`
- 검정은 밝은 배경, 흰색은 어두운 배경에 사용합니다. 비율을 유지합니다.
- 글자 포함 파일은 모든 글자를 윤곽선으로 바꿔 외부 폰트 없이 열립니다.
- 생성: `scripts/build-brand.py`. Black Han Sans·Pretendard의 OFL 라이선스는 `public/fonts/`에 보관했습니다.

원래 매장 사진의 로고는 실제 사진의 일부이므로 수정하지 않습니다.
