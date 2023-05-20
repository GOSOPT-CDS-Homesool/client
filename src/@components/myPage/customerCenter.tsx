import React from "react";
import Title from "../common/title";
import ListBox from "../common/listBox";
import { customerCenterList } from "../../core/myPage";
import { styled } from "styled-components";

export default function CustomerCenter() {
  return (
    <CustomerCenterWrapper>
      <Title title="나의 쇼핑" />
      {customerCenterList.map(({ id, listTitle }) => (
        <ListBox key={id} listTitle={listTitle} />
      ))}
    </CustomerCenterWrapper>
  );
}

const CustomerCenterWrapper = styled.section`
  margin-bottom: 5.6rem;
`;
