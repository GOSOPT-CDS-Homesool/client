import React from "react";
import Title from "../common/title";
import ListBox from "../common/listBox";
import { myShoppingList } from "../../core/myPage";

export default function MyShopping() {
  return (
    <>
      <Title title="나의 쇼핑" />
      {myShoppingList.map(({ id, listTitle }) => (
        <ListBox key={id} listTitle={listTitle} />
      ))}
    </>
  );
}
