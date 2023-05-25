import { styled } from "styled-components";
import GrayGap from "../../common/GrayGap";
import { getAlcoholData } from "../../../api/alcoholData";
import { ProductDataType } from "../../../type/productDataType";
import { useState, useEffect } from "react";

export default function ProductInfo() {
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState<ProductDataType>();

  async function fetchAlcoholData() {
    const id = 3;
    try {
      const response = await getAlcoholData(id);
      setProductData(response);
      console.log(response);
    } catch (error) {
      console.error("데이터 패치 중 오류 발생:", error);
    }
  }

  useEffect(() => {
    fetchAlcoholData();
  }, []);

  function openDetailInfo() {
    setOpen(true);
  }

  return (
    <>
      {productData && (
        <>
          <HeaderTitle>제품 상세정보</HeaderTitle>
          {open ? (
            <DetailInfoImage src={productData.imageInfoImage} />
          ) : (
            <CropCloseImage>
              <CloseDetailInfoImage src={productData.imageInfoImage} />
            </CropCloseImage>
          )}
          <OpenDetailIfoButton onClick={openDetailInfo}>상세정보 펼쳐보기</OpenDetailIfoButton>
          <GrayGap />
        </>
      )}
    </>
  );
}

const CropCloseImage = styled.div`
  max-height: 120rem;
  overflow: hidden;
`;

const CloseDetailInfoImage = styled.img`
  width: 34.3rem;
`;

const DetailInfoImage = styled.img`
  width: 34.3rem;
  height: 100%;
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
  z-index: 1;
`;

const HeaderTitle = styled.header`
  margin-top: 0.9rem;
  padding-bottom: 0.9rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.bodyBold};
`;
