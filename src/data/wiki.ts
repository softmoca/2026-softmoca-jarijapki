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
];
