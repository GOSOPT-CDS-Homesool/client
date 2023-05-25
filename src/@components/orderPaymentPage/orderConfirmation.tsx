import { styled } from "styled-components";
import { BackButtonIc } from "../../assets";
import ShippingAddress from "./orderConfirmation/shippingAddress";
import OrdererInfo from "./orderConfirmation/ordererInfo";
import OrderProductInfo from "./orderConfirmation/orderProductInfo";
import PaymentMethod from "./paymentConfirmation/paymentMethod";
import DiscountCalculation from "./paymentConfirmation/ discountCalculation";
import AmountOfPayment from "./paymentConfirmation/ amountOfPayment";
import { UserDataType } from "../../type/userDataType";
import { useState, useEffect } from "react";
import { getUserData } from "../../api/userData";

export default function OrderConfirmation() {
  const [userData, setUserData] = useState<UserDataType>();

  async function fetchUserData() {
    const response = await getUserData();
    setUserData(response);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {userData && (
        <>
          <DetailHeader>
            <BackButtonIcon />
            <DetailTitle>주문/결제</DetailTitle>
          </DetailHeader>
          <ShippingAddress address={userData.address} />
          <OrdererInfo nickName={userData.nickName} phoneNumber={userData.phoneNumber} />
          <OrderProductInfo />
          <PaymentMethod />
          <DiscountCalculation />
          <AmountOfPayment />
        </>
      )}
    </>
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
