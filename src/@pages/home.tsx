import CommonFooter from "../@components/common/commonFooter";
import Header from "../@components/common/header";
import PageFooter from "../@components/common/pageFooter";
import Banner from "../@components/homePage/banner";
import BrandNew from "../@components/homePage/brandNew";
import Review from "../@components/homePage/review";
import Subscribe from "../@components/homePage/subscribe";
import ThisMonth from "../@components/homePage/thisMonth";
import TopButton from "../@components/homePage/topButton";
import Twinkle from "../@components/homePage/Twinkle";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TopButton />
      <ThisMonth />
      <Twinkle />
      <Subscribe />
      <BrandNew />
      <Review />
      <PageFooter />
      <CommonFooter />
    </>
  );
}
