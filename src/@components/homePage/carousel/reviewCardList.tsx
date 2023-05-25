import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ReviewCard from "./reviewCard";
import { useState, useEffect } from "react";
import { AllReviewDataType } from "../../../type/allReviewDataType";
import { getAllReview } from "../../../api/allReview";

export default function ReviewCardList() {
  const [allReveiw, setAllReview] = useState<Array<AllReviewDataType>>();

  async function fetchAllAlcohol() {
    const response = await getAllReview();
    setAllReview(response);
  }

  useEffect(() => {
    fetchAllAlcohol();
  }, []);

  console.log(allReveiw);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 400,
    slidesToShow: 1.6,
    slidesToScroll: 1.6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1.6,
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
      {allReveiw?.map((item, index) => (
        <ReviewCard key={index} data={item} />
      ))}
    </Slider>
  );
}
