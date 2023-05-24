import { styled } from "styled-components";
import UserProfile from "../@components/myPage/userProfile";
import { MoveToSilverBannerIc, MyPageAdsIc } from "../assets";
import CouponInfoBox from "../@components/myPage/couponInfoBox";
import TotalOrderList from "../@components/myPage/totalOrderList";
import { useEffect, useState } from "react";
import { USER_DATA } from "../core/userData";
import { OrderListType } from "../type/mypage";
import MyShopping from "../@components/myPage/myShopping";
import CustomerCenter from "../@components/myPage/customerCenter";
import PageFooter from "../@components/common/pageFooter";
import CommonFooter from "../@components/common/commonFooter";
import { UserDataType } from "../type/userDataType";
import { getUserData } from "../api/userData";

export default function MyPage() {
  const [userData, setUserData] = useState<UserDataType>();
  const [orderList, setOrderList] = useState<OrderListType[]>([]);

  async function fetchUserData() {
    const response = await getUserData();
    setUserData(response);
    userData &&
      setOrderList([
        { id: 1, orderTitle: "입금대기", orderNum: userData.waiting },
        { id: 2, orderTitle: "결제완료", orderNum: userData.finish },
        { id: 3, orderTitle: "상품준비중", orderNum: userData.ready },
        { id: 4, orderTitle: "배송중", orderNum: userData.delivering },
        { id: 5, orderTitle: "배송완료", orderNum: userData.delivered },
      ]);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {userData && (
        <MyPageWrapper>
          <CommonFooter />
          <UserProfile userData={userData} />
          <MoveToSilverBannerIcon />
          <CouponInfoBox userData={userData} />
          <MyPageAdsIcon />
          <TotalOrderList orderList={orderList} />
          <MyShopping />
          <CustomerCenter />
          <PageFooter />
        </MyPageWrapper>
      )}
    </>
  );
}

const MoveToSilverBannerIcon = styled(MoveToSilverBannerIc)`
  margin: 1.5rem 0 3rem 0;
`;

const MyPageAdsIcon = styled(MyPageAdsIc)`
  margin: 3.3rem 0 4rem -1.7rem;
`;

const MyPageWrapper = styled.section`
  margin-top: 9.3rem;
`;
