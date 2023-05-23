import React from "react";
import BrandNew from "../@components/homePage/brandNew";
import Review from "../@components/homePage/review";
import Subscribe from "../@components/homePage/subscribe";
import ThisMonth from "../@components/homePage/thisMonth";
import Twinkle from "../@components/homePage/twinkle";
import Header from "../@components/common/header";
import Banner from "../@components/homePage/banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ThisMonth />
      <Twinkle />
      <Subscribe />
      <BrandNew />
      <Review />
    </>
  );
}
