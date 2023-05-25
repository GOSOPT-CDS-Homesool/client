import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDetailReview } from "../../../api/detailReview";
import { DetailNoReviewIc, DetailSeeAllIc } from "../../../assets";
import { ReviewDataType } from "../../../type/reviewDataType";
import ProductReview from "./productReview";

export default function ProductReiviewList() {
  const [detailReviews, setDetailReviews] = useState<ReviewDataType[]>([]);

  async function fetchDetailReview() {
    const response = await getDetailReview(2);
    setDetailReviews(response);
  }

  useEffect(() => {
    fetchDetailReview();
  }, []);

  function checkIsReviewZero() {
    return detailReviews.length === 0;
  }

  return (
    <>
      <ProductReviewHeader>
        <Title>상품후기({detailReviews.length})</Title>
        <DetailSeeAllIc />
      </ProductReviewHeader>
      {checkIsReviewZero() ? (
        <DetailNoReviewIc />
      ) : (
        <>
          {detailReviews?.map(({ id, title, image, contents, star, date }: ReviewDataType) => (
            <ProductReview key={id} title={title} image={image} contents={contents} star={star} date={date} />
          ))}
        </>
      )}
      <GreyGap />
    </>
  );
}

const ProductReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 37.5rem;
  height: 3.6rem;

  padding: 0 1.6rem;
  margin-left: -1.65rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
`;

const Title = styled.header`
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.bodyBold}
`;

const GreyGap = styled.div`
  width: 37.5rem;
  height: 1.6rem;
  margin-left: -1.6rem;
  background-color: ${({ theme }) => theme.colors.GRAYSCALE100};
`;
