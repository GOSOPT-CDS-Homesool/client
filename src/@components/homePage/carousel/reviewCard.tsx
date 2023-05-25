import styled from "styled-components";
import Stars from "../card/stars";
import { AllReviewDataType } from "../../../type/allReviewDataType";

interface ReviewProps {
  key?: number;
  data: AllReviewDataType;
}

export default function ReviewCard(props: ReviewProps) {
  const { data } = props;
  return (
    <ReviewCardWrapper>
      <ImageWrapper>
        <ReviewImg src={data.image} alt="리뷰이미지" />
      </ImageWrapper>
      <Title>{data.title}</Title>
      <Content>{data.contents}</Content>
      <Stars value={data.star} />
    </ReviewCardWrapper>
  );
}

const ReviewCardWrapper = styled.div`
  margin-right: 1rem;
`;
const Title = styled.h1`
  margin-bottom: 0.4rem;
  ${({ theme }) => theme.fonts.body02}
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
`;
const Content = styled.p`
  width: 20.8rem;
  margin-bottom: 1.2rem;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
`;
const ImageWrapper = styled.div`
  width: 20.8rem;
  height: 20.8rem;
  margin-bottom: 1.2rem;
`;
const ReviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.8rem;
`;
