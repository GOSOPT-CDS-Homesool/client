import { styled } from "styled-components";
import { RightSideOpenButton } from "../../../assets";
import { BackButtonIc } from "../../../assets";

import ShippingAddress from "./shippingAddress";

export default function OrderConfirmation() {
  return (
    <div>
      <DetailHeader>
        <BackButtonIc />
        <DetailTitle>주문결제</DetailTitle>
      </DetailHeader>
      <ShippingAddress />
    </div>
  );
}

const DetailTitle = styled.h1`
  margin: 0.5rem 0 1.3rem 12.9rem;
  ${({ theme }) => theme.fonts.body03}
`;

const DetailHeader = styled.header`
  display: flex;
  margin-top: 0.8rem;
`;
