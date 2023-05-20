import React from "react";
import { OrderListType } from "../../type/mypage";

export default function TotalOrder(props: OrderListType) {
  const { id, orderTitle, orderNum } = props;

  return (
    <>
      <p>{orderNum}</p>
      <h1>{orderTitle}</h1>
    </>
  );
}
