import { styled } from "styled-components";
import UserProfile from "../@components/myPage/userProfile";
import { MoveToSilverBannerIc, MyPageAdsIc } from "../assets";
import CouponInfoBox from "../@components/myPage/couponInfoBox";
import TotalOrderList from "../@components/myPage/totalOrderList";
import { useState } from "react";
import { OrderListType } from "../type/mypage";
import { USER_DATA } from "../core/userData";

export default function MyPage() {
  const [orderList, setOrderList] = useState<OrderListType>({
    waiting: USER_DATA.waiting,
    finish: USER_DATA.finish,
    ready: USER_DATA.ready,
    delivering: USER_DATA.delivering,
    delivered: USER_DATA.delivered,
  });

  return (
    <>
      <UserProfile />
      <MoveToSilverBannerIcon />
      <CouponInfoBox />
      <MyPageAdsIcon />
      <TotalOrderList orderList={orderList} />
    </>
  );
}

const MoveToSilverBannerIcon = styled(MoveToSilverBannerIc)`
  margin: 1.5rem 0 3rem 0;
`;

const MyPageAdsIcon = styled(MyPageAdsIc)`
  margin: 3.3rem 0 4rem -1.7rem;
`;
