import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./@pages/myPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
