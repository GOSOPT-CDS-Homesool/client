import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getDetailAsk } from "../../api/detailAsk";
import { DetailSeeAllIc } from "../../assets";
import { DetailAskType } from "../../type/detailAsk";
import { DetailIdProps } from "../../type/detailIdProps";
import DetailAskBox from "./detailAskBox";

export default function DetailAsk(props: DetailIdProps) {
  const { id } = props;
  const [detailAsks, setDetailAsks] = useState<DetailAskType[]>();
  const [length, setLength] = useState<number>(0);

  async function fetchDetailAsk() {
    const response = await getDetailAsk(`${id}`);
    setDetailAsks(response);
    setLength(response.length);
  }

  useEffect(() => {
    fetchDetailAsk();
  }, []);

  function checkAskIsZero() {
    return length === 0;
  }

  function checkAskLessThanTwo(idx: number) {
    return idx <= 2;
  }

  return (
    <>
      <Header>
        <h1>상품문의({length})</h1>
        <DetailSeeAllIc />
      </Header>
      {!checkAskIsZero() && (
        <>
          {detailAsks?.map(
            ({ userName, date, title, contents, answer }: DetailAskType, idx: number) =>
              checkAskLessThanTwo(idx) && (
                <DetailAskBox
                  key={idx}
                  userName={userName}
                  date={date}
                  title={title}
                  contents={contents}
                  answer={answer}
                />
              ),
          )}
        </>
      )}
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
  ${({ theme }) => theme.fonts.bodyBold}
`;
