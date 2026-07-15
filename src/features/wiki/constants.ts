import type { WikiCategory } from "../../data/wiki";

// 화면 표시용 카테고리 메타. 데이터 스키마(03-data.md)는 그대로 두고, 프레젠테이션은 feature가 소유한다.
export const CATEGORY_META: Record<
  WikiCategory,
  { label: string; icon: string; blurb: string }
> = {
  repair: { label: "생활 수리", icon: "🔧", blurb: "변기 막힘·우풍 등" },
  appliance: { label: "가전 관리", icon: "🔌", blurb: "세탁기·에어컨 등" },
  waste: { label: "분리수거·쓰레기", icon: "🗑️", blurb: "배출법·종량제" },
  laundry: { label: "세탁", icon: "🧺", blurb: "색깔별·소재별" },
  food: { label: "식생활", icon: "🍳", blurb: "식단·식자재 관리" },
  admin: { label: "행정", icon: "📄", blurb: "전입신고·청년월세" },
  season: { label: "계절", icon: "🌦️", blurb: "습도·결로·벌레" },
  safety: { label: "안전", icon: "🔒", blurb: "현관·창문 보안" },
};

export const CATEGORY_ORDER: WikiCategory[] = [
  "repair",
  "appliance",
  "waste",
  "laundry",
  "food",
  "admin",
  "season",
  "safety",
];
