import React from "react";
import styled from "styled-components";
import { REVIEW_DATA } from "../../../core/reviewData";
import Stars from "../card/stars";

export default function ReviewCard() {
  return (
    <ReviewCardWrapper>
      <ImageWrapper>
        <ReviewImg src={REVIEW_DATA.image} alt="리뷰이미지" />
      </ImageWrapper>
      <Title>{REVIEW_DATA.title}</Title>
      <Content>{REVIEW_DATA.contents}</Content>
      <Stars value={REVIEW_DATA.star} />
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
