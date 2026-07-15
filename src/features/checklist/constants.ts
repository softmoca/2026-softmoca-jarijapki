import type { Situation, ChecklistStep } from "../../data/checklist";

// 화면 표시용 라벨/정렬 메타. 데이터 스키마(03-data.md)는 그대로 두고, 프레젠테이션은 feature가 소유한다.

export const SITUATION_OPTIONS: { value: Situation; label: string }[] = [
  { value: "oneroom", label: "원룸" },
  { value: "officetel", label: "오피스텔" },
  { value: "semi_basement", label: "반지하/1층" },
  { value: "rooftop", label: "옥탑" },
  { value: "etc", label: "기타" },
];

// 순서가 핵심이다(02 §2-2). 실제 방 구하는 순서대로 단계를 제시한다.
export const STEP_ORDER: ChecklistStep[] = [
  "before_visit",
  "on_visit",
  "on_contract",
  "after_contract",
];

export const STEP_META: Record<ChecklistStep, { label: string; hint: string }> = {
  before_visit: { label: "STEP 1 · 방문 전", hint: "동네·입지" },
  on_visit: { label: "STEP 2 · 방문 시", hint: "집 상태" },
  on_contract: { label: "STEP 3 · 계약 시", hint: "" },
  after_contract: { label: "STEP 4 · 계약 후", hint: "입주 준비" },
};

// 강조용 관심사 태그(선택). 데이터 항목의 tags와 매칭돼 "선택 시 관련 항목 강조"에 쓰인다(02 §2-1).
// value는 CHECKLIST_ITEMS에 실제 존재하는 태그와 일치시켜, 선택이 항상 유효한 강조로 이어지게 한다.
export const EMPHASIS_TAGS: { value: string; label: string }[] = [
  { value: "자연광", label: "자연광 중요" },
  { value: "저소음", label: "저소음 중요" },
  { value: "안전", label: "안전 중요" },
];
