import { MyPageUpdateProfileIc, MyPageUserProfileImgIc } from "../../assets";
import { styled } from "styled-components";
import { UserDataType } from "../../type/userDataType";

export default function UserProfile(props: any) {
  const { userData } = props;
  const { nickName, userRank } = userData;

  return (
    <UserProfileContainer>
      <MyPageUserProfileImgIc />
      <UserProfileWrapper>
        <FlexBox>
          <Name>{nickName}</Name>
          <MyPageUpdateProfileIc />
        </FlexBox>
        <RankWrapper>
          <RankTitle>이번달 등급</RankTitle>
          <p>{userRank}</p>
        </RankWrapper>
      </UserProfileWrapper>
    </UserProfileContainer>
  );
}

const FlexBox = styled.section`
  display: flex;
  justify-content: space-between;

  width: 28.5rem;
  margin-left: 1.2rem;
`;
const UserProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 34.3rem;
  height: 4.8rem;
  margin-top: 2rem;
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

  margin-left: 1.2rem;

  ${({ theme }) => theme.fonts.body02}
`;

const RankTitle = styled.p`
  margin-right: 0.4rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
`;
