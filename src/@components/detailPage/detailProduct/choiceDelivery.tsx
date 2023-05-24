import { styled } from "styled-components";
import { AlertIcon, CheckButton, NonCheckButton } from "../../../assets";

export default function ChoiceDelivery() {
  return (
    <>
      <ChoiceDeliveryTitleWrapper>
        <ChoiceDeliveryTextCOntainer>
          <ChoiceDeliveryTitle>배송방식 선택</ChoiceDeliveryTitle>
          <AlertCircleIcon />
        </ChoiceDeliveryTextCOntainer>
        <ChoiceDeliveyInfoText>구독이 불가한 상품입니다.</ChoiceDeliveyInfoText>
      </ChoiceDeliveryTitleWrapper>
      <CheckDeliveryContainer>
        <StandardDeliveryTitleContainer>
          <CheckButton />
          <StandardDeliveryTitle>일반홈술</StandardDeliveryTitle>
        </StandardDeliveryTitleContainer>

        <StandardDeliveryText>11:37:43 내 주문시, 2023-05-08(월) 출고</StandardDeliveryText>
        <StandardDeliveryTextBlack>일반배송 장바구니 3만원 이상 무료배송</StandardDeliveryTextBlack>
      </CheckDeliveryContainer>
      <CheckDeliveryContainer>
        <SubscribeDeliveryTitleContainer>
          <NonCheckButton />
          <SubscribeDeliveryTitle>구독홈술</SubscribeDeliveryTitle>
        </SubscribeDeliveryTitleContainer>
        <SubscribeDeliveryText>정기결제 상품 선택 시 무조건 무료배송</SubscribeDeliveryText>
      </CheckDeliveryContainer>
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

const CheckDeliveryContainer = styled.div`
  margin: 1.2rem 0 0 8.7rem;
`;

const AlertCircleIcon = styled(AlertIcon)`
  margin: 4.2rem 1.8rem 0 0;
`;

const SubscribeDeliveryText = styled.p`
  margin: 0.4rem 0 2rem 2rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
  ${({ theme }) => theme.fonts.body04};
`;

const SubscribeDeliveryTitle = styled.p`
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
  ${({ theme }) => theme.fonts.head01_1};
`;

const StandardDeliveryTextBlack = styled.p`
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE700};
  ${({ theme }) => theme.fonts.roboto06};
`;

const StandardDeliveryText = styled.p`
  margin: 0.4rem 0 0 2rem;
  color: ${({ theme }) => theme.colors.HS_SKYBLUE500};
  ${({ theme }) => theme.fonts.roboto06};
`;

const StandardDeliveryTitle = styled.p`
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.head01_1};
`;

const ChoiceDeliveyInfoText = styled.p`
  margin-top: 3.9rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.body02_1};
`;

const ChoiceDeliveryTitle = styled.p`
  margin: 4.4rem 0.2rem 0 0;
  color: ${({ theme }) => theme.colors.GRAYSCALE500};
  ${({ theme }) => theme.fonts.body05};
`;

const SubscribeDeliveryTitleContainer = styled.div`
  display: flex;
`;

const StandardDeliveryTitleContainer = styled.div`
  display: flex;
`;

const ChoiceDeliveryTitleWrapper = styled.div`
  display: flex;
`;

const ChoiceDeliveryTextCOntainer = styled.div`
  display: flex;
`;
