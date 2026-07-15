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
];
