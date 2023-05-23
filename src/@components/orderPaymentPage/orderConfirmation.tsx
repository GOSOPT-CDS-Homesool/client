import { styled } from "styled-components";
import { BackButtonIc } from "../../assets";
import ShippingAddress from "./orderConfirmation/shippingAddress";
import OrdererInfo from "./orderConfirmation/ordererInfo";
import OrderProductInfo from "./orderConfirmation/orderProductInfo";
import PaymentMethod from "./paymentConfirmation/paymentMethod";
import DiscountCalculation from "./paymentConfirmation/ discountCalculation";
import AmountOfPayment from "./paymentConfirmation/ amountOfPayment";

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
      <PaymentMethod />
      <DiscountCalculation />
      <AmountOfPayment />
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