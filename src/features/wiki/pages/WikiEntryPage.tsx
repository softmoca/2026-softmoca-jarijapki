import { Link, Navigate, useParams } from "react-router-dom";
import { WIKI_ENTRIES } from "../../../data/wiki";
import { CATEGORY_META } from "../constants";
import { SaveButton } from "../components/SaveButton";
import { WikiEntryRow } from "../components/WikiEntryRow";

// 항목 상세 `/wiki/entry/:id` — 02-product-spec.md §3-3
// 원칙: 3줄 요약 + 링크아웃. 긴 본문·단계별 텍스트 설명을 넣지 않는다(영상에 짐).
export function WikiEntryPage() {
  const { id } = useParams();
  const entry = WIKI_ENTRIES.find((e) => e.id === id);

  if (!entry) {
    return <Navigate to="/wiki" replace />;
  }
  const meta = CATEGORY_META[entry.category];
  const related = WIKI_ENTRIES.filter(
    (e) => e.category === entry.category && e.id !== entry.id
  ).slice(0, 3);

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-10">
      <Link to={`/wiki/${entry.category}`} className="text-sm text-neutral-500">
        ← {meta.label}
      </Link>

      <p className="mt-4 text-xs font-medium text-neutral-400">
        {meta.icon} {meta.label}
      </p>
      <h1 className="mt-1 text-2xl font-bold text-neutral-900">{entry.title}</h1>

      {/* 언제 찾게 되나 (트리거) */}
      <div className="mt-4 rounded-xl bg-neutral-50 p-3.5">
        <p className="text-xs font-medium text-neutral-400">언제 찾게 되나</p>
        <p className="mt-0.5 text-sm text-neutral-700">{entry.trigger}</p>
      </div>

      {/* 3줄 요약 */}
      <section className="mt-6">
        <h2 className="text-sm font-semibold text-neutral-900">3줄 요약</h2>
        <ul className="mt-2 flex flex-col gap-2">
          {entry.summary.map((line, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-neutral-700">
              <span className="text-neutral-300">{i + 1}</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 물리 작업은 텍스트로 정면 설명하지 않고 링크아웃을 주 CTA로 둔다 */}
      {entry.physical && (
        <p className="mt-5 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-700">
          직접 하기 전에 영상으로 먼저 확인하는 걸 권해요.
        </p>
      )}

      <a
        href={entry.resourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3.5 text-sm font-semibold text-white active:bg-neutral-700"
      >
        {entry.resourceLabel} ↗
      </a>

      <div className="mt-3">
        <SaveButton />
      </div>

      {/* 관련 항목 (같은 카테고리 2–3개) */}
      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold text-neutral-900">관련 항목</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {related.map((e) => (
              <WikiEntryRow key={e.id} entry={e} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
