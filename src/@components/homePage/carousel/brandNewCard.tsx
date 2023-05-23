import React from "react";
import Like from "../card/like";
import Price from "../card/price";
import SoldOut from "../card/soldOut";
import Tags from "../card/tags";
import Stock from "../card/stock";
import { PRODUCT_DATA1 } from "../../../core/productDataDH";
import styled from "styled-components";

export default function BrandNewCard() {
  return (
    <CardWrapper>
      <ImgWrapper>
        <CardImg src={PRODUCT_DATA1.image} alt="이미지1" />
      </ImgWrapper>
      <Tags value={PRODUCT_DATA1.tags} />
      <NameWrapper>{PRODUCT_DATA1.name}</NameWrapper>
      <Price sale={PRODUCT_DATA1.sale} price={PRODUCT_DATA1.price} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
`;
const NameWrapper = styled.p`
  width: 18.4rem;
  ${({ theme }) => theme.fonts.body01}
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
`;
const ImgWrapper = styled.div`
  width: 18.4rem;
  height: 28rem;
  position: relative;
`;
const CardImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
