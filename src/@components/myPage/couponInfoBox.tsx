import { styled } from "styled-components";
import { USER_DATA } from "../../core/userData";
import CouponInfo from "./couponInfo";

export default function CouponInfoBox() {
  return (
    <CouponInfoBoxWrapper>
      <CouponInfo title="적립금" value={USER_DATA.point} />
      <CouponInfo title="쿠폰" value={USER_DATA.coupon} />
      <CouponInfo title="관심상품" value={USER_DATA.interest} />
    </CouponInfoBoxWrapper>
  );
}

const CouponInfoBoxWrapper = styled.section`
  display: flex;
`;
