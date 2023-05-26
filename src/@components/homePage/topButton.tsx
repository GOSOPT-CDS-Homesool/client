import { styled } from "styled-components";
import { TopButtonIc } from "../../assets";

export default function TopButton() {
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <TopButtonWrapper>
      <TopButtonIcon onClick={goToTop} />
    </TopButtonWrapper>
  );
}

// 탑버튼
const TopButtonIcon = styled(TopButtonIc)`
  position: fixed;

  bottom: 15rem;
  z-index: 6;
`;

const TopButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  position: fixed;
  z-index: 10;

  width: 33rem;
  height: 55rem;
`;
