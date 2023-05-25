import { styled } from "styled-components";
import { useState } from "react";
import OrderChoice from "./orderChoice";
import OrderContents from "./orderContents";

interface ProductInfoProps {
  soldOut: boolean;
  salePrice: number;
  name?: string;
}

export default function SuccessBuyButton(props: ProductInfoProps) {
  const { soldOut, salePrice, name } = props;
  const [visible, setVisible] = useState(false);

  function goToBuy() {
    setVisible(true);
  }

  return (
    <ChoiceOrderButtonWrapper>
      {visible && <OrderContents name={name} soldOut={soldOut} salePrice={salePrice} />}
      {visible && <OrderChoice soldOut={soldOut} salePrice={salePrice} />}
      <AddToCartButton>장바구니 담기</AddToCartButton>
      <BuyButton onClick={goToBuy}>바로구매</BuyButton>
    </ChoiceOrderButtonWrapper>
  );
}

const ChoiceOrderButtonWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
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
  background-color: ${({ theme }) => theme.colors.HS_ORANGE500};
  color: ${({ theme }) => theme.colors.GRAYSCALE000};
  ${({ theme }) => theme.fonts.body02}
`;
