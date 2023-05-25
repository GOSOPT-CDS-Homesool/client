import { styled } from "styled-components";
import { OrderListType } from "../../type/mypage";

export default function TotalOrder(props: OrderListType) {
  const { orderTitle, orderNum } = props;

  function checkIsZero() {
    return orderNum === 0;
  }

  return (
    <TotalOrderWrapper isZero={checkIsZero()}>
      <OrderNum>{orderNum}</OrderNum>
      <OrderTitle>{orderTitle}</OrderTitle>
    </TotalOrderWrapper>
  );
}

const TotalOrderWrapper = styled.article<{ isZero: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 7rem;
  height: 7rem;

  color: ${({ theme, isZero }) => (isZero ? theme.colors.GRAYSCALE600 : theme.colors.GRAYSCALE800)};
`;

const OrderNum = styled.p`
  ${({ theme }) => theme.fonts.roboto05};
`;

const OrderTitle = styled.h1`
  margin-top: 2.2rem;
  ${({ theme }) => theme.fonts.caption02};
`;
