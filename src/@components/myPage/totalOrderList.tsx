import React from "react";
import { OrderListType } from "../../type/mypage";
import Title from "../common/title";
import { styled } from "styled-components";
import TotalOrder from "./totalOrder";

export default function TotalOrderList(props: OrderListType[]) {
  const { orderList } = props;

  return (
    <>
      <TitleWrapper>
        <Title title="전체 주문 내역" />
        <SubTitle>(최근 30일)</SubTitle>
      </TitleWrapper>
      <OrderListWrapper>
        {orderList.map(({ id, orderTitle, orderNum }: OrderListType) => (
          <TotalOrder key={id} id={id} orderTitle={orderTitle} orderNum={orderNum} />
        ))}
      </OrderListWrapper>
    </>
  );
}

const SubTitle = styled.p`
  margin-left: 0.4rem;

  color: ${({ theme }) => theme.colors.GRAYSCALE500};
  ${({ theme }) => theme.fonts.body02};
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
`;

const OrderListWrapper = styled.section`
  display: flex;

  margin-top: 3rem;
`;
