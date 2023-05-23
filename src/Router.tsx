import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./@pages/myPage";
import Detail from "./@pages/detail";
import OrderPayment from "./@pages/orderPayment";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/orderPayment" element={<OrderPayment />} />
      </Routes>
    </BrowserRouter>
  );
}
