import { ProductDataType } from "../type/productDataTypeDH";

export const PRODUCT_DATA1: ProductDataType = {
  id: 0,
  name: "[온라인 판매 1위 기념 특가] 느린마을막걸리 750 가을맛 5입",
  tags: ["best", "recommend", "soldout"],
  soldOut: true,
  like: true,
  sale: 10,
  price: 10000,
  image: "https://homesool.s3.ap-northeast-2.amazonaws.com/alcohol_1.jpg",
  detailImage: "https://homesool.s3.ap-northeast-2.amazonaws.com/alcohol_1.jpg",
  stock: 12,
  subscribe: true,
  twinkle: true,
};
export const PRODUCT_DATA2: ProductDataType = {
  id: 0,
  name: "[팝업한정] 느린마을 증류주 미니세트",
  tags: ["best", "recommend"],
  soldOut: false,
  like: false,
  sale: 0,
  price: 12900,
  image: "https://homesool.s3.ap-northeast-2.amazonaws.com/alcohol_2.png",
  detailImage: "https://homesool.s3.ap-northeast-2.amazonaws.com/alcohol_2.png",
  stock: 12,
  subscribe: true,
  twinkle: true,
};
