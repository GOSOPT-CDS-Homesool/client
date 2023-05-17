import React from "react";
import { GrayLikeIcon, OrangeLikeIcon } from "../../../assets";
import styled from "styled-components";

interface LikeProps {
  value: boolean;
}

export default function Like(props: LikeProps) {
  const { value } = props;
  return <LikeWrapper>{value ? <OrangeLikeIcon /> : <GrayLikeIcon />}</LikeWrapper>;
}

const LikeWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: -5%;
  left: 85%;
  transform: translate(-50%, -50%);
`;
