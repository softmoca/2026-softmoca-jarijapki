import { useState, type FormEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  initialValue?: string;
  onSubmit: (query: string) => void;
}

// 전역 백과 검색 입력. 홈·백과(M4)에서 공용으로 쓴다.
// 검색 로직 자체는 백과(M4) 소관이므로, 여기서는 입력만 받아 상위로 넘긴다.
export function SearchBar({
  placeholder = "검색어를 입력하세요",
  initialValue = "",
  onSubmit,
}: SearchBarProps) {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = value.trim();
    if (!query) return;
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="flex gap-2">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="백과 검색"
        className="min-w-0 flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white active:bg-neutral-700"
      >
        검색
      </button>
    </form>
  );
}
