import { styled } from "styled-components";
<<<<<<< HEAD
import { UserDataType } from "../../type/userDataType";

interface CouponInfoBoxProps {
  point: number;
  coupon: number;
  interest: number;
}

export default function CouponInfoBox(props: CouponInfoBoxProps) {
  const { point, coupon, interest } = props;
=======
import { USER_DATA } from "../../core/userData";
import CouponInfo from "./couponInfo";
>>>>>>> ff78dce59cf4ab2b30716c5986caa291b79a36cd

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
