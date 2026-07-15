# 04 · 기술 (스택 · 운영 규약 · 폴더 구조)

---

## 1. 스택

- **빌드:** Vite
- **프레임워크:** React 18
- **언어:** TypeScript
- **스타일:** Tailwind CSS
- **라우팅:** react-router-dom (클라이언트 사이드)
- **배포:** Vercel
- **상태:** React state / Context 만. (전역 상태 라이브러리 불필요 — 데이터가 정적)

**없는 것:** 백엔드, DB, 인증, API 호출, 외부 상태 저장.
모든 데이터는 `src/data/*` 하드코딩 상수(`03-data.md`).

---

## 2. 폴더 구조

> 아키텍처는 **확장을 수용**하되(청소가 붙을 자리), 이번 구현은 체크리스트+백과만.

```
src/
  config/
    service.ts          # SERVICE_NAME 상수 등
  data/
    checklist.ts        # 체크리스트 더미
    wiki.ts             # 백과 더미
    // cleaning.ts       ← 파킹 (이번 스프린트 미생성)
  features/
    checklist/          # 체크리스트 기능 (화면·컴포넌트·로직 응집)
      pages/
      components/
    wiki/               # 백과 기능
      pages/
      components/
    // cleaning/         ← 파킹 (폴더 미생성)
  components/            # 공용 UI (Button, Card, SearchBar 등)
  routes/
    AppRouter.tsx
  App.tsx
  main.tsx
```

- **기능별 폴더(feature-based)**로 응집도를 높인다. 체크리스트/백과가 서로 침범하지 않게.
- 청소는 `features/cleaning/`이 붙을 **자리만 남겨두고** 지금은 만들지 않는다.

---

## 3. Claude Code 운영 규약

1. **작업 전 관련 docs를 읽는다.** 특히 `02-product-spec.md`(범위)와 `05-out-of-scope.md`(금지).
2. **스펙에 없는 화면·기능을 임의로 만들지 않는다.** "있으면 좋을 것 같아서" 추가 금지.
3. **서비스명은 `SERVICE_NAME` 상수만 참조.** 문자열 하드코딩 발견 시 상수로 교체.
4. **`woowa`/`woowahan`/`techcourse` 금칙어**를 코드·주석·메타태그·package.json 어디에도 넣지 않는다.
5. **물리 작업 백과 항목은 링크아웃 우선.** 긴 단계별 텍스트 설명을 생성하지 않는다.
6. 커밋은 마일스톤 단위로 작게. 한 커밋에 한 관심사.
7. 화면을 늘리고 싶으면 먼저 `05-out-of-scope.md` 자기진단을 통과하는지 확인.

---

## 4. 마일스톤

| M | 내용 | 완료 기준 |
| --- | --- | --- |
| M1 | 프로젝트 셋업 + 데이터 파일 | Vite/React/TS/Tailwind 구동, `checklist.ts`·`wiki.ts` 더미 존재, `SERVICE_NAME` 상수 |
| M2 | 라우팅 + 홈 | `/`, `/checklist`, `/wiki` 이동. 홈 진입 카드 2개 |
| M3 | 체크리스트 | 상황 선택 → 단계별 체크리스트, 툴팁, 세션 체크 상태 |
| M4 | 백과 | 카테고리 그리드 + 전역 검색 + 항목 상세(3줄 요약 + 링크아웃 + 저장 버튼 UI) |
| M5 | 모바일 정리 + 배포 | 모바일 레이아웃 점검, Vercel 배포, 인터뷰용 URL 확보 |

- **인터뷰에 필요한 최소 = M3·M4까지.** 완성도보다 "사람 앞에 놓을 수 있는 상태"가 우선.

---

## 5. 배포

- Vercel 연결, main 브랜치 자동 배포.
- 배포 URL이 곧 월요일/수요일 제출물의 "프로토타입 URL".
- 환경변수·시크릿 없음(백엔드 없음). Secret scanning은 그래도 켜둔다.
