import { DetailProductIc, LikeIc, ShareIc, BackButtonIc, OriginalHomeSoolIc } from "../../assets";
import { PRODUCT_DATA } from "../../core/productData";
import CalculateDiscount from "../../utils/calculateDiscount";
import { useState } from "react";
import { styled } from "styled-components";
import OrderContents from "./orderContents";
import FailBuyButton from "./failBuyButton";

export default function DetailOrderInfo() {
  const [discountedPrice] = useState(CalculateDiscount(PRODUCT_DATA.price, PRODUCT_DATA.sale));
  return (
    <div>
      <DetailHeader>
        <BackButtonIc />
        <DetailTitle>상품상세</DetailTitle>
      </DetailHeader>

      <DetailImage>
        <DetailProductIc />
      </DetailImage>

      <DetailProductName>
        <OriginalHomeSoolIc />
        <ProductName>{PRODUCT_DATA.name}</ProductName>
      </DetailProductName>

      <DetailContentsWrapper>
        <DetailPriceContainer>
          <ProductPrice>{PRODUCT_DATA.price}원</ProductPrice>
          <ProductSale>{PRODUCT_DATA.sale}%</ProductSale>
          <DiscountedPrice>{discountedPrice}원</DiscountedPrice>
        </DetailPriceContainer>
        <AddFuntionContainer>
          <ShareIc />
          <LikeIc />
        </AddFuntionContainer>
      </DetailContentsWrapper>
      <OrderContents discountedPrice={discountedPrice} />
      <FailBuyButton />
    </div>
  );
}

const AddFuntionContainer = styled.div`
  margin: 2rem 0 0 14rem;
`;

const DiscountedPrice = styled.p`
  margin-left: 0.4rem;
  ${({ theme }) => theme.fonts.roboto01};
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
`;

const ProductSale = styled.p`
  margin-left: 0.4rem;
  ${({ theme }) => theme.fonts.roboto02};
  color: ${({ theme }) => theme.colors.SYMANTICRED};
`;

const ProductPrice = styled.p`
  ${({ theme }) => theme.fonts.roboto04};
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
  text-decoration: line-through;
`;

const DetailPriceContainer = styled.div`
  display: flex;
  margin-top: 2.2rem;
`;

const DetailContentsWrapper = styled.div`
  display: flex;
`;

const DetailProductName = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ProductName = styled.h1`
  ${({ theme }) => theme.fonts.head02}
  margin-left: 0.8rem;
`;

const DetailTitle = styled.h1`
  margin: 0.5rem 0 0 12.9rem;
  ${({ theme }) => theme.fonts.body03}
`;

const DetailHeader = styled.div`
  display: flex;
  margin-top: 0.8rem;
`;

const DetailImage = styled.div`
  margin: 1.3rem 0 0 -1.6rem;
`;
