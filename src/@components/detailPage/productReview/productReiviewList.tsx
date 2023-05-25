import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDetailReview } from "../../../api/detailReview";
import { SeeAllIc } from "../../../assets";
import { ReviewDataType } from "../../../type/reviewDataType";
import ProductReview from "./productReview";

export default function ProductReiviewList() {
  const [detailReviews, setDetailReviews] = useState<ReviewDataType[]>([]);

  async function fetchDetailReview() {
    const response = await getDetailReview(1);
    setDetailReviews(response);
  }

  useEffect(() => {
    fetchDetailReview();
  }, []);

  return (
    <>
      <ProductReviewHeader>
        <Title>상품후기(3)</Title>
        <SeeAllWrapper>
          <p>전체보기</p>
          <SeeAllIcon />
        </SeeAllWrapper>
      </ProductReviewHeader>
      {detailReviews?.map(({ id, title, image, contents, star, date }: ReviewDataType) => (
        <ProductReview key={id} title={title} image={image} contents={contents} star={star} date={date} />
      ))}

      <GreyGap />
    </>
  );
}

const ProductReviewHeader = styled.div`
  width: 37.5rem;
  height: 3.6rem;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
  padding-bottom: 0.9rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
`;
const Title = styled.header`
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 140%;
  margin-top: 0.9rem;
  margin-left: 1.6rem;
`;

const SeeAllIcon = styled(SeeAllIc)`
  margin-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
  ${({ theme }) => theme.fonts.body04};
`;

const SeeAllWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.9rem;
  margin-right: 1.4rem;
`;

const GreyGap = styled.div`
  width: 37.5rem;
  height: 1.6rem;
  margin-left: -1.6rem;
  background-color: ${({ theme }) => theme.colors.GRAYSCALE100};
`;
