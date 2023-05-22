import CardListHeader from "./cardListHeader";
import CardList from "./cardList";
import styled from "styled-components";

import React from "react";

export default function ThisMonth() {
  return (
    <ThisMonthWrapper>
      <CardListHeader title="이달의 홈술" discription="홈닷 큐레이터가 엄선한 이달의 콜렉션" />
      <CardList />
    </ThisMonthWrapper>
  );
}

const ThisMonthWrapper = styled.section``;
