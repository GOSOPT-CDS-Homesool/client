import React from "react";
import { styled } from "styled-components";

export default function Title(props) {
  const { title } = props;

  return <TitleWrapper>{title}</TitleWrapper>;
}

const TitleWrapper = styled.h1`
  ${({ theme }) => theme.fonts.head02};
`;
