import React from "react";
import Subscribe from "../@components/homePage/subscribe";
import ThisMonth from "../@components/homePage/thisMonth";
import Twinkle from "../@components/homePage/twinkle";

export default function Home() {
  return (
    <>
      <ThisMonth />
      <Twinkle />
      <Subscribe />
    </>
  );
}
