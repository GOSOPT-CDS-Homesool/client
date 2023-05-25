import styled from "styled-components";
import ads from "../../assets/image/homeAdsImage.png";
import CardList from "./carousel/cardList";
import CardListHeader from "./carousel/cardListHeader";

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <CardListHeader title="구독홈술" discription="간편한 정기구독으로 즐기는 진짜 홈술라이프" />
      <SubscribeImgBanner src={ads} alt="구독홈술 안내배너" />
      <CardList value="subscribe" />
    </SubscribeWrapper>
  );
}
const SubscribeWrapper = styled.section`
  margin-bottom: 6rem;
  margin-right: -1.6rem;
`;

const SubscribeImgBanner = styled.img`
  width: 34rem;
  margin-bottom: 1.2rem;
`;
