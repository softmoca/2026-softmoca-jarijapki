import { Link, Navigate, useParams } from "react-router-dom";
import { WIKI_ENTRIES, type WikiCategory } from "../../../data/wiki";
import { CATEGORY_META } from "../constants";
import { WikiEntryRow } from "../components/WikiEntryRow";

const VALID_CATEGORIES = new Set(Object.keys(CATEGORY_META));

// 카테고리별 목록 `/wiki/:category` — 02-product-spec.md §3-2
export function WikiCategoryPage() {
  const { category } = useParams();

  if (!category || !VALID_CATEGORIES.has(category)) {
    return <Navigate to="/wiki" replace />;
  }
  const cat = category as WikiCategory;
  const meta = CATEGORY_META[cat];
  const entries = WIKI_ENTRIES.filter((e) => e.category === cat);

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-10">
      <Link to="/wiki" className="text-sm text-neutral-500">
        ← 백과로
      </Link>

      <header className="mt-4 flex items-center gap-3">
        <span className="text-3xl" aria-hidden>
          {meta.icon}
        </span>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">{meta.label}</h1>
          <p className="text-xs text-neutral-400">{entries.length}개 항목</p>
        </div>
      </header>

      {entries.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-2">
          {entries.map((entry) => (
            <WikiEntryRow key={entry.id} entry={entry} />
          ))}
        </ul>
      ) : (
        <p className="mt-6 rounded-xl bg-neutral-50 p-6 text-center text-sm text-neutral-500">
          아직 항목이 없어요.
        </p>
      )}
    </main>
  );
}
