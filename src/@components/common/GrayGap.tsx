import { styled } from "styled-components";

export default function GrayGap() {
  return (
    <>
      <GreyGap></GreyGap>
    </>
  );
}

const GreyGap = styled.div`
  width: 37.5rem;
  height: 1.6rem;
  margin-left: -1.6rem;
  background-color: ${({ theme }) => theme.colors.GRAYSCALE100};
`;
