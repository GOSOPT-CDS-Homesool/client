import styled from "styled-components";
import { REVIEW_DATA } from "../../../core/reviewData";
import Stars from "../../homePage/card/stars";

export default function ProductReview() {
  return (
    <>
      <ReviewHeader>
        <Stars value={REVIEW_DATA.star} />
        <NameAndDate>nickname·{REVIEW_DATA.date}</NameAndDate>
      </ReviewHeader>
      <ReviewBody>
        <Image src={REVIEW_DATA.image} alt="후기 이미지" />
        <ContentWrapper>
          <Title>{REVIEW_DATA.title}</Title>
          <Content>{REVIEW_DATA.contents}</Content>
        </ContentWrapper>{" "}
      </ReviewBody>
    </>
  );
}
const ReviewHeader = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
`;

const NameAndDate = styled.span`
  margin-left: 0.8rem;
`;

const ReviewBody = styled.div`
  display: flex;
`;
const ContentWrapper = styled.div``;

const Title = styled.h1`
  display: flex;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
  margin-bottom: 0.4rem;
`;
const Content = styled.p`
  width: 26.3rem;
  height: 4.2rem;
  text-overflow: ellipsis;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
`;
const Image = styled.img`
  width: 6.8rem;
  height: 6.8rem;
  object-fit: contain;
  background-color: gray;
  margin-bottom: 1.2rem;
  margin-right: 1.2rem;
`;
