import React from "react";
import styled from "styled-components";
import { NewTagIc } from "../../../assets";
import { BestTagIc } from "../../../assets";
import { RecommendTagIc } from "../../../assets";
import { SoldOutTagIc } from "../../../assets";

interface TagsProps {
  value: Array<string>;
}

export default function Tags(props: TagsProps) {
  const { value } = props;

  function checkTagText(tag: string) {
    return value.includes(tag);
  }

  return (
    <TagsWrapper>
      {checkTagText("new") && <NewTagIc />}
      {checkTagText("best") && <BestTagIc />}
      {checkTagText("recommend") && <RecommendTagIc />}
      {checkTagText("soldout") && <SoldOutTagIc />}
    </TagsWrapper>
  );
}
const TagsWrapper = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
  * {
    margin-right: 0.3rem;
  }
`;
