import { TopButtonIc } from "../../assets";
import { styled } from "styled-components";

export default function TopButton() {
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <TopButtonIcon onClick={goToTop} />
    </>
  );
}

const TopButtonIcon = styled(TopButtonIc)`
  position: fixed;
  bottom: 18.4rem;
  right: 21.8rem;
  z-index: 6;
`;
