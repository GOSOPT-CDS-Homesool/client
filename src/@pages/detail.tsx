import { useParams } from "react-router-dom";
import ArrowFooter from "../@components/common/arrowFooter";
import Header from "../@components/common/header";
import PageFooter from "../@components/common/pageFooter";
import ProductBasicInfo from "../@components/detailPage/basicInfo/productBasicInfo";
import DetailAsk from "../@components/detailPage/detailAsk";
import DetailOrderInfo from "../@components/detailPage/detailProduct/detailOrderInfo";
import ProductInfo from "../@components/detailPage/productDetailInfo/productInfo";
import ProductReiviewList from "../@components/detailPage/productReview/productReiviewList";
import TopButton from "../@components/homePage/topButton";

export default function Detail() {
  const { id } = useParams();

  return (
    <>
      {id && (
        <>
          <ArrowFooter />
          <Header />
          <DetailOrderInfo id={id} />
          <ProductInfo id={id} />
          <ProductBasicInfo id={id} />
          <ProductReiviewList id={id} />
          <DetailAsk id={id} />
          <PageFooter />
          <TopButton />
        </>
      )}
    </>
  );
}
