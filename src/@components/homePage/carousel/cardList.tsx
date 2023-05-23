import Card from "./card";
import React from "react";
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
      {/* {cards.map((card, index) => (
        <Card key={index} {...card} image={images[index % images.length]} />
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
