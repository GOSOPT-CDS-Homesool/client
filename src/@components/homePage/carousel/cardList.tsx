import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { getAllAlcohol } from "../../../api/allAlcohol";
import { ProductDataType } from "../../../type/productDataTypeDH";

import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Card from "./card";
interface CardProps {
  value: string;
}

export default function CardList(props: CardProps) {
  const { value } = props;
  const [allAlcohol, setAllAlcohol] = useState<Array<ProductDataType>>();
  const navigate = useNavigate();

  async function fetchAllAlcohol() {
    const response = await getAllAlcohol();
    setAllAlcohol(response);
  }

  useEffect(() => {
    fetchAllAlcohol();
  }, []);

  function moveToDetail(id: number, soldOut: boolean) {
    navigate(`/detail/${id}`, { state: soldOut });
  }

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
      allAlcohol?.forEach((item) => {
        if (item.twinkle === true) {
          filteredData.push(item);
        }
      });
      return (
        <Slider {...settings}>
          {filteredData.map((item) => (
            <Card key={item.id} value={value} data={item} onClick={() => moveToDetail(item.id, item.soldOut)} />
          ))}
        </Slider>
      );
      break;
    case "subscribe":
      allAlcohol?.forEach((item) => {
        if (item.twinkle === true) {
          filteredData.push(item);
        }
      });
      return (
        <Slider {...settings}>
          {filteredData.map((item) => (
            <Card key={item.id} value={value} data={item} onClick={() => moveToDetail(item.id, item.soldOut)} />
          ))}
        </Slider>
      );
      break;
    case "thismonth":
      allAlcohol?.forEach((item) => {
        if (item.twinkle !== true && item.subscribe !== true) {
          filteredData.push(item);
        }
      });
      return (
        <Slider {...settings}>
          {filteredData.map((item) => (
            <Card key={item.id} value={value} data={item} onClick={() => moveToDetail(item.id, item.soldOut)} />
          ))}
        </Slider>
      );
      break;
    default:
      return <></>;
      break;
  }
}
