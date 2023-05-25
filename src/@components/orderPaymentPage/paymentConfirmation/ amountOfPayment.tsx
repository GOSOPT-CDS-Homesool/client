import { useState } from "react";
import { styled } from "styled-components";
import { purchaseSuccess } from "../../../api/postPurchaseData";
import { CheckIcon, NoneCheckIcon } from "../../../assets";
import SuccessModal from "../successModal";

interface AmountOfPayment {
  salePrice: number;
}

export default function AmountOfPayment(props: AmountOfPayment) {
  const { salePrice } = props;
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);

  function ClickCheckButton() {
    setCheck(true);
  }
  function ClickNoneCheckButton() {
    setCheck(false);
  }

  async function handlePayment() {
    const purchaseData = {
      result: true,
    };
    try {
      const response = await purchaseSuccess(purchaseData);
      console.debug(response);
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {open && <SuccessModal />}
      <HeaderTitle>결제금액</HeaderTitle>
      <OneLineContainer>
        <TextTitle>총 상품 금액</TextTitle>
        <TextTitle>+{salePrice}원</TextTitle>
      </OneLineContainer>
      <OneLineContainer>
        <TextTitle>배송비</TextTitle>
        <TextTitle>+0원</TextTitle>
      </OneLineContainer>
      <OneLineContainer>
        <TextTitle>포인트 사용</TextTitle>
        <TextTitle>+0원</TextTitle>
      </OneLineContainer>
      <OneLineContainer>
        <TextTitle>쿠폰사용</TextTitle>
        <TextTitle>+0원</TextTitle>
      </OneLineContainer>
      <FinalLineContainer>
        <FinalPaymentText>최종결제금액</FinalPaymentText>
        <FinalPaymentText>+{salePrice}원</FinalPaymentText>
      </FinalLineContainer>

      <CheckAgreementContainer>
        {check ? <CheckButton onClick={ClickNoneCheckButton} /> : <NoneCheckButton onClick={ClickCheckButton} />}
        <CheckAgreementText>
          <CheckAgreementBoldText>(필수)</CheckAgreementBoldText> 구매하실 상품의 결제정보를 확인하였으며, 구매 진행에
          동의합니다.
        </CheckAgreementText>
      </CheckAgreementContainer>
      <PaymentButton onClick={handlePayment}>{salePrice}원 결제하기</PaymentButton>
    </>
  );
}

const PaymentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.3rem;
  height: 5.3rem;
  margin-bottom: 13rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.HS_ORANGE500};
  color: ${({ theme }) => theme.colors.GRAYSCALE000};
  ${({ theme }) => theme.fonts.head01};
`;

const CheckButton = styled(CheckIcon)`
  margin-right: 1.2rem;
`;

const NoneCheckButton = styled(NoneCheckIcon)`
  margin-right: 1.2rem;
`;

const CheckAgreementContainer = styled.div`
  display: flex;
`;

const CheckAgreementBoldText = styled.span`
  ${({ theme }) => theme.fonts.bodyBold02};
`;

const CheckAgreementText = styled.p`
  margin: -0.4rem 0 5.2rem 0;
  ${({ theme }) => theme.fonts.body04};
`;

const OneLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const FinalLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  margin: 2.2rem 0 2.8rem 0;
  border-top: 0.3rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  .counting {
    position: absolute;
    right: 23rem;
  }
`;

const TextTitle = styled.p`
  ${({ theme }) => theme.fonts.body03};
`;

const HeaderTitle = styled.header`
  margin: 2.8rem 0 2rem 0;
  ${({ theme }) => theme.fonts.head02};
`;

const FinalPaymentText = styled.p`
  ${({ theme }) => theme.fonts.body01};
`;
