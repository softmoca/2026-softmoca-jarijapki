import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../features/home/pages/HomePage";
import { SituationSelectPage } from "../features/checklist/pages/SituationSelectPage";
import { ChecklistDetailPage } from "../features/checklist/pages/ChecklistDetailPage";
import { WikiHomePage } from "../features/wiki/pages/WikiHomePage";
import { WikiCategoryPage } from "../features/wiki/pages/WikiCategoryPage";
import { WikiEntryPage } from "../features/wiki/pages/WikiEntryPage";

// 클라이언트 사이드 라우팅(백엔드 호출 없음). 라우트 구조는 02-product-spec.md §0.
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checklist" element={<SituationSelectPage />} />
        <Route path="/checklist/:situation" element={<ChecklistDetailPage />} />
        <Route path="/wiki" element={<WikiHomePage />} />
        {/* /wiki/entry/:id 를 /wiki/:category 보다 먼저 둬 'entry'가 카테고리로 안 잡히게 한다 */}
        <Route path="/wiki/entry/:id" element={<WikiEntryPage />} />
        <Route path="/wiki/:category" element={<WikiCategoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
