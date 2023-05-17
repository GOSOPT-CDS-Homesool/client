import CardListHeader from "./cardListHeader";
import CardList from "./cardList";
import styled from "styled-components";

import React from "react";

export default function ThisMonth() {
  return (
    <ThisMonthWrapper>
      <CardListHeader></CardListHeader>
      <CardList></CardList>
    </ThisMonthWrapper>
  );
}

const ThisMonthWrapper = styled.section``;
