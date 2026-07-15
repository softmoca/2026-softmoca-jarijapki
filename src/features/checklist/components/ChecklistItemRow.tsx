import { useState } from "react";
import type { ChecklistItem } from "../../../data/checklist";

interface Props {
  item: ChecklistItem;
  checked: boolean;
  emphasized: boolean;
  onToggle: () => void;
}

// 체크 항목 한 줄: 체크박스 + 제목 + "왜 확인하나" 툴팁(탭으로 펼침).
// 툴팁(why)이 곧 '모르는 걸 모름' 해결 지점 — 인터뷰에서 이 반응을 본다(02 §2-2).
export function ChecklistItemRow({ item, checked, emphasized, onToggle }: Props) {
  const [showWhy, setShowWhy] = useState(false);

  return (
    <li
      className={[
        "rounded-xl border p-3.5 transition",
        emphasized ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 bg-white",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <input
          id={item.id}
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="mt-0.5 h-5 w-5 shrink-0 accent-neutral-900"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <label
              htmlFor={item.id}
              className={
                checked
                  ? "text-neutral-400 line-through"
                  : "font-medium text-neutral-900"
              }
            >
              {item.title}
            </label>
            {emphasized && (
              <span className="rounded-full bg-neutral-900 px-1.5 py-0.5 text-[10px] font-medium text-white">
                이 상황에 중요
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowWhy((v) => !v)}
            aria-expanded={showWhy}
            className="mt-1 text-xs text-neutral-500 underline underline-offset-2"
          >
            {showWhy ? "닫기" : "왜 확인하나요?"}
          </button>

          {showWhy && (
            <p className="mt-1.5 rounded-lg bg-neutral-100 p-2.5 text-xs leading-relaxed text-neutral-600">
              {item.why}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
