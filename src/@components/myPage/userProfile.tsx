import { MyPageUpdateProfileIc, MyPageUserProfileImgIc } from "../../assets";
import { styled } from "styled-components";

export default function UserProfile() {
  return (
    <UserProfileContainer>
      <MyPageUserProfileImgIc />
      <UserProfileWrapper>
        <FlexBox width={28.5}>
          <Name>이호재님</Name>
          <MyPageUpdateProfileIc />
        </FlexBox>
        <FlexBox width={9.9}>
          <RankTitle>이번달 등급</RankTitle>
          <p>브론즈</p>
        </FlexBox>
      </UserProfileWrapper>
    </UserProfileContainer>
  );
}

const FlexBox = styled.section<{ width: number }>`
  display: flex;
  justify-content: space-between;

  width: ${({ width }) => width}rem;
  margin-left: 1.2rem;
`;
const UserProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 34.3rem;
  height: 4.8rem;
`;

const UserProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  ${({ theme }) => theme.fonts.head01}
`;

const RankWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.body02}
`;

const RankTitle = styled.p`
  margin-right: 0.4rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
`;
