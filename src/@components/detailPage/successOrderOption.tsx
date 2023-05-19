import { PRODUCT_DATA } from "../../core/productData";
import { SuccessOrderOptionProps } from "../../type/successOrderType";

export default function SuccessOrderOption({ discountedPrice }: SuccessOrderOptionProps) {
  return (
    <div>
      <div>{PRODUCT_DATA.name}</div>
      <div>
        <p>수량</p>
        <div>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <div>
          <p>총 합계금액</p>
          <p>{discountedPrice}</p>
        </div>
      </div>
    </div>
  );
}
