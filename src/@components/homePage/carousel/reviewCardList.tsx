import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./reviewCard";
import { AllReviewData } from "../../../core/allReviewData";

export default function ReviewCardList() {
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
      {AllReviewData.map((item, index) => (
        <ReviewCard key={index} data={item} />
      ))}
    </Slider>
  );
}
