import { PRODUCT_DATA } from "../../../core/productData";
import { styled } from "styled-components";
import GrayGap from "../../common/GrayGap";

export default function OrderProductInfo() {
  return (
    <>
      <OrderProductInfoWrapper>
        <HeaderTitle>주문 상품</HeaderTitle>
        <ProductInfoContainer>
          <ProductImage />
          <InfoContainer>
            <ProductName>{PRODUCT_DATA.name}</ProductName>
            <ProductPriceContainer>
              <PriceText>{PRODUCT_DATA.price}원</PriceText>
              {/* 할인된 가격 계산한 데이터 있음 */}
              <CountText>1개</CountText>
            </ProductPriceContainer>
          </InfoContainer>
        </ProductInfoContainer>
      </OrderProductInfoWrapper>
      <GrayGap />
    </>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountText = styled.p`
  ${({ theme }) => theme.fonts.body04};
  padding-left: 0.4rem;
`;

const PriceText = styled.p`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  padding-right: 0.4rem;
  ${({ theme }) => theme.fonts.body04};
`;

const ProductPriceContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductName = styled.header`
  ${({ theme }) => theme.fonts.body04};
`;

const ProductImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE000};
  border-radius: 0.9rem;
`;

const HeaderTitle = styled.header`
  margin: 2.8rem 1.6rem 3.2rem 0;
  ${({ theme }) => theme.fonts.head02};
`;

const OrderProductInfoWrapper = styled.div`
  margin-bottom: 3.6rem;
`;
