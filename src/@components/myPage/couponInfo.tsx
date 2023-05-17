import React from "react";
import { styled } from "styled-components";

interface CouponInfoProps {
  title: string;
  value: number;
}

export default function CouponInfo(props: CouponInfoProps) {
  const { title, value } = props;

  function isValueInterest() {
    return title === "관심상품";
  }

  return (
    <CouponInfoWrapper isValueInterest={isValueInterest()}>
      <CouponInfoTitle>{title}</CouponInfoTitle>
      <CouponInfoVal>{value}</CouponInfoVal>
    </CouponInfoWrapper>
  );
}

const CouponInfoWrapper = styled.article<{ isValueInterest: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 33%;

  border-right: ${({ isValueInterest }) => (isValueInterest ? 0 : 0.1)}rem solid
    ${({ theme }) => theme.colors.GRAYSCALE400};
`;

const CouponInfoTitle = styled.h1`
  ${({ theme }) => theme.fonts.caption02}
`;

const CouponInfoVal = styled.p`
  margin-top: 1.2rem;
  ${({ theme }) => theme.fonts.body01}
`;
