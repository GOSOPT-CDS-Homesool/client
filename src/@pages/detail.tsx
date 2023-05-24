import ArrowFooter from "../@components/common/arrowFooter";
import Header from "../@components/common/header";
import PageFooter from "../@components/common/pageFooter";
import ProductBasicInfo from "../@components/detailPage/basicInfo/productBasicInfo";
import DetailAsk from "../@components/detailPage/detailAsk";
import DetailOrderInfo from "../@components/detailPage/detailProduct/detailOrderInfo";
import ProductInfo from "../@components/detailPage/productDetailInfo/productInfo";
import ProductReiviewList from "../@components/detailPage/productReview/productReiviewList";

export default function Detail() {
  return (
    <>
      <ArrowFooter />
      <Header />
      <DetailOrderInfo />
      <ProductInfo />
      <ProductBasicInfo />
      <ProductReiviewList />
      <DetailAsk />
      <PageFooter />
    </>
  );
}
