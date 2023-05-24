import styled from "styled-components";
import { SeeAllIc } from "../../../assets";
import ProductReview from "./productReview";

export default function ProductReiviewList() {
  return (
    <>
      <ProductReviewHeader>
        <Title>상품후기(3)</Title>
        <SeeAllWrapper>
          <p>펼쳐보기</p>
          <SeeAllIcon />
        </SeeAllWrapper>
      </ProductReviewHeader>
      <ProductReview />
      <ProductReview />
      <ProductReview />
      <GreyGap />
    </>
  );
}

const ProductReviewHeader = styled.div`
  margin-top: 0.9rem;
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
