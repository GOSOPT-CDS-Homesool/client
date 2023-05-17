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
  function isNew() {
    const foundtag = value.includes("new");
    return foundtag;
  }
  function isBest() {
    const foundtag = value.includes("best");
    return foundtag;
  }
  function isRecommend() {
    const foundtag = value.includes("recommend");
    return foundtag;
  }
  function isSoldOut() {
    const foundtag = value.includes("soldout");
    return foundtag;
  }
  return (
    <TagsWrapper>
      {isNew() ? <NewTagIcon /> : null}
      {isBest() ? <BestTagIcon /> : null}
      {isRecommend() ? <RecommendTagIcon /> : null}
      {isSoldOut() ? <SoldOutTagIcon /> : null}
    </TagsWrapper>
  );
}
const TagsWrapper = styled.div`
  * {
    margin-top: 5px;
    margin-right: 0.19rem;
  }
`;
