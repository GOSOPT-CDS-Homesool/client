import React from "react";
import { CommonFooterIc } from "../../assets";
import { styled } from "styled-components";

export default function CommonFooter() {
  return <CommonFooterIcon />;
}

const CommonFooterIcon = styled(CommonFooterIc)`
  position: fixed;
  top: 63.8rem;
  bottom: 0rem;

  margin-left: -1.65rem;
`;
