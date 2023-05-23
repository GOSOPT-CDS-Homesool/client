import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./@pages/myPage";
import Detail from "./@pages/detail";
import OrderPayment from "./@pages/orderPayment";
import Home from "./@pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/orderPayment" element={<OrderPayment />} />
      </Routes>
    </BrowserRouter>
  );
}
