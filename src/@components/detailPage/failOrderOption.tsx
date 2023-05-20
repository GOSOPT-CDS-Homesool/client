import { PRODUCT_DATA } from "../../core/productData";
import { OrderOptionProps } from "../../type/successOrderType";
import { MinusIc } from "../../assets";
import { PlusIc } from "../../assets";
import { styled } from "styled-components";

export default function FailOrderOption({ discountedPrice }: OrderOptionProps) {
  return (
    <SuccessOptionWrapper>
      <ProductName>{PRODUCT_DATA.name}</ProductName>
      <QuantityContainer>
        <ExtendedAmountText>수량</ExtendedAmountText>
        <CountContainer>
          <MinusIcon />
          <CountingText>1</CountingText>
          <PlusIc />
        </CountContainer>
      </QuantityContainer>
      <ExtendedPrice>
        <ExtendedPriceText>총 합계금액</ExtendedPriceText>
        <ExtendedPriceCount>{discountedPrice}원</ExtendedPriceCount>
      </ExtendedPrice>
      <ChoiceOrderButtonWrapper>
        <AddToCartButton>미리 장바구니 담기</AddToCartButton>
        <BuyButton>품절이에요</BuyButton>
      </ChoiceOrderButtonWrapper>
    </SuccessOptionWrapper>
  );
}

const ChoiceOrderButtonWrapper = styled.div`
  display: flex;
`;

const AddToCartButton = styled.button`
  width: 18.7rem;
  height: 4rem;
  margin-left: -1.6rem;
  background-color: ${({ theme }) => theme.colors.GRAYSCALE800};
  color: ${({ theme }) => theme.colors.GRAYSCALE000};
  ${({ theme }) => theme.fonts.body02}
`;

const BuyButton = styled.button`
  width: 18.8rem;
  height: 4rem;
  margin-right: -1.6rem;
  background-color: ${({ theme }) => theme.colors.GRAYSCALE600};
  color: ${({ theme }) => theme.colors.GRAYSCALE000};
  ${({ theme }) => theme.fonts.body02}
`;

const ExtendedPriceCount = styled.p`
  margin-top: 1.6rem;
  ${({ theme }) => theme.fonts.roboto02s};
`;

const ExtendedPriceText = styled.p`
  margin: 1.7rem 5.6rem 0 18.8rem;
  ${({ theme }) => theme.fonts.body03};
`;

const ExtendedAmountText = styled.p`
  margin: 4.1rem 4rem 0rem 1.6rem;
  ${({ theme }) => theme.fonts.body03};
`;

const MinusIcon = styled(MinusIc)`
  margin-right: 1.6rem;
`;

const CountingText = styled.p`
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
  ${({ theme }) => theme.fonts.roboto02s}
  margin-right: 1.8rem;
`;

const ProductName = styled.h1`
  width: 28rem;
  padding-top: 1.6rem;
  ${({ theme }) => theme.fonts.head02_1}
`;

const QuantityContainer = styled.div`
  display: flex;
  width: 37.5rem;
  margin: 0 0 2rem -1.6rem;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.6rem;
  height: 3rem;
  margin-top: 3.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
`;

const ExtendedPrice = styled.div`
  display: flex;
  width: 37.5rem;
  height: 5.4rem;
  margin-left: -1.6rem;
  background-color: ${({ theme }) => theme.colors.GRAYSCALE100};
`;

const SuccessOptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.GRAYSCALE000};
`;
