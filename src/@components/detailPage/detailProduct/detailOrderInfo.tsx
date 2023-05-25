import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getAlcoholData } from "../../../api/alcoholData";
import { BackButtonIc, OriginalHomeSoolIc, ShareIc } from "../../../assets";
import { DetailIdProps } from "../../../type/detailIdProps";
import { ProductDataType } from "../../../type/productDataType";
import ChoiceDelivery from "./choiceDelivery";
import LikeButton from "./likeButton";
import OrderChoice from "./orderChoice";

export default function DetailOrderInfo(props: DetailIdProps) {
  const [productData, setProductData] = useState<ProductDataType>();
  const { id } = props;
  const navigate = useNavigate();
  const { state } = useLocation();

  function backToHome() {
    navigate(-1);
  }

  async function fetchAlcoholData() {
    try {
      const response = await getAlcoholData(id);
      // console.log(response.soldOut);
      setProductData(response);
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
            <BackButtonIc onClick={backToHome} />
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
              <LikeButtonIcon postId={`${id}`} />
            </AddFuntionContainer>
          </DetailContentsWrapper>
          <OrderChoice name={productData.name} salePrice={productData.salePrice} soldOut={state} id={id} />
          <ChoiceDelivery />
        </>
      )}
    </>
  );
}

const LikeButtonIcon = styled(LikeButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddFuntionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0 14rem;
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
