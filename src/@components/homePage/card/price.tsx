import styled from "styled-components";

interface PriceProps {
  sale: number;
  price: number;
}

export default function Price(props: PriceProps) {
  const { sale, price } = props;
  function checkSalePrice(price: number, sale: number) {
    return price - (price * sale) / 100;
  }
  return (
    <PriceWrapper>
      <Discount>{sale}%</Discount>
      <SalePrice>{checkSalePrice(price, sale)}원</SalePrice>
      <OriginPrice>{price}원</OriginPrice>
    </PriceWrapper>
  );
}

const PriceWrapper = styled.div`
  margin-top: 1.6rem;
  span {
    margin-right: 0.3rem;
  }
`;
const Discount = styled.span`
  width: 23px;
  height: 17px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.SYMANTIC};
`;
const SalePrice = styled.span`
  width: 41px;
  height: 17px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 140%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
`;
const OriginPrice = styled.span`
  width: 32px;
  height: 13px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
`;
