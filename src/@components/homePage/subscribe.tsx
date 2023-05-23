import CardListHeader from "./carousel/cardListHeader";
import CardList from "./carousel/cardList";
import styled from "styled-components";

import React from "react";
import { SubscribeImg } from "../../assets";

export default function Subscribe() {
  return (
    <ThisMonthWrapper>
      <CardListHeader title="구독홈술" discription="간편한 정기구독으로 즐기는 진짜 홈술라이프" />
      {/* <img src="../../assets/image/subscribe_banner.svg" alt="구독홈술 안내배너" /> */}
      {/* 왜 이건 안되지...? */}
      <SubscribeImg />
      <CardList />
    </ThisMonthWrapper>
  );
}
const ThisMonthWrapper = styled.section`
  margin-bottom: 6rem;
  padding-left: 1.6rem;
`;
// const SubscribeImg = styled(SubscribeImgIc)``;
