import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getUserData } from "../../api/userData";
import { BackButtonIc } from "../../assets";
import { UserDataType } from "../../type/userDataType";
import OrderProductInfo from "./orderConfirmation/orderProductInfo";
import OrdererInfo from "./orderConfirmation/ordererInfo";
import ShippingAddress from "./orderConfirmation/shippingAddress";

interface OrderConfirmationProps {
  id: string;
}

export default function OrderConfirmation(props: OrderConfirmationProps) {
  const { id } = props;

  const [userData, setUserData] = useState<UserDataType>();

  async function fetchUserData() {
    const response = await getUserData(id);
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
