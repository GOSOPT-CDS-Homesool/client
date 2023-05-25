import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BackButtonIc, DetailProductIc, GrayLikeIc, OrangeLikeIc, OriginalHomeSoolIc, ShareIc } from "../../../assets";
import { PRODUCT_DATA } from "../../../core/productData";
import { DetailIdProps } from "../../../type/detailIdProps";
import CalculateDiscount from "../../../utils/calculateDiscount";
import ChoiceDelivery from "./choiceDelivery";
import OrderChoice from "./orderChoice";

export default function DetailOrderInfo(props: DetailIdProps) {
  const { id } = props;
  const [discountedPrice] = useState(CalculateDiscount(PRODUCT_DATA.price, PRODUCT_DATA.sale));
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  return (
    <>
      <DetailHeader>
        <BackButtonIc onClick={backToHome} />
        <DetailTitle>상품상세</DetailTitle>
      </DetailHeader>

      <DetailImage />

      <DetailProductContainer>
        <OriginalHomeSoolIc />
        <ProductName>{PRODUCT_DATA.name}</ProductName>
      </DetailProductContainer>

      <DetailContentsWrapper>
        <DetailPriceContainer>
          <ProductPrice>{PRODUCT_DATA.price}원</ProductPrice>
          <ProductSale>{PRODUCT_DATA.sale}%</ProductSale>
          <DiscountedPrice>{discountedPrice}원</DiscountedPrice>
        </DetailPriceContainer>
        <AddFuntionContainer>
          <ShareIc />
          <LikeButton>{PRODUCT_DATA.like ? <OrangeLikeIc /> : <GrayLikeIc />}</LikeButton>
        </AddFuntionContainer>
      </DetailContentsWrapper>
      <OrderChoice soldOut={false} discountedPrice={discountedPrice} />
      <ChoiceDelivery />
    </>
  );
}

const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddFuntionContainer = styled.div`
  margin: 2rem 0 0 14rem;
  display: flex;
  align-items: center;
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

const DetailImage = styled(DetailProductIc)`
  margin: 1.3rem 0 0 -1.6rem;
`;
