import styled from "styled-components";
import { ProductDataType } from "../../../type/productDataTypeDH";
import Price from "../card/price";
import Tags from "../card/tags";

interface CardProps {
  key: number;
  data: ProductDataType;
}

export default function BrandNewCard(props: CardProps) {
  const { data } = props;
  return (
    <CardWrapper>
      <ImgWrapper>
        <CardImg src={data.image} alt="이미지1" />
      </ImgWrapper>
      <Tags tags={data.tags} soldOut={data.soldOut} />
      <NameWrapper>{data.name}</NameWrapper>
      <Price sale={data.sale} price={data.price} salePrice={data.salePrice} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
`;
const NameWrapper = styled.p`
  width: 18.4rem;
  ${({ theme }) => theme.fonts.body01}
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  text-align: center;
`;
const ImgWrapper = styled.div`
  width: 18.4rem;
  height: 28rem;
  position: relative;
`;
const CardImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
