import styled from "styled-components";
import { BestTagIc, NewTagIc, RecommendTagIc, SoldOutTagIc } from "../../../assets";
import { TagsDataType } from "../../../type/tagsDataType";

interface TagsProps {
  tags: TagsDataType;
  soldOut: boolean;
}

export default function Tags(props: TagsProps) {
  const { tags, soldOut } = props;

  return (
    <TagsWrapper>
      {tags.newProduct && <NewTagIc />}
      {tags.best && <BestTagIc />}
      {tags.recommend && <RecommendTagIc />}
      {soldOut && <SoldOutTagIc />}
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
