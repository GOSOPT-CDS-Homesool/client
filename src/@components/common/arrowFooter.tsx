import React from "react";
import { HomeIndicatorChromeIc } from "../../assets";
import { styled } from "styled-components";

export default function ArrowFooter() {
  return (
    <ArrowFooterWrapper>
      <HomeIndicatorChromeIc />
    </ArrowFooterWrapper>
  );
}

const ArrowFooterWrapper = styled.footer`
  position: fixed;
  z-index: 5;

  bottom: 0rem;
  margin-left: -1.65rem;
`;
