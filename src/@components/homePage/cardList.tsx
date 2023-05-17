import Card from "./card";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// interface CardlistProps {
//   images: string[]; // 카드 슬라이드에 사용될 이미지 URL 배열
//   cards: CardProps[]; // 카드 정보 배열
// }
export default function CardList() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* {cards.map((card, index) => (
        <Card key={index} {...card} image={images[index % images.length]} />
      ))} */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Slider>
  );
}
