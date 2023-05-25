import { styled } from "styled-components";
import { HomeHeaderIc } from "../../assets";

export default function Header() {
  return (
    <HeaderWRapper>
      <HomeHeaderIc />
    </HeaderWRapper>
  );
}

const HeaderWRapper = styled.header`
  margin-left: -1.65rem;
`;
