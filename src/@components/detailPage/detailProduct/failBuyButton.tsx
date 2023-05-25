import { styled } from "styled-components";

export default function FailBuyButton() {
  return (
    <SuccessOptionWrapper>
      <ChoiceOrderButtonWrapper>
        <AddToCartButton>미리 장바구니 담기</AddToCartButton>
        <BuyButton>품절이에요</BuyButton>
      </ChoiceOrderButtonWrapper>
    </SuccessOptionWrapper>
  );
}

const ChoiceOrderButtonWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 3;
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

const SuccessOptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.GRAYSCALE000};
`;
