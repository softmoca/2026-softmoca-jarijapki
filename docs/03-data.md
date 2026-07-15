# 03 · 데이터 (하드코딩 더미 스키마)

> 백엔드·DB 없음. 모든 데이터는 TypeScript 상수 파일(`src/data/*`)로 하드코딩한다.
> 목적은 "완전한 콘텐츠"가 아니라 **인터뷰에서 반응을 끌어낼 만큼의 대표 샘플**이다.

---

## 1. 서비스 상수

```ts
// src/config/service.ts
export const SERVICE_NAME = "자리잡기"; // placeholder — 여기 한 줄만 바꾸면 전체 반영
export const SERVICE_TAGLINE = "검색창을 열기 전에, 무엇을 모르는지부터 짚어드려요.";
```

- 어디에도 서비스명을 하드코딩하지 않는다. 항상 `SERVICE_NAME`을 참조한다.

---

## 2. 체크리스트 스키마

```ts
// src/data/checklist.ts

export type Situation =
  | "oneroom"      // 원룸
  | "officetel"    // 오피스텔
  | "semi_basement"// 반지하/1층
  | "rooftop"      // 옥탑
  | "etc";

export type ChecklistStep = "before_visit" | "on_visit" | "on_contract" | "after_contract";

export interface ChecklistItem {
  id: string;
  step: ChecklistStep;      // 단계 (순서의 핵심)
  order: number;            // 단계 내 정렬
  title: string;            // 체크 항목
  why: string;              // "왜 확인하나" 한 줄 툴팁 = '모르는 걸 모름' 해결 지점
  situations: Situation[];  // 이 항목이 특히 중요한 상황 (강조용). 빈 배열이면 공통.
  tags?: string[];          // "저소음", "자연광", "반려동물" 등
}
```

### 더미 샘플 (최소 20개 목표 — 단계별로 고르게)

```ts
export const CHECKLIST_ITEMS: ChecklistItem[] = [
  // STEP 1 · 방문 전 (동네·입지)
  { id: "c01", step: "before_visit", order: 1, title: "밤 시간 치안 확인",
    why: "낮에만 보면 밤 골목 분위기·가로등을 놓친다. 가능하면 밤에 한 번 걸어보기.",
    situations: [], tags: ["안전"] },
  { id: "c02", step: "before_visit", order: 2, title: "오르막길·언덕 여부",
    why: "지도상 가까워도 언덕이면 매일 힘들다. 특히 짐 나를 때·장 볼 때 체감이 크다.",
    situations: [] },
  { id: "c03", step: "before_visit", order: 3, title: "편의점·마트 거리",
    why: "생필품 접근성. 도보 5분 이내면 자취 삶의 질이 크게 오른다.",
    situations: [] },
  { id: "c04", step: "before_visit", order: 4, title: "대로변 소음 (창문 방향)",
    why: "창이 큰길 쪽이면 밤 소음·먼지가 심하다. 저소음이 중요하면 필수.",
    situations: [], tags: ["저소음"] },
  { id: "c05", step: "before_visit", order: 5, title: "코인 세탁방 거리 + 빨래 널 공간",
    why: "세탁기 없는 방이면 코인 세탁방까지 거리가 중요. 방 안 빨래 건조 공간 크기도 미리 가늠.",
    situations: [] },

  // STEP 2 · 방문 시 (집 상태)
  { id: "c06", step: "on_visit", order: 1, title: "채광 / 햇빛 드는 방향",
    why: "남향·동향 여부로 겨울 난방비·곰팡이·기분까지 갈린다. 방문 시간대 햇빛 확인.",
    situations: [], tags: ["자연광"] },
  { id: "c07", step: "on_visit", order: 2, title: "곰팡이·누수 흔적",
    why: "벽지 들뜸·천장 얼룩·창틀 검은 자국은 결로/누수 신호. 놓치면 겨울에 크게 후회.",
    situations: ["semi_basement"] },
  { id: "c08", step: "on_visit", order: 3, title: "찍힘·하자 사진 기록",
    why: "입주 전 하자를 사진으로 남겨야 퇴거 시 원상복구 분쟁을 막는다.",
    situations: [] },
  { id: "c09", step: "on_visit", order: 4, title: "수압 확인 (수도·샤워 틀어보기)",
    why: "입주 후에야 아는 대표 항목. 방문 때 직접 틀어봐야 안다.",
    situations: [] },
  { id: "c10", step: "on_visit", order: 5, title: "기본 옵션 가구·가전 목록",
    why: "냉장고·세탁기·에어컨·인덕션 유무와 상태. 없는 건 입주비용으로 직결.",
    situations: [] },
  { id: "c11", step: "on_visit", order: 6, title: "벌레 흔적·방충 상태",
    why: "반지하·1층·오래된 건물은 특히. 방충망 상태, 배수구 냄새 확인.",
    situations: ["semi_basement"] },

  // STEP 3 · 계약 시
  { id: "c12", step: "on_contract", order: 1, title: "계약서 특약 확인",
    why: "구두 약속은 특약에 글로 남겨야 효력. 수리 책임·반려동물·주차 등.",
    situations: [] },
  { id: "c13", step: "on_contract", order: 2, title: "세탁기·에어컨 청소·수리 책임 명시",
    why: "고장·청소 비용을 누가 부담하는지 계약서에 명시하지 않으면 분쟁 소지.",
    situations: [] },
  { id: "c14", step: "on_contract", order: 3, title: "등기부등본 확인",
    why: "집주인·근저당 확인은 보증금 보호의 기본. 계약 전 반드시.",
    situations: [] },
  { id: "c15", step: "on_contract", order: 4, title: "청년월세 지원 대상 여부",
    why: "소득·나이 요건 맞으면 월세 지원 가능. 계약 형태가 요건에 맞는지 미리 확인.",
    situations: [] },

  // STEP 4 · 계약 후 (입주 준비)
  { id: "c16", step: "after_contract", order: 1, title: "전입신고 + 확정일자",
    why: "보증금 보호(대항력)를 위해 입주 즉시. 초보가 가장 많이 미루는 것.",
    situations: [] },
  { id: "c17", step: "after_contract", order: 2, title: "전기·가스 명의 변경",
    why: "전 세입자 요금 승계 방지. 한국전력·도시가스에 명의 변경 신청.",
    situations: [] },
  { id: "c18", step: "after_contract", order: 3, title: "에어컨 전용 콘센트 전압 확인",
    why: "에어컨은 별도 전압/콘센트가 필요할 수 있음. 입주 전 위치·규격 확인.",
    situations: [] },
  // ... 20개까지 같은 형식으로 확장
];
```

---

## 3. 백과 스키마

```ts
// src/data/wiki.ts

export type WikiCategory =
  | "repair"    // 생활 수리
  | "appliance" // 가전 관리
  | "waste"     // 분리수거·쓰레기
  | "laundry"   // 세탁
  | "food"      // 식생활
  | "admin"     // 행정
  | "season"    // 계절
  | "safety";   // 안전

export interface WikiEntry {
  id: string;
  category: WikiCategory;
  title: string;
  trigger: string;        // "언제 찾게 되나" 1줄
  summary: string[];      // 3줄 요약 (배열, 최대 3개)
  resourceUrl: string;    // 검증된 외부 자료 링크 (유튜브/블로그) — 링크아웃
  resourceLabel: string;  // "○○ 영상 보기" 등
  tags: string[];
  physical: boolean;      // 물리 작업 여부(true면 텍스트 최소화, 링크아웃 우선)
}
```

### 더미 샘플 (카테고리별 1–2개, 총 12개 이상 목표)

```ts
export const WIKI_ENTRIES: WikiEntry[] = [
  { id: "w01", category: "repair", title: "변기가 막혔을 때",
    trigger: "물이 안 내려가고 차오를 때",
    summary: ["압축기(뚫어뻥)로 먼저 시도, 없으면 뜨거운 물+주방세제.",
              "변기가 넘칠 것 같으면 물탱크 밸브를 잠근다.",
              "이물질(물티슈 등)이 원인이면 무리하게 누르지 말 것."],
    resourceUrl: "https://www.youtube.com/", resourceLabel: "따라하기 영상 보기",
    tags: ["급함", "화장실"], physical: true },

  { id: "w02", category: "repair", title: "우풍(외풍)이 들어올 때",
    trigger: "창문·현관 틈으로 찬 바람이 들 때",
    summary: ["창틈은 문풍지, 현관은 가스켓/도어실러로 막는다.",
              "겨울 전 미리 하면 난방비가 눈에 띄게 준다.",
              "결로가 함께 있으면 환기·제습을 병행."],
    resourceUrl: "https://www.youtube.com/", resourceLabel: "문풍지 붙이기 영상",
    tags: ["겨울", "난방비"], physical: true },

  { id: "w03", category: "appliance", title: "세탁기에서 물이 샐 때",
    trigger: "세탁 중 바닥에 물이 고일 때",
    summary: ["급수·배수 호스 연결부부터 확인.",
              "세제 과다 투입도 거품 누수 원인.",
              "실외기/베란다 설치 세탁기는 열기·동파 주의."],
    resourceUrl: "https://www.youtube.com/", resourceLabel: "누수 점검 영상",
    tags: ["세탁기"], physical: true },

  { id: "w04", category: "waste", title: "분리수거·쓰레기 배출법",
    trigger: "이사 첫 주, 뭘 어떻게 버릴지 막막할 때",
    summary: ["종량제 봉투 규격은 동네(구)마다 다르다 — 근처 편의점에서 확인.",
              "음식물·재활용·일반 분리, 배출 요일 확인.",
              "대형 폐기물은 주민센터/앱에서 스티커 발급."],
    resourceUrl: "https://www.google.com/", resourceLabel: "우리 동네 배출 규정 찾기",
    tags: ["첫주"], physical: false },

  { id: "w05", category: "laundry", title: "색깔별·소재별 빨래 구분",
    trigger: "첫 빨래에서 옷 물들까 걱정될 때",
    summary: ["흰색/유색/진한색 3분류가 기본.",
              "속옷·수건은 분리, 니트는 세탁망+찬물.",
              "새 진한 색 옷은 첫 몇 번 따로."],
    resourceUrl: "https://www.google.com/", resourceLabel: "세탁 기호 정리 보기",
    tags: [], physical: false },

  { id: "w06", category: "food", title: "자취 가성비 식단 · 밀키트",
    trigger: "매번 배달 시켜서 식비가 부담될 때",
    summary: ["한 번 살 때 소분·냉동으로 낭비 줄이기.",
              "밀키트는 1인분 냉동 위주로.",
              "기본 양념 몇 개만 갖춰도 선택지가 넓어진다."],
    resourceUrl: "https://www.google.com/", resourceLabel: "1인 식단 예시 보기",
    tags: ["식비"], physical: false },

  { id: "w07", category: "food", title: "냉장고·식자재 관리",
    trigger: "사둔 재료를 자꾸 썩혀서 버릴 때",
    summary: ["칸별 온도 차이 활용(문쪽=변질 빠름).",
              "개봉일 라벨링, 먼저 산 것 앞으로.",
              "1인 가구는 소량 구매가 결국 이득."],
    resourceUrl: "https://www.google.com/", resourceLabel: "보관법 정리 보기",
    tags: [], physical: false },

  { id: "w08", category: "admin", title: "전입신고 하는 법",
    trigger: "이사하고 뭘 신고해야 하나 싶을 때",
    summary: ["정부24 온라인 또는 주민센터 방문.",
              "확정일자까지 받아야 보증금 보호.",
              "입주 즉시 처리, 미루지 말 것."],
    resourceUrl: "https://www.gov.kr/", resourceLabel: "정부24 전입신고 안내",
    tags: ["행정", "첫주"], physical: false },

  { id: "w09", category: "admin", title: "청년월세 지원 신청",
    trigger: "월세 부담을 덜 방법을 찾을 때",
    summary: ["나이·소득·거주 요건 확인이 먼저.",
              "지자체별로 별도 지원이 겹칠 수 있음.",
              "계약서·주민등록 등 서류 미리 준비."],
    resourceUrl: "https://www.gov.kr/", resourceLabel: "청년월세 지원 안내",
    tags: ["지원금"], physical: false },

  { id: "w10", category: "season", title: "장마철 습도·결로 관리",
    trigger: "벽에 물방울·곰팡이가 생기기 시작할 때",
    summary: ["제습기/제습제 + 하루 몇 번 환기.",
              "벽에 가구 딱 붙이지 않기(공기 순환).",
              "곰팡이는 초기에 제거해야 번지지 않는다."],
    resourceUrl: "https://www.youtube.com/", resourceLabel: "결로 잡는 법 영상",
    tags: ["여름", "곰팡이"], physical: false },

  { id: "w11", category: "safety", title: "현관 보안 (걸쇠·도어가드)",
    trigger: "혼자 살며 문 보안이 불안할 때",
    summary: ["기본 잠금 외 걸쇠·도어가드 추가.",
              "택배는 문 앞보다 무인함 권장.",
              "창문 잠금장치도 함께 점검."],
    resourceUrl: "https://www.google.com/", resourceLabel: "1인 가구 보안 팁",
    tags: ["안전"], physical: false },

  { id: "w12", category: "appliance", title: "에어컨 콘센트·전압 확인",
    trigger: "에어컨을 새로 설치·연결하려 할 때",
    summary: ["에어컨은 전용 콘센트/전압이 필요할 수 있음.",
              "연장선 사용은 화재 위험, 지양.",
              "설치 위치와 배수 방향 미리 확인."],
    resourceUrl: "https://www.google.com/", resourceLabel: "설치 전 확인사항",
    tags: ["여름"], physical: false },
  // ... 카테고리별로 확장
];
```

---

## 4. 링크 정책

- `resourceUrl`은 실제 인터뷰용 프로토타입에서는 **검증된 실제 유튜브/블로그/정부 링크**로 교체한다.
  (더미 단계에선 placeholder 도메인 사용 가능)
- 물리 작업(`physical: true`)은 **텍스트로 정면 설명하지 않고 링크아웃**을 주 CTA로 둔다.

---

## 5. 파킹된 데이터 (이번 스프린트 미포함)

- 청소 루틴/스케줄 데이터 — 별도 컨텍스트 확보 후 `03-data.md`에 추가 예정.
- 지도/좌표, 실제 매물, 업체 연락처, 사용자 계정 — 범위 밖.
