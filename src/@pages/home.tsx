import BrandNew from "../@components/homePage/brandNew";
import Review from "../@components/homePage/review";
import Subscribe from "../@components/homePage/subscribe";
import ThisMonth from "../@components/homePage/thisMonth";
import Twinkle from "../@components/homePage/twinkle";

export default function Home() {
  return (
    <>
      <ThisMonth />
      <Twinkle />
      <Subscribe />
      <BrandNew />
      <Review />
    </>
  );
}
