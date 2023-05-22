import React from "react";
import { GrayLikeIcon, OrangeLikeIcon } from "../../../assets";
import styled from "styled-components";

interface LikeProps {
  value: boolean;
}

export default function Like(props: LikeProps) {
  const { value } = props;
  return <LikeIconIc>{value ? <OrangeLikeIcon /> : <GrayLikeIcon />}</LikeIconIc>;
}

const LikeIconIc = styled.div`
  position: absolute;
  bottom: -1.3rem;
  left: 12.6rem;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
`;
