import { styled } from "styled-components";
import top from "../../assets/image/top.png";

export default function Top() {
  return <TopImg src={top} alt="휴대폰 탑" />;
}

const TopImg = styled.img`
  width: 37rem;
  margin-left: -1.6rem;
`;
