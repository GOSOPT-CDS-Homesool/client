import styled from "styled-components";
import CardListHeader from "./carousel/cardListHeader";
import ReviewCardList from "./carousel/reviewCardList";

export default function Review() {
  return (
    <ReviewWrapper>
      <CardListHeader title="리뷰" discription="새로나온 홈술을 한눈에 만나보세요!" />
      <ReviewCardList />
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.section`
  margin-bottom: 3rem;
  margin-right: -1.6rem;
`;
