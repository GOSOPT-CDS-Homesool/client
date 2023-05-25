import { styled } from "styled-components";

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  const { title } = props;

  return <TitleWrapper>{title}</TitleWrapper>;
}

const TitleWrapper = styled.h1`
  ${({ theme }) => theme.fonts.head02};

  color: ${({ theme }) => theme.colors.GRAYSCALE900};
`;
