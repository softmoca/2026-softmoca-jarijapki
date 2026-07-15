import { WIKI_ENTRIES, type WikiEntry } from "../../data/wiki";

// 전역 백과 검색 — "조립 시간 죽이기"의 핵심 UX(02 §3-1).
// 제목·트리거·요약·태그를 통으로 훑어 키워드 포함 여부로 매칭한다.
export function searchEntries(query: string): WikiEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return WIKI_ENTRIES.filter((entry) => {
    const haystack = [entry.title, entry.trigger, ...entry.summary, ...entry.tags]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
