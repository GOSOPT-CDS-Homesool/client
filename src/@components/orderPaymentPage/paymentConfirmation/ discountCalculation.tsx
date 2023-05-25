import { styled } from "styled-components";
import { RightSideOpenButton } from "../../../assets";
import GrayGap from "../../common/GrayGap";
import { ProductDataType } from "../../../type/productDataType";

export default function DiscountCalculation(props: ProductDataType) {
  const { salePrice } = props;

  return (
    <>
      <CouponContainer>
        <HeaderTitle>쿠폰</HeaderTitle>
        <Count>0개</Count>
      </CouponContainer>
      <RightSideOpenIcon />
      <PointContainer>
        <PointHeaderTitle>포인트</PointHeaderTitle>
        <Count>0원</Count>
      </PointContainer>
      <RightSideOpenIcon />
      <GrayGap />
    </>
  );
}

const PointContainer = styled.div`
  display: flex;
  margin: 2.8rem 0;
`;

const Count = styled.p`
  margin-left: 2.8rem;
  ${({ theme }) => theme.fonts.body01};
`;

const CouponContainer = styled.div`
  display: flex;
  margin: 2.8rem 0;
`;

const RightSideOpenIcon = styled(RightSideOpenButton)`
  position: absolute;
  margin: -5rem 30rem 0;
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
`;

const HeaderTitle = styled.header`
  padding-right: 3.2rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
  ${({ theme }) => theme.fonts.body02};
`;

const PointHeaderTitle = styled.header`
  padding-right: 2.1rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
  ${({ theme }) => theme.fonts.body02};
`;
