import { styled } from "styled-components";
import { BackButtonIc } from "../../../assets";
import ShippingAddress from "./shippingAddress";
import OrdererInfo from "./ordererInfo";
import OrderProductInfo from "./orderProductInfo";

export default function OrderConfirmation() {
  return (
    <div>
      <DetailHeader>
        <BackButtonIcon />
        <DetailTitle>주문/결제</DetailTitle>
      </DetailHeader>
      <ShippingAddress />
      <OrdererInfo />
      <OrderProductInfo />
    </div>
  );
}

const BackButtonIcon = styled(BackButtonIc)`
  margin: 0.2rem 0 0 -0.8rem;
`;

const DetailTitle = styled.h1`
  margin: 0.5rem 0 1.3rem 12.9rem;
  ${({ theme }) => theme.fonts.body01}
`;

const DetailHeader = styled.header`
  display: flex;
  margin-top: 0.8rem;
`;
