import { styled } from "styled-components";
import { DetailAskType } from "../../type/detailAsk";
import { DetailEllipseIc } from "../../assets";

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
        <Title>{title}지평생막걸리보다</Title>
        <Contents>{contents}</Contents>
      </AskBox>
    </>
  );
}

const DetailEllipseIcon = styled(DetailEllipseIc)`
  margin: 0 0.5rem;
`;

const AskBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 37.5rem;
  height: 9rem;
  margin-left: -1.6rem;
  padding: 1.2rem 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE300};
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
