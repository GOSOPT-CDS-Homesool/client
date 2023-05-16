import React from "react";
import styled from "styled-components";

export default function SoldOut() {
  return <SoldOutWrapper>SoldOut</SoldOutWrapper>;
}

const SoldOutWrapper = styled.div`
  background-color: lightgray;
  opacity: 0.7;
`;
