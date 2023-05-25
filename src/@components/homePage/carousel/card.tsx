import styled from "styled-components";
import { ProductDataType } from "../../../type/productDataTypeDH";
import Like from "../card/like";
import Price from "../card/price";
import SoldOut from "../card/soldOut";
import Stock from "../card/stock";
import Tags from "../card/tags";

interface CardProps {
  key?: number;
  value: string;
  data: ProductDataType;
  onClick: () => void;
}

export default function Card(props: CardProps) {
  const { value, data, onClick } = props;
  return (
    <CardWrapper onClick={onClick}>
      <ImgWrapper>
        <CardImg src={data.image} alt="이미지1" />
        <SoldOut value={data.soldOut} />
        <Like value={false} />
      </ImgWrapper>
      <Tags tags={data.tags} soldOut={data.soldOut} />
      {value == "twinkle" && <Stock value={data.stock} />}
      <NameWrapper>{data.name}</NameWrapper>
      <Price sale={data.sale} price={data.price} salePrice={data.salePrice} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  margin-right: 1rem;
`;
const NameWrapper = styled.p`
  width: 14.3rem;
  ${({ theme }) => theme.fonts.body01}
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
`;
const ImgWrapper = styled.div`
  width: 14.2rem;
  height: 21.4rem;
  position: relative;
`;
const CardImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
`;
