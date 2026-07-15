import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Situation } from "../../../data/checklist";
import { SITUATION_OPTIONS, EMPHASIS_TAGS } from "../constants";

// 상황 선택 `/checklist` — 02-product-spec.md §2-1
export function SituationSelectPage() {
  const navigate = useNavigate();
  const [situation, setSituation] = useState<Situation | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const toggleTag = (value: string) =>
    setTags((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );

  const start = () => {
    if (!situation) return;
    const query = tags.length
      ? `?tags=${encodeURIComponent(tags.join(","))}`
      : "";
    navigate(`/checklist/${situation}${query}`);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-10">
      <Link to="/" className="text-sm text-neutral-500">
        ← 홈으로
      </Link>

      <h1 className="mt-5 text-2xl font-bold text-neutral-900">
        방 구할 때 체크리스트
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        방 유형과 관심사를 고르면, 그 상황에서 특히 중요한 항목을 강조해 드려요.
      </p>

      {/* 방 유형 (필수) */}
      <section className="mt-8">
        <h2 className="text-sm font-semibold text-neutral-900">방 유형</h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {SITUATION_OPTIONS.map((option) => {
            const selected = situation === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSituation(option.value)}
                aria-pressed={selected}
                className={[
                  "rounded-xl border px-4 py-3 text-sm font-medium transition",
                  selected
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 active:bg-neutral-50",
                ].join(" ")}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 관심사 태그 (선택) */}
      <section className="mt-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          관심사 <span className="font-normal text-neutral-400">(선택)</span>
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {EMPHASIS_TAGS.map((tag) => {
            const selected = tags.includes(tag.value);
            return (
              <button
                key={tag.value}
                type="button"
                onClick={() => toggleTag(tag.value)}
                aria-pressed={selected}
                className={[
                  "rounded-full border px-3.5 py-1.5 text-sm transition",
                  selected
                    ? "border-neutral-900 bg-neutral-100 font-medium text-neutral-900"
                    : "border-neutral-200 bg-white text-neutral-600 active:bg-neutral-50",
                ].join(" ")}
              >
                {tag.label}
              </button>
            );
          })}
        </div>
      </section>

      <button
        type="button"
        onClick={start}
        disabled={!situation}
        className="mt-auto w-full rounded-xl bg-neutral-900 px-4 py-3.5 text-sm font-semibold text-white transition disabled:bg-neutral-200 disabled:text-neutral-400"
      >
        체크리스트 시작
      </button>
    </main>
  );
}
