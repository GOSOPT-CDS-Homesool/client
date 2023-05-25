import { LikeIc, ShareIc, BackButtonIc, OriginalHomeSoolIc } from "../../../assets";

import { getAlcoholData } from "../../../api/alcoholApi";
import { ProductDataType } from "../../../type/productDataType";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import OrderChoice from "./orderChoice";
import ChoiceDelivery from "./choiceDelivery";

export default function DetailOrderInfo() {
  const [productData, setProductData] = useState<ProductDataType>();

  async function fetchAlcoholData() {
    const id = 3;
    try {
      const response = await getAlcoholData(id);
      setProductData(response);
      console.log(response);
    } catch (error) {
      console.error("데이터 패치 중 오류 발생:", error);
    }
  }

  useEffect(() => {
    fetchAlcoholData();
  }, []);

  return (
    <>
      {productData && (
        <>
          <DetailHeader>
            <BackButtonIc />
            <DetailTitle>상품상세</DetailTitle>
          </DetailHeader>
          <DetailImage src={productData.detailImage} alt="제품상세이미지"></DetailImage>
          <DetailProductContainer>
            <OriginalHomeSoolIc />
            <ProductName>{productData.name}</ProductName>
          </DetailProductContainer>
          <DetailContentsWrapper>
            <DetailPriceContainer>
              <ProductPrice>{productData.price}원</ProductPrice>
              <ProductSale>{productData.sale}%</ProductSale>
              <DiscountedPrice>{productData.salePrice}원</DiscountedPrice>
            </DetailPriceContainer>
            <AddFuntionContainer>
              <ShareIc />
              <LikeIc />
            </AddFuntionContainer>
          </DetailContentsWrapper>
          <OrderChoice salePrice={productData.salePrice} soldOut={false} />
          <ChoiceDelivery />
        </>
      )}
    </>
  );
}

const AddFuntionContainer = styled.div`
  display: flex;
  margin: 2rem 0 0 13rem;
`;

const DiscountedPrice = styled.p`
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.roboto01};
`;

const ProductSale = styled.p`
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.SYMANTICRED};
  ${({ theme }) => theme.fonts.roboto02};
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
  ${({ theme }) => theme.fonts.roboto04};
  text-decoration: line-through;
`;

const DetailPriceContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.2rem;
`;

const DetailContentsWrapper = styled.div`
  display: flex;
`;

const DetailProductContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ProductName = styled.h1`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.head02}
`;

const DetailTitle = styled.h1`
  margin: 0.5rem 0 0 12.9rem;
  ${({ theme }) => theme.fonts.body03}
`;

const DetailHeader = styled.header`
  display: flex;
  margin-top: 0.8rem;
`;

const DetailImage = styled.img`
  width: 37.5rem;
  height: 56rem;
  margin: 1.3rem 0 0 -1.6rem;
`;
