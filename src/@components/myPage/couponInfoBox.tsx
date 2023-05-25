import { styled } from "styled-components";
import CouponInfo from "./couponInfo";

interface CouponInfoBoxProps {
  point: number;
  coupon: number;
  interest: number;
}

export default function CouponInfoBox(props: CouponInfoBoxProps) {
  const { point, coupon, interest } = props;

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
