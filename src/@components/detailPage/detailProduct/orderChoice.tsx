import FailBuyButton from "./failBuyButton";
import SuccessBuyButton from "./successBuyButton";

interface ProductInfoProps {
  soldOut: boolean;
  salePrice: number;
  name?: string;
}
export default function OrderChoice(props: ProductInfoProps) {
  const { soldOut, salePrice, name } = props;
  console.log(soldOut);

  return <>{soldOut ? <FailBuyButton /> : <SuccessBuyButton name={name} salePrice={salePrice} soldOut={soldOut} />}</>;
}
