import React from "react";
import { GrayLikeIcon, OrangeLikeIcon } from "../../../assets";

interface LikeProps {
  value: boolean;
}

export default function Like(props: LikeProps) {
  const { value } = props;
  return <>{value ? <OrangeLikeIcon /> : <GrayLikeIcon />}</>;
}
