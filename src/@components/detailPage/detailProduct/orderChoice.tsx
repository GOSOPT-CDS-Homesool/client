import { styled } from "styled-components";
import FailBuyButton from "./failBuyButton";
import SuccessBuyButton from "./successBuyButton";

interface ProductInfoProps {
  soldOut: boolean;
  salePrice: number;
  name?: string;
  id: string;
}
export default function OrderChoice(props: ProductInfoProps) {
  const { soldOut, salePrice, name, id } = props;

  return (
    <OrderChoiceWrapper>
      {soldOut ? <FailBuyButton /> : <SuccessBuyButton name={name} salePrice={salePrice} soldOut={soldOut} id={id} />}
    </OrderChoiceWrapper>
  );
}

const OrderChoiceWrapper = styled.section`
  position: fixed;
  bottom: 12rem;
`;
