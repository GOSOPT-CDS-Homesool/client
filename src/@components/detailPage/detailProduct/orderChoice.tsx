import FailBuyButton from "./failBuyButton";
import SuccessBuyButton from "./successBuyButton";

interface SoldOutProps {
  soldOut: boolean;
  salePrice: number;
}
export default function OrderChoice({ soldOut, salePrice }: SoldOutProps) {
  return <div>{soldOut ? <FailBuyButton /> : <SuccessBuyButton salePrice={salePrice} />}</div>;
}
