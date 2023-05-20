import React from "react";
import { OrderListType } from "../../type/mypage";
import Title from "../common/title";

export default function TotalOrderList(props: OrderListType) {
  const { orderList } = props;

  return (
    <>
      {/* <header>
        <h1>전체 주문 내역</h1>
        <p>(최근 30일)</p>
      </header> */}
      <Title title="전체 주문 내역" />
      {/* {orderList.map(({ waiting, finish, ready, delivering, delivered })=>())} */}
    </>
  );
}
