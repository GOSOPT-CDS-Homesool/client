import React from "react";
import Title from "../common/title";
import ListBox from "../common/listBox";
import { myShoppingList } from "../../core/myPage";
import { styled } from "styled-components";

export default function MyShopping() {
  return (
    <MyShoppingWrapper>
      <Title title="나의 쇼핑" />
      {myShoppingList.map(({ id, listTitle }) => (
        <ListBox key={id} listTitle={listTitle} />
      ))}
    </MyShoppingWrapper>
  );
}

const MyShoppingWrapper = styled.section`
  margin-bottom: 4.4rem;
`;
