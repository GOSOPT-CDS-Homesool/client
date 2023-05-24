import { useEffect, useState } from "react";
import { getDetailAsk } from "../../api/detailAsk";
import { DetailAskType } from "../../type/detailAsk";
import GrayGap from "../common/GrayGap";
import { DetailSeeAllIc } from "../../assets";
import { styled } from "styled-components";

export default function DetailAsk() {
  const [detailAsks, setDetailAsks] = useState<DetailAskType>();
  const [length, setLength] = useState<number>(0);

  async function fetchDetailAsk() {
    const response = await getDetailAsk(1);
    setDetailAsks(response);
    setLength(response.length);
  }

  useEffect(() => {
    fetchDetailAsk();
  }, []);

  console.log(detailAsks);

  return (
    <>
      <GrayGap />
      <Header>
        <h1>상품문의({length})</h1>
        <DetailSeeAllIc />
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 37.5rem;
  height: 3.6rem;

  padding: 0 1.6rem;
  margin-left: -1.65rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  ${({ theme }) => theme.fonts.head03}
`;
