import React from "react";
import styled from "styled-components";
import { TimeSaleIcon } from "../../../assets";

interface StockProps {
  value: number;
}

export default function Stock(props: StockProps) {
  const { value } = props;
  return (
    <>
      <StockWrapper>
        <TimeSaleIcon />
        <span>현재 남은 수량 {value}개</span>
      </StockWrapper>
    </>
  );
}

const StockWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.4rem;
  span {
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.SYMANTIC};
  }
`;
