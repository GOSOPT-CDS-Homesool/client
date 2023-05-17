import React from "react";
import styled from "styled-components";

export default function CardListHeader() {
  return (
    <HeaderWrapper>
      <h1> 이달의 홈술</h1>
      <p>홈닷 큐레이터가 엄선한 이달의 홈술 컬렉션</p>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  h1 {
    ${({ theme }) => theme.fonts.head01}
    color: ${({ theme }) => theme.colors.GRAYSCALE900};
  }
  P {
    ${({ theme }) => theme.fonts.body02}
    color: ${({ theme }) => theme.colors.GRAYSCALE500};
  }
`;
