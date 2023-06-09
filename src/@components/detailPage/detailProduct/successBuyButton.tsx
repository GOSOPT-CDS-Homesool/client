import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import OrderChoice from "./orderChoice";
import OrderContents from "./orderContents";

interface ProductInfoProps {
  soldOut: boolean;
  salePrice: number;
  name?: string;
  id: string;
}

export default function SuccessBuyButton(props: ProductInfoProps) {
  const { soldOut, salePrice, name, id } = props;
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  function toggleUp() {
    console.log("toggle");
    setVisible(true);
  }

  function goToBuy() {
    console.log("buy");
    navigate("/order-payment", { state: id });
  }

  return (
    <ChoiceOrderButtonWrapper>
      {visible && (
        <ToggleWrapper onClick={goToBuy}>
          <OrderContents name={name} soldOut={soldOut} salePrice={salePrice} />
          <OrderChoice soldOut={soldOut} salePrice={salePrice} id={id} />
          <AddToCartButton>장바구니 담기</AddToCartButton>
          <BuyButton>바로구매</BuyButton>
        </ToggleWrapper>
      )}
      <AddToCartButton>장바구니 담기</AddToCartButton>
      <BuyButton onClick={toggleUp}>바로구매</BuyButton>
    </ChoiceOrderButtonWrapper>
  );
}

const ChoiceOrderButtonWrapper = styled.div`
  display: flex;
  position: fixed;
  /* bottom: -1rem; */
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

const ToggleWrapper = styled.section`
  position: absolute;
  z-index: 2;
`;
