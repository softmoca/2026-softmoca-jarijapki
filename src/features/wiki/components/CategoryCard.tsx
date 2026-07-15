import { Link } from "react-router-dom";
import type { WikiCategory } from "../../../data/wiki";
import { CATEGORY_META } from "../constants";

interface Props {
  category: WikiCategory;
  count: number;
}

export function CategoryCard({ category, count }: Props) {
  const meta = CATEGORY_META[category];
  return (
    <Link
      to={`/wiki/${category}`}
      className="flex min-h-[7rem] flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition active:scale-[0.99]"
    >
      <span className="text-2xl" aria-hidden>
        {meta.icon}
      </span>
      <span className="mt-2 font-semibold text-neutral-900">{meta.label}</span>
      <span className="mt-0.5 text-xs text-neutral-400">{meta.blurb}</span>
      <span className="mt-auto pt-2 text-xs text-neutral-400">{count}개</span>
    </Link>
  );
}
