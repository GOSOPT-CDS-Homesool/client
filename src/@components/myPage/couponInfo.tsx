import React from "react";
import { styled } from "styled-components";

interface CouponInfoProps {
  title: string;
  value: number;
}

export default function CouponInfo(props: CouponInfoProps) {
  const { title, value } = props;

  return (
    <CouponInfoWrapper>
      <h1>{title}</h1>
      <p>{value}</p>
    </CouponInfoWrapper>
  );
}

const CouponInfoWrapper = styled.article`
  width: 33%;
`;
