import { Link } from "react-router-dom";
import type { WikiEntry } from "../../../data/wiki";
import { CATEGORY_META } from "../constants";

interface Props {
  entry: WikiEntry;
  showCategory?: boolean; // 검색 결과처럼 카테고리가 섞일 때 표시
}

// 목록 한 줄: 제목 + "언제 찾게 되나(트리거)" + 태그 (02 §3-2)
export function WikiEntryRow({ entry, showCategory = false }: Props) {
  return (
    <li>
      <Link
        to={`/wiki/entry/${entry.id}`}
        className="block rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition active:scale-[0.99]"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-neutral-900">{entry.title}</h3>
          {showCategory && (
            <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-500">
              {CATEGORY_META[entry.category].label}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-neutral-500">
          {entry.trigger}
        </p>
        {entry.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span key={tag} className="text-xs text-neutral-400">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </li>
  );
}
