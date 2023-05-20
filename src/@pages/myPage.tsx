import { styled } from "styled-components";
import UserProfile from "../@components/myPage/userProfile";
import { MoveToSilverBannerIc, MyPageAdsIc } from "../assets";
import CouponInfoBox from "../@components/myPage/couponInfoBox";
import TotalOrderList from "../@components/myPage/totalOrderList";
import { useState } from "react";
import { USER_DATA } from "../core/userData";
import { OrderListType } from "../type/mypage";
import MyShopping from "../@components/myPage/myShopping";

export default function MyPage() {
  const [orderList, setOrderList] = useState<OrderListType[]>([
    { id: 1, orderTitle: "입금대기", orderNum: USER_DATA.waiting },
    { id: 2, orderTitle: "결제완료", orderNum: USER_DATA.finish },
    { id: 3, orderTitle: "상품준비중", orderNum: USER_DATA.ready },
    { id: 4, orderTitle: "배송중", orderNum: USER_DATA.delivering },
    { id: 5, orderTitle: "배송완료", orderNum: USER_DATA.delivered },
  ]);

  return (
    <>
      <UserProfile />
      <MoveToSilverBannerIcon />
      <CouponInfoBox />
      <MyPageAdsIcon />
      <TotalOrderList orderList={orderList} />
      <MyShopping />
    </>
  );
}

const MoveToSilverBannerIcon = styled(MoveToSilverBannerIc)`
  margin: 1.5rem 0 3rem 0;
`;

const MyPageAdsIcon = styled(MyPageAdsIc)`
  margin: 3.3rem 0 4rem -1.7rem;
`;
