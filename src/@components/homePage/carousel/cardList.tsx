import Card from "./card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PRODUCT_DATA2 } from "../../../core/productDataDH";
import { ProductDataType } from "../../../type/productDataTypeDH";

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
  const filteredData: ProductDataType[] = [];

  switch (value) {
    case "twinkle":
      PRODUCT_DATA2.forEach((item) => {
        if (item.twinkle === true) {
          filteredData.push(item);
        }
      });
      return (
        <Slider {...settings}>
          {filteredData.map((item) => (
            <Card key={item.id} value={value} data={item} />
          ))}
        </Slider>
      );
      break;
    case "subscribe":
      PRODUCT_DATA2.forEach((item) => {
        if (item.twinkle === true) {
          filteredData.push(item);
        }
      });
      return (
        <Slider {...settings}>
          {filteredData.map((item) => (
            <Card key={item.id} value={value} data={item} />
          ))}
        </Slider>
      );
      break;
    case "thismonth":
      PRODUCT_DATA2.forEach((item) => {
        if (item.twinkle !== true && item.subscribe !== true) {
          filteredData.push(item);
        }
      });
      return (
        <Slider {...settings}>
          {filteredData.map((item) => (
            <Card key={item.id} value={value} data={item} />
          ))}
        </Slider>
      );
      break;
    default:
      return <></>;
      break;
  }
}
