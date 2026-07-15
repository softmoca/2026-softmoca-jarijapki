import { useState } from "react";

// "이거 유용하면 저장" — 실제로 저장하지 않는다.
// 인터뷰에서 북마크(저장) 행동을 관찰하기 위한 UI (01 파트 B 10번).
export function SaveButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setSaved((v) => !v)}
      aria-pressed={saved}
      className={[
        "w-full rounded-xl border px-4 py-3 text-sm font-medium transition",
        saved
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-300 bg-white text-neutral-700 active:bg-neutral-50",
      ].join(" ")}
    >
      {saved ? "★ 저장됨" : "☆ 이거 유용하면 저장"}
    </button>
  );
}
