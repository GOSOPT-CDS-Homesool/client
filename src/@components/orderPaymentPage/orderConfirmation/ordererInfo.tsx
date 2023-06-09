import { styled } from "styled-components";
import { RightSideOpenButton } from "../../../assets";
import GrayGap from "../../common/GrayGap";

interface UserInfoProps {
  nickName: string;
  phoneNumber: string;
}

export default function OrdererInfo(props: UserInfoProps) {
  const { nickName, phoneNumber } = props;

  return (
    <>
      <OrdererInfoContainer>
        <HeaderTitle>주문자</HeaderTitle>
        <OrdererInfomation>
          {nickName} {phoneNumber}
        </OrdererInfomation>
        <RightSideOpenIcon />
      </OrdererInfoContainer>
      <GrayGap />
    </>
  );
}

const RightSideOpenIcon = styled(RightSideOpenButton)`
  position: absolute;
  margin-left: 30rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
`;

const OrdererInfoContainer = styled.div`
  display: flex;
  margin: 3.1rem 1.6rem;
`;

const OrdererInfomation = styled.p`
  margin: 0.3rem 0 0 3rem;
  ${({ theme }) => theme.fonts.body01};
`;

const HeaderTitle = styled.header`
  padding-right: 2rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  ${({ theme }) => theme.fonts.head02};
`;
