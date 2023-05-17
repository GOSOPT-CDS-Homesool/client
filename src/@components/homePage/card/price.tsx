import React from "react";
import styled from "styled-components";

interface PriceProps {
  sale: number;
  price: number;
}

export default function Price(props: PriceProps) {
  const { sale, price } = props;
  return (
    <PriceWrapper>
      <Discount>{sale}%</Discount>
      <SalePrice>{price - (price * sale) / 100}원</SalePrice>
      <OriginPrice>{price}원</OriginPrice>
    </PriceWrapper>
  );
}

const PriceWrapper = styled.div`
  margin-top: 5px;
  span {
    margin-right: 3px;
  }
`;
const Discount = styled.span`
  color: ${({ theme }) => theme.colors.SYMANTIC};
  font-weight: bold;
`;
const SalePrice = styled.span`
  font-weight: bold;
`;
const OriginPrice = styled.span`
  color: gray;
  text-decoration: line-through;
`;
