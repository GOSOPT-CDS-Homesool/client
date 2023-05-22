import React from "react";
import styled from "styled-components";

interface HeaderProps {
  title: string;
  discription: string;
}

export default function CardListHeader(props: HeaderProps) {
  const { title, discription } = props;

  return (
    <HeaderWrapper>
      <h1>{title} </h1>
      <p>{discription}</p>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  h1 {
    ${({ theme }) => theme.fonts.head01}
    color: ${({ theme }) => theme.colors.GRAYSCALE900};
  }
  p {
    margin-top: 0.4rem;
    ${({ theme }) => theme.fonts.body02}
    color: ${({ theme }) => theme.colors.GRAYSCALE500};
  }
`;
