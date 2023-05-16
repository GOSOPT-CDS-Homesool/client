import React from "react";
import styled from "styled-components";

export default function Tags() {
  return (
    <TagsWrapper>
      <SoldOutProduct>품절</SoldOutProduct>
      <BestProduct>BEST</BestProduct>
      <RecommendProduct>추천</RecommendProduct>
      <NewProduct>신상품</NewProduct>
    </TagsWrapper>
  );
}
const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const SoldOutProduct = styled.div`
  background-color: black;
  color: white;
`;
const BestProduct = styled.div`
  background-color: orange;
  color: white;
`;
const RecommendProduct = styled.div`
  background-color: yellow;
  color: white;
`;
const NewProduct = styled.div`
  background-color: skyblue;
  color: white;
`;
