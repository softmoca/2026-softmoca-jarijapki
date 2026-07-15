import { useState, type FormEvent } from "react";

// "빠진 항목 제보" — 전송하지 않는다. UI만 두고 인터뷰에서 제보 행동을 관찰한다(02 §2-2).
export function ReportMissing() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    // 프로토타입 단계: 실제로 저장/전송하지 않는다.
    setSubmitted(true);
    setText("");
  };

  return (
    <section className="mt-8 rounded-2xl border border-dashed border-neutral-300 p-4">
      <h2 className="text-sm font-semibold text-neutral-900">빠진 항목이 있나요?</h2>
      <p className="mt-1 text-xs text-neutral-500">
        놓친 체크 항목이나 순서가 이상한 곳을 알려주세요.
      </p>
      <form onSubmit={handleSubmit} className="mt-3">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setSubmitted(false);
          }}
          rows={3}
          placeholder="예) 관리비에 무엇이 포함되는지 확인"
          className="w-full resize-none rounded-xl border border-neutral-300 p-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
        />
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-xs text-neutral-400">
            * 프로토타입이라 실제 저장되지는 않아요.
          </span>
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white active:bg-neutral-700"
          >
            제보하기
          </button>
        </div>
      </form>
      {submitted && (
        <p className="mt-2 text-xs text-neutral-600">제보해 주셔서 감사합니다.</p>
      )}
    </section>
  );
}
