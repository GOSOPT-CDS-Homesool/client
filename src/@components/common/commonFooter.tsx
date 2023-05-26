import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { CommonFooterIc, FooterHomeActiveIc, FooterHomeIc, FooterMyActiveIc, FooterMyIc } from "../../assets";
import { isHomePage } from "../../recoil/page";
import TopButton from "../homePage/topButton";

export default function CommonFooter() {
  const [isHome, setIsHome] = useRecoilState<boolean>(isHomePage);
  const navigate = useNavigate();

  function activateHome() {
    setIsHome(true);
    navigate("/");
  }

  function activateMy() {
    setIsHome(false);
    navigate("/mypage");
  }

  return (
    <>
      <TopButton />
      <ButtonWrapper>
        <div onClick={activateHome}>{isHome ? <FooterHomeActiveIc /> : <FooterHomeIc />}</div>
        <div onClick={activateMy}>{isHome ? <FooterMyIc /> : <FooterMyActiveIc />}</div>
      </ButtonWrapper>
      <CommonFooterIcon />
    </>
  );
}

const ButtonWrapper = styled.section`
  display: flex;

  position: fixed;
  z-index: 2;
  top: 63.8rem;
  margin-left: 10rem;

  cursor: pointer;
`;

const CommonFooterIcon = styled(CommonFooterIc)`
  position: fixed;
  top: 63.8rem;
  bottom: 0rem;

  margin-left: -1.65rem;
`;
