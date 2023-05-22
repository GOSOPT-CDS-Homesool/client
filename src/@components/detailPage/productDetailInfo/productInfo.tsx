import ProductDetailClose from "../../../assets/image/closeProductInfoImg.png";
import ProductDetailOpen from "../../../assets/image/openProductInfoImg.png";
import { useState } from "react";
import { styled } from "styled-components";
import GrayGap from "../../common/GrayGap";

export default function ProductInfo() {
  const [open, setOpen] = useState(false);

  function openDetailInfo() {
    setOpen(true);
  }

  return (
    <>
      <HeaderTitle>제품 상세정보</HeaderTitle>
      {open ? <DetailInfoImage src={ProductDetailOpen} /> : <DetailInfoImage src={ProductDetailClose} />}
      <OpenDetailIfoButton onClick={openDetailInfo}>상세정보 펼쳐보기</OpenDetailIfoButton>
      <GrayGap />
    </>
  );
}

const DetailInfoImage = styled.img`
  margin-top: 2rem;
`;

const OpenDetailIfoButton = styled.button`
  position: relative;
  bottom: 0;
  padding: 1rem 12.6rem 1.1rem 12.5rem;
  background: ${({ theme }) => theme.colors.GRAYSCALE000};
  color: ${({ theme }) => theme.colors.GRAYSCALE700};
  border: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  ${({ theme }) => theme.fonts.body02_1};
`;

const HeaderTitle = styled.header`
  margin-top: 0.9rem;
  padding-bottom: 0.9rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.bodyBold};
`;
