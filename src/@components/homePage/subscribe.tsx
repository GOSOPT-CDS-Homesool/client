import styled from "styled-components";
import CardList from "./carousel/cardList";
import CardListHeader from "./carousel/cardListHeader";

import { SubscribeImg } from "../../assets";

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <CardListHeader title="구독홈술" discription="간편한 정기구독으로 즐기는 진짜 홈술라이프" />
      {/* <img src="../../assets/image/subscribe_banner.svg" alt="구독홈술 안내배너" /> */}
      {/* 왜 이건 안되지...? */}
      <SubscribeImgBanner />
      <CardList value="subscribe" />
    </SubscribeWrapper>
  );
}
const SubscribeWrapper = styled.section`
  margin-bottom: 6rem;
  margin-right: -1.6rem;
`;

const SubscribeImgBanner = styled(SubscribeImg)`
  margin-bottom: 1.2rem;
`;
