import Card from "./card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CardProps {
  value: string;
}

export default function CardList(props: CardProps) {
  const { value } = props;

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 400,
    slidesToShow: 2.3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* {data.map((item) => (
        <Card key={item.id} value={value} />
      ))} */}
      <Card value={value} />
      <Card value={value} />
      <Card value={value} />
      <Card value={value} />
      <Card value={value} />
      <Card value={value} />
    </Slider>
  );
}
