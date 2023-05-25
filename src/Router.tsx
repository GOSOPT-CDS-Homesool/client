import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./@pages/detail";
import Home from "./@pages/home";
import MyPage from "./@pages/myPage";
import OrderPayment from "./@pages/orderPayment";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/order-payment" element={<OrderPayment />} />
      </Routes>
    </BrowserRouter>
  );
}
