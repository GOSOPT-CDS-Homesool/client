import React from "react";
import styled from "styled-components";

export default function Price() {
  return (
    <PriceWrapper>
      <Discount>10%</Discount>
      <SalePrice>9000</SalePrice>
      <OriginPrice>10000</OriginPrice>
    </PriceWrapper>
  );
}

const PriceWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Discount = styled.p`
  color: red;
  font-weight: bold;
`;
const SalePrice = styled.p`
  font-weight: bold;
`;
const OriginPrice = styled.p`
  color: gray;
  text-decoration: line-through;
`;
