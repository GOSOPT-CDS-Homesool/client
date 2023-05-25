import { useState } from "react";
import { styled } from "styled-components";
import { DetailFoldIc, DetailUnfoldIc } from "../../../assets";
import BasicInfoClose from "../../../assets/image/closeBasicInfoImg.png";
import BasicInfoOpen from "../../../assets/image/openBasicInfoImg.png";
import { DetailIdProps } from "../../../type/detailIdProps";
import GrayGap from "../../common/GrayGap";

export default function ProductBasicInfo(props: DetailIdProps) {
  const { id } = props;
  console.debug(id);

  const [open, setOpen] = useState(false);

  function openDetailInfo() {
    setOpen(true);
  }

  function closeDetailInfo() {
    setOpen(false);
  }

  return (
    <>
      <BasicInfoHeaderContainer>
        <HeaderTitle>기본정보</HeaderTitle>
        {open ? (
          <BasicInfoOpenContainer onClick={closeDetailInfo}>
            <DetailFoldIc />
          </BasicInfoOpenContainer>
        ) : (
          <BasicInfoOpenContainer onClick={openDetailInfo}>
            <DetailUnfoldIc />
            {/* <OpenIcon /> */}
          </BasicInfoOpenContainer>
        )}
      </BasicInfoHeaderContainer>
      <BasicCloseInfo src={BasicInfoClose} />
      {open && <BasicOpenInfo src={BasicInfoOpen} />}
      <GrayGap />
    </>
  );
}

const BasicCloseInfo = styled.img`
  margin-top: 1.2rem;
`;

const BasicOpenInfo = styled.img`
  margin-left: -1.6rem;
`;

const BasicInfoOpenContainer = styled.div``;

const HeaderTitle = styled.header`
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.bodyBold};
`;

const BasicInfoHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 37.5rem;
  height: 3.6rem;

  padding: 0 1.6rem;
  margin-left: -1.65rem;

  margin-top: 0.9rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
`;
