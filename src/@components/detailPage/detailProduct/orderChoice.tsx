import FailBuyButton from "./failBuyButton";
import SuccessBuyButton from "./successBuyButton";

interface SoldOutProps {
  soldOut: boolean;
  discountedPrice: number;
}
export default function OrderChoice({ soldOut, discountedPrice }: SoldOutProps) {
  return <div>{soldOut ? <FailBuyButton /> : <SuccessBuyButton discountedPrice={discountedPrice} />}</div>;
}
