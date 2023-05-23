import { styled } from "styled-components";
import GrayGap from "../../common/GrayGap";

export default function PaymentMethod() {
  return (
    <>
      <HeaderTitle>결제방법</HeaderTitle>
      <ListContainer>
        <ListBoxCreditCard>신용/체크 카드</ListBoxCreditCard>
        <ListBox className="cash">무통장입금</ListBox>
        <ListBox className="naverPay">네이버페이</ListBox>
        <ListBox className="kakaoPay">카카오페이</ListBox>
        <ListBox className="toss">토스</ListBox>
        <ListBox className="phonePay">휴대폰결제</ListBox>
      </ListContainer>
      <PaymentGuide>무통장 입금의 경우 입금 확인 후부터 배송단계가 진행됩니다.</PaymentGuide>
      <GrayGap />
    </>
  );
}

const PaymentGuide = styled.p`
  display: inline-flex;
  padding: 1.3rem 4.8rem;
  margin-bottom: 4.8rem;
  background-color: ${({ theme }) => theme.colors.GRAYSCALE300};
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.roboto07};
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 3.2rem;

  .cash {
    margin-bottom: 1.2rem;
  }
  .naverPay {
    margin: 0 1.2rem 1.2rem 0;
  }
  .kakaoPay {
    margin-bottom: 1.2rem;
  }
  .toss {
    margin: 0 1.2rem 2rem 0;
  }
`;

const ListBoxCreditCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.3rem;
  height: 3.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.HS_ORANGE500};
  background-color: ${({ theme }) => theme.colors.HS_ORANGE500};
  color: ${({ theme }) => theme.colors.GRAYSCALE000};
  ${({ theme }) => theme.fonts.body02};
  margin: 0 1.2rem 1.2rem 0;
`;

const ListBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.3rem;
  height: 3.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  ${({ theme }) => theme.fonts.body02};
`;

const HeaderTitle = styled.header`
  padding-right: 2rem;
  margin-top: 2.8rem;
  ${({ theme }) => theme.fonts.head02};
`;
