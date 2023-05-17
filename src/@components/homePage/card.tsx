import React from "react";
import Like from "./card/like";
import Price from "./card/price";
import SoldOut from "./card/soldOut";
import Tags from "./card/tags";
import { PRODUCT_DATA1 } from "../../core/productDataDH";
import styled from "styled-components";

export default function Card() {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={PRODUCT_DATA1.image} alt="" />
        <StSoldOut value={PRODUCT_DATA1.soldOut} />
      </ImgWrapper>

      <Like value={PRODUCT_DATA1.like} />
      <Tags value={PRODUCT_DATA1.tags} />
      <p>{PRODUCT_DATA1.name}</p>
      <Price sale={PRODUCT_DATA1.sale} price={PRODUCT_DATA1.price} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article``;
const ImgWrapper = styled.div`
  width: 142px;
  height: 214px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
`;
const StSoldOut = styled(SoldOut)`
  position: absolute;
  bottom: 0;
  left: 0;
`;
