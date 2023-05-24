import styled from "styled-components";
import { GrayLikeIc, OrangeLikeIc } from "../../../assets";

interface LikeProps {
  value: boolean;
}

export default function Like(props: LikeProps) {
  const { value } = props;
  return <LikeIcon>{value ? <OrangeLikeIc /> : <GrayLikeIc />}</LikeIcon>;
}

const LikeIcon = styled.div`
  position: absolute;
  bottom: -1.3rem;
  left: 12.6rem;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
`;
