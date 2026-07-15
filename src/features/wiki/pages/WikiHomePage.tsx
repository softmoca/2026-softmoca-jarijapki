import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { WIKI_ENTRIES, type WikiCategory } from "../../../data/wiki";
import { SearchBar } from "../../../components/SearchBar";
import { CATEGORY_ORDER } from "../constants";
import { CategoryCard } from "../components/CategoryCard";
import { WikiEntryRow } from "../components/WikiEntryRow";
import { searchEntries } from "../search";

// 카테고리 그리드 + 전역 검색 `/wiki` — 02-product-spec.md §3-1
export function WikiHomePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = query ? searchEntries(query) : [];

  const countIn = (category: WikiCategory) =>
    WIKI_ENTRIES.filter((e) => e.category === category).length;

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-10">
      <Link to="/" className="text-sm text-neutral-500">
        ← 홈으로
      </Link>

      <h1 className="mt-5 text-2xl font-bold text-neutral-900">자취 백과</h1>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        문제가 터졌을 때 찾아보는 큐레이션 지도 — 3줄 요약과 검증된 자료로.
      </p>

      <div className="mt-5">
        <SearchBar
          key={query}
          initialValue={query}
          placeholder="변기 막힘, 전입신고, 결로 …"
          onSubmit={(q) => navigate(`/wiki?q=${encodeURIComponent(q)}`)}
        />
      </div>

      {query ? (
        <section className="mt-8">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="text-sm font-semibold text-neutral-900">
              ‘{query}’ 검색 결과 {results.length}개
            </h2>
            <Link to="/wiki" className="shrink-0 text-xs text-neutral-500">
              전체 카테고리
            </Link>
          </div>
          {results.length > 0 ? (
            <ul className="mt-3 flex flex-col gap-2">
              {results.map((entry) => (
                <WikiEntryRow key={entry.id} entry={entry} showCategory />
              ))}
            </ul>
          ) : (
            <p className="mt-6 rounded-xl bg-neutral-50 p-6 text-center text-sm text-neutral-500">
              검색 결과가 없어요. 다른 키워드로 찾아보세요.
            </p>
          )}
        </section>
      ) : (
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-3">
            {CATEGORY_ORDER.map((category) => (
              <CategoryCard
                key={category}
                category={category}
                count={countIn(category)}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
