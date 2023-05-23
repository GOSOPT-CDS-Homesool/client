import CardListHeader from "./carousel/cardListHeader";
import CardList from "./carousel/cardList";
import styled from "styled-components";

import React from "react";

export default function ThisMonth() {
  return (
    <ThisMonthWrapper>
      <CardListHeader title="이달의 홈술" discription="홈닷 큐레이터가 엄선한 이달의 콜렉션" />
      <CardList value="thismonth" />
    </ThisMonthWrapper>
  );
}

const ThisMonthWrapper = styled.section`
  margin-right: -1.6rem;
  margin-bottom: 6rem;
`;
