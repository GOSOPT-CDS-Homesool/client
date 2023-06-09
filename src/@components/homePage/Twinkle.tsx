import styled from "styled-components";
import CardList from "./carousel/cardList";
import CardListHeader from "./carousel/cardListHeader";

export default function Twinkle() {
  return (
    <ThisMonthWrapper>
      <CardListHeader title="반짝홈술" discription="지금 아니면 없어요! 반짝 수량한정 특가" />
      <CardList value="twinkle" />
    </ThisMonthWrapper>
  );
}

const ThisMonthWrapper = styled.section`
  margin-bottom: 6rem;
  margin-right: -1.6rem;
`;
