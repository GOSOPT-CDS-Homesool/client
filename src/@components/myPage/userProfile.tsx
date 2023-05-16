import React from "react";
import { MyPageUpdateProfileIc, MyPageUserProfileImgIc } from "../../assets";
import { styled } from "styled-components";

export default function UserProfile() {
  return (
    <>
      <MyPageUserProfileImgIc />
      <Name>이호재님</Name>
      <RankWrapper>
        <p>이번달 등급</p>
        <p>브론즈</p>
      </RankWrapper>
      <MyPageUpdateProfileIc />
    </>
  );
}

const Name = styled.h1`
  ${({ theme }) => theme.fonts.head01}
`;

const RankWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.body02}
`;
