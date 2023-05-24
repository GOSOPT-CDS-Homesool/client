import React from "react";
import CouponInfo from "./couponInfo";
import { USER_DATA } from "../../core/userData";
import { styled } from "styled-components";
import { UserDataType } from "../../type/userDataType";

export default function CouponInfoBox(props: any) {
  const { userData } = props;
  const { point, coupon, interest } = userData;

  return (
    <CouponInfoBoxWrapper>
      <CouponInfo title="적립금" value={point} />
      <CouponInfo title="쿠폰" value={coupon} />
      <CouponInfo title="관심상품" value={interest} />
    </CouponInfoBoxWrapper>
  );
}

const CouponInfoBoxWrapper = styled.section`
  display: flex;
`;
