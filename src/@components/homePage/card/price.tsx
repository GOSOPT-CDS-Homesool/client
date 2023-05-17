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
      <SalePrice>{price - (price * sale) / 100}</SalePrice>
      <OriginPrice>{price}원</OriginPrice>
    </PriceWrapper>
  );
}

const PriceWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Discount = styled.p`
  color: ${({ theme }) => theme.colors.SYMANTIC};
  font-weight: bold;
`;
const SalePrice = styled.p`
  font-weight: bold;
`;
const OriginPrice = styled.p`
  color: gray;
  text-decoration: line-through;
`;
