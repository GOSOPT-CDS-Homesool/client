import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./@pages/myPage";
import Detail from "./@pages/detail";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
