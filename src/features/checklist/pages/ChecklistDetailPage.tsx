import { useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import {
  CHECKLIST_ITEMS,
  type Situation,
  type ChecklistItem,
} from "../../../data/checklist";
import {
  STEP_ORDER,
  STEP_META,
  SITUATION_OPTIONS,
  EMPHASIS_TAGS,
} from "../constants";
import { ChecklistItemRow } from "../components/ChecklistItemRow";
import { ReportMissing } from "../components/ReportMissing";

const VALID_SITUATIONS = new Set(SITUATION_OPTIONS.map((o) => o.value));
const VALID_TAGS = new Set(EMPHASIS_TAGS.map((t) => t.value));

// 단계별 체크리스트 `/checklist/:situation` — 02-product-spec.md §2-2
// 체크 상태는 세션 메모리(React state)만. 저장·로그인 없음.
export function ChecklistDetailPage() {
  const { situation } = useParams();
  const [searchParams] = useSearchParams();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // 잘못된 상황 값이면 선택 화면으로 되돌린다.
  if (!situation || !VALID_SITUATIONS.has(situation as Situation)) {
    return <Navigate to="/checklist" replace />;
  }
  const sit = situation as Situation;
  const situationLabel = SITUATION_OPTIONS.find((o) => o.value === sit)!.label;

  const selectedTags = (searchParams.get("tags") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter((t) => VALID_TAGS.has(t));
  const emphasisLabels = EMPHASIS_TAGS.filter((t) =>
    selectedTags.includes(t.value)
  ).map((t) => t.label);

  const isEmphasized = (item: ChecklistItem) =>
    item.situations.includes(sit) ||
    (item.tags?.some((t) => selectedTags.includes(t)) ?? false);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const total = CHECKLIST_ITEMS.length;
  const done = CHECKLIST_ITEMS.filter((i) => checked[i.id]).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-10">
      <Link to="/checklist" className="text-sm text-neutral-500">
        ← 상황 다시 선택
      </Link>

      <header className="mt-4">
        <p className="text-xs font-medium text-neutral-500">
          {situationLabel} · 방 구할 때 체크리스트
        </p>
        <h1 className="mt-1 text-2xl font-bold text-neutral-900">
          순서대로 짚어드릴게요
        </h1>
        {emphasisLabels.length > 0 && (
          <p className="mt-2 text-xs text-neutral-500">
            강조: {emphasisLabels.join(", ")}
          </p>
        )}

        {/* 진행률 (세션 한정) */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>진행</span>
            <span>
              {done} / {total}
            </span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-neutral-900 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </header>

      {STEP_ORDER.map((step) => {
        const items = CHECKLIST_ITEMS.filter((i) => i.step === step).sort(
          (a, b) => a.order - b.order
        );
        if (items.length === 0) return null;
        const meta = STEP_META[step];
        return (
          <section key={step} className="mt-8">
            <div className="flex items-baseline gap-2">
              <h2 className="text-sm font-bold text-neutral-900">{meta.label}</h2>
              {meta.hint && (
                <span className="text-xs text-neutral-400">{meta.hint}</span>
              )}
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {items.map((item) => (
                <ChecklistItemRow
                  key={item.id}
                  item={item}
                  checked={!!checked[item.id]}
                  emphasized={isEmphasized(item)}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </ul>
          </section>
        );
      })}

      <ReportMissing />
    </main>
  );
}
