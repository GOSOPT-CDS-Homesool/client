import { styled } from "styled-components";
import UserProfile from "../@components/myPage/userProfile";
import { MoveToSilverBannerIc } from "../assets";
import CouponInfoBox from "../@components/myPage/couponInfoBox";

export default function MyPage() {
  return (
    <>
      <UserProfile />
      <MoveToSilverBannerIcon />
      <CouponInfoBox />
    </>
  );
}

const MoveToSilverBannerIcon = styled(MoveToSilverBannerIc)`
  margin: 1.5rem 0 3rem 0;
`;
