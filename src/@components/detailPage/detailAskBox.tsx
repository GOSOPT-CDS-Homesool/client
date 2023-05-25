import { styled } from "styled-components";
import { DetailAskRectangleIc, DetailEllipseIc } from "../../assets";
import { DetailAskType } from "../../type/detailAsk";

export default function DetailAskBox(props: DetailAskType): JSX.Element {
  const { userName, date, title, contents, answer } = props;

  return (
    <>
      <AskBox>
        <AskAside>
          <AskAsideTitle>
            {userName}
            <DetailEllipseIcon />
            {date}
          </AskAsideTitle>
        </AskAside>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
      </AskBox>
      {answer && (
        <AnswerBox>
          <AnswerAuthor>
            <DetailAskRectangleIc />
            <Author>관리자</Author>
          </AnswerAuthor>
          <Answer>{answer}</Answer>
        </AnswerBox>
      )}
    </>
  );
}

const Answer = styled.article`
  color: ${({ theme }) => theme.colors.GRAYSCALE600};
  ${({ theme }) => theme.fonts.body04};
`;

const AnswerAuthor = styled.header`
  display: flex;
`;

const Author = styled.h1`
  margin: 0.4rem 0 0.4rem 0.8rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE700};
  ${({ theme }) => theme.fonts.body04};
`;

const AnswerBox = styled.section`
  display: flex;
  flex-direction: column;

  width: 37.5rem;
  margin-left: -1.6rem;
  padding: 1.2rem 2.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  background-color: ${({ theme }) => theme.colors.GRAYSCALE300};
`;

const DetailEllipseIcon = styled(DetailEllipseIc)`
  margin: 0 0.5rem;
`;

const AskBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 37.5rem;
  margin-left: -1.6rem;
  padding: 1.2rem 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
`;

const AskAsideTitle = styled.h1`
  display: flex;
  align-items: center;
`;

const AskAside = styled.aside`
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
  ${({ theme }) => theme.fonts.body05};
`;

const Title = styled.h1`
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.GRAYSCALE900};
  ${({ theme }) => theme.fonts.body03};
`;

const Contents = styled.p`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.colors.GRAYSCALE600};
  ${({ theme }) => theme.fonts.body04};
`;
