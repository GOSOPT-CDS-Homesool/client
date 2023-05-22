import React from "react";
import Like from "./card/like";
import Price from "./card/price";
import SoldOut from "./card/soldOut";
import Tags from "./card/tags";
import Stock from "./card/stock";
import { PRODUCT_DATA1 } from "../../core/productDataDH";
import styled from "styled-components";

export default function Card() {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={PRODUCT_DATA1.image} alt="이미지1" />
        <SoldOut value={PRODUCT_DATA1.soldOut} />
        <Like value={PRODUCT_DATA1.like} />
      </ImgWrapper>
      <Tags value={PRODUCT_DATA1.tags} />
      <Stock value={PRODUCT_DATA1.stock} />
      <NameWrapper>{PRODUCT_DATA1.name}</NameWrapper>
      <Price sale={PRODUCT_DATA1.sale} price={PRODUCT_DATA1.price} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  margin-right: 1rem;
`;
const NameWrapper = styled.p`
  width: 14.3rem;
  ${({ theme }) => theme.fonts.body01}
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
`;
const ImgWrapper = styled.div`
  width: 14.2rem;
  height: 21.4rem;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;
  }
`;
