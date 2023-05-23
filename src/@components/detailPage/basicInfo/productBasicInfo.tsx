import BasicInfoOpen from "../../../assets/image/openBasicInfoImg.png";
import BasicInfoClose from "../../../assets/image/closeBasicInfoImg.png";
import { OpenDetailInfoIcon, CloseDetailInfoIcon } from "../../../assets";
import { useState } from "react";
import { styled } from "styled-components";
import GrayGap from "../../common/GrayGap";

export default function ProductBasicInfo() {
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
            <p>접어두기</p>
            <CloseIcon />
          </BasicInfoOpenContainer>
        ) : (
          <BasicInfoOpenContainer onClick={openDetailInfo}>
            <p>펼쳐보기</p>
            <OpenIcon />
          </BasicInfoOpenContainer>
        )}
      </BasicInfoHeaderContainer>
      <BasicCloseInfo src={BasicInfoClose} />
      {open && <BasicOpenInfo src={BasicInfoOpen} />}
      <GrayGap />
    </>
  );
}

const CloseIcon = styled(CloseDetailInfoIcon)`
  margin-top: -0.5rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
  ${({ theme }) => theme.fonts.body04};
`;

const BasicCloseInfo = styled.img`
  margin-top: 1.2rem;
`;

const BasicOpenInfo = styled.img`
  margin-left: -1.6rem;
`;

const OpenIcon = styled(OpenDetailInfoIcon)`
  margin-top: -0.5rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
  ${({ theme }) => theme.fonts.body04};
`;

const BasicInfoOpenContainer = styled.div`
  display: flex;
  margin: 0.9rem 0 0 23.8rem;
`;

const HeaderTitle = styled.header`
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.bodyBold};
`;

const BasicInfoHeaderContainer = styled.div`
  margin-top: 0.9rem;
  padding-bottom: 0.9rem;
  display: flex;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
`;
