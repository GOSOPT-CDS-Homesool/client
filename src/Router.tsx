import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./@pages/myPage";
import Home from "./@pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
