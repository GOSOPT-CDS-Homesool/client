import React from "react";
import { COUPON_LIST } from "../../core/myPage";
import CouponInfo from "./couponInfo";

export default function CouponInfoBox() {
  return <>{COUPON_LIST.map({ id:number, title:string })=><CouponInfo key={id} title={title}/>}</>;
}
