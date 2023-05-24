import styled from "styled-components";
import BrandNewCard from "./carousel/brandNewCard";
import CardListHeader from "./carousel/cardListHeader";
import { PRODUCT_DATA2 } from "../../core/productDataDH";
import { ProductDataType } from "../../type/productDataTypeDH";

export default function BrandNew() {
  const filteredData: ProductDataType[] = [];
  PRODUCT_DATA2.forEach((item) => {
    if (item.tags.newProduct) {
      filteredData.push(item);
    }
  });

  return (
    <BrandNewWrapper>
      <HeaderWrapper>
        <CardListHeader title="신상품관" discription="새로나온 홈술을 한눈에 만나보세요!" />
      </HeaderWrapper>
      <CardsWrapper>
        {filteredData.map((item) => (
          <BrandNewCard key={item.id} data={item} />
        ))}
      </CardsWrapper>
      <ButtonWrapper>
        <ButtonIc>VIEW MORE</ButtonIc>
      </ButtonWrapper>
    </BrandNewWrapper>
  );
}

const BrandNewWrapper = styled.section`
  margin-bottom: 6rem;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
`;
const HeaderWrapper = styled.div`
  padding-left: 1.6rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 37.3rem;
  height: 76.1rem;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonIc = styled.button`
  width: 34.3rem;
  height: 4rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.GRAYSCALE400};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.GRAYSCALE700};
`;
