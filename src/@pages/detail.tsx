import ProductBasicInfo from "../@components/detailPage/basicInfo/productBasicInfo";
import DetailOrderInfo from "../@components/detailPage/detailProduct/detailOrderInfo";
import ProductInfo from "../@components/detailPage/productDetailInfo/productInfo";

export default function Detail() {
  return (
    <>
      <DetailOrderInfo />
      <ProductInfo />
      <ProductBasicInfo />
    </>
  );
}
