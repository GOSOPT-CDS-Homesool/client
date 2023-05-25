import styled from "styled-components";
import { SoldOutIc } from "../../../assets";

interface SoldOutProps {
  value: boolean;
}

export default function SoldOut(props: SoldOutProps) {
  const { value } = props;
  return <>{value && <SoldOutIcon />};</>;
}

const SoldOutIcon = styled(SoldOutIc)`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
