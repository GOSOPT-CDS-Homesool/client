import styled from "styled-components";

interface HeaderProps {
  title: string;
  discription: string;
}

export default function CardListHeader(props: HeaderProps) {
  const { title, discription } = props;

  return (
    <HeaderWrapper>
      <Title>{title} </Title>
      <Description>{discription}</Description>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  margin-bottom: 1.6rem;
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.head01}
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
`;
const Description = styled.p`
  margin-top: 0.4rem;
  ${({ theme }) => theme.fonts.body02}
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
`;
