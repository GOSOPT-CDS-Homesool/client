import { styled } from "styled-components";
import UserProfile from "../@components/myPage/userProfile";
import { MoveToSilverBannerIc, MyPageAdsIc } from "../assets";
import CouponInfoBox from "../@components/myPage/couponInfoBox";
import TotalOrderList from "../@components/myPage/totalOrderList";

export default function MyPage() {
  return (
    <>
      <UserProfile />
      <MoveToSilverBannerIcon />
      <CouponInfoBox />
      <MyPageAdsIcon />
      <TotalOrderList />
    </>
  );
}

const MoveToSilverBannerIcon = styled(MoveToSilverBannerIc)`
  margin: 1.5rem 0 3rem 0;
`;

const MyPageAdsIcon = styled(MyPageAdsIc)`
  margin: 3.3rem 0 4rem -1.7rem;
`;
