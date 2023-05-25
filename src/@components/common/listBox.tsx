import { styled } from "styled-components";

interface ListBoxProps {
  listTitle: string;
}

export default function ListBox(props: ListBoxProps) {
  const { listTitle } = props;

  return <LisBoxWrapper>{listTitle}</LisBoxWrapper>;
}

const LisBoxWrapper = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: 6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};

  ${({ theme }) => theme.fonts.body03};
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
`;
