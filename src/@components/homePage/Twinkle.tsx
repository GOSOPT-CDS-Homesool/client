import CardListHeader from "./carousel/cardListHeader";
import CardList from "./carousel/cardList";
import styled from "styled-components";

import React from "react";

export default function Twinkle() {
  return (
    <ThisMonthWrapper>
      <CardListHeader title="반짝홈술" discription="지금 아니면 없어요! 반짝 수량한정 특가" />
      <CardList />
    </ThisMonthWrapper>
  );
}

const ThisMonthWrapper = styled.section`
  margin-bottom: 6rem;
  padding-left: 1.6rem;
`;
