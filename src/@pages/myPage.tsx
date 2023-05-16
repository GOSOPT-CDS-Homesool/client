import { styled } from "styled-components";
import UserProfile from "../@components/myPage/userProfile";
import { MoveToSilverBannerIc } from "../assets";

export default function MyPage() {
  return (
    <>
      <UserProfile />
      <MoveToSilverBannerIcon />
    </>
  );
}

const MoveToSilverBannerIcon = styled(MoveToSilverBannerIc)`
  margin: 1.5rem 0 3rem 0;
`;
