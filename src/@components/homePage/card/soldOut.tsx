import React from "react";
import styled from "styled-components";
import { SoldOutIcon } from "../../../assets";

interface SoldOutProps {
  value: boolean;
}

export default function SoldOut(props: SoldOutProps) {
  const { value } = props;
  return <SoldOutIconIc>{value && <SoldOutIcon />}</SoldOutIconIc>;
}

const SoldOutIconIc = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
