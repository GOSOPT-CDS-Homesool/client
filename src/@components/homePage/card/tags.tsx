import React from "react";
import styled from "styled-components";
import { NewTagIcon } from "../../../assets";
import { BestTagIcon } from "../../../assets";
import { RecommendTagIcon } from "../../../assets";
import { SoldOutTagIcon } from "../../../assets";

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
      {checkTagText("new") && <NewTagIcon />}
      {checkTagText("best") && <BestTagIcon />}
      {checkTagText("recommend") && <RecommendTagIcon />}
      {checkTagText("soldout") && <SoldOutTagIcon />}
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
