import React from "react";
import { HomeHeaderIc } from "../../assets";
import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderWRapper>
      <HomeHeaderIc />
    </HeaderWRapper>
  );
}

const HeaderWRapper = styled.header`
  margin-left: -1.65rem;
`;
