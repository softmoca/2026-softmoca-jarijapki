import { Link, useNavigate } from "react-router-dom";
import { SERVICE_NAME, SERVICE_TAGLINE } from "../../../config/service";
import { SearchBar } from "../../../components/SearchBar";

// 홈 `/` — 02-product-spec.md §1
// 두 기능의 상호작용 방식 차이(의사결정 지원 vs 반응형 조회)를 진입 문구로 드러낸다.
// ⚠️ 청소 카드는 넣지 않는다(파킹).
export function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          {SERVICE_NAME}
        </h1>
        <p className="mt-2 leading-relaxed text-neutral-500">{SERVICE_TAGLINE}</p>
      </header>

      <div className="flex flex-col gap-4">
        {/* ① 방 구할 때 체크리스트 — 특정 순간의 의사결정 지원 */}
        <Link
          to="/checklist"
          className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition active:scale-[0.99]"
        >
          <span className="inline-block rounded-full bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white">
            방 구하는 중
          </span>
          <h2 className="mt-3 text-lg font-semibold text-neutral-900">
            방 구하는 중이에요!!!!!!!!!
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-500">
            계약 직전, 무엇을 봐야 하는지 순서대로 짚어드려요.
          </p>
        </Link>

        {/* ② 자취 백과 — 문제가 터지면 찾아보는 반응형 레퍼런스 */}
        <Link
          to="/wiki"
          className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition active:scale-[0.99]"
        >
          <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
            자취 중
          </span>
          <h2 className="mt-3 text-lg font-semibold text-neutral-900">
            이미 자취 중인데 뭔가 막혔어요
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-500">
            문제가 터졌을 때 찾아보는 자취 백과 — 3줄 요약과 검증된 자료로.
          </p>
        </Link>
      </div>

      {/* 하단: 전역 백과 검색 — 홈에서도 바로 키워드로 진입 */}
      <div className="mt-auto pt-12">
        <p className="mb-2 text-sm font-medium text-neutral-500">바로 검색하기</p>
        <SearchBar
          placeholder="변기 막힘, 전입신고, 결로 …"
          onSubmit={(query) =>
            navigate(`/wiki?q=${encodeURIComponent(query)}`)
          }
        />
      </div>
    </main>
  );
}
