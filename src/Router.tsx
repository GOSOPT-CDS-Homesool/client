import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./@pages/homePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
