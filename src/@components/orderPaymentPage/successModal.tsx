import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function SuccessModal() {
  const navigate = useNavigate();

  function moveToHome() {
    navigate("/");
  }

  function moveToMy() {
    navigate("/mypage");
  }

  return (
    <>
      <ModalLayOut>
        <Modal>
          <Message>결제가 완료되었습니다!</Message>
          <ButtonWrapper>
            <Button $isOrange={false} onClick={moveToHome}>
              홈으로 가기
            </Button>
            <Button $isOrange={true} onClick={moveToMy}>
              주문정보 확인
            </Button>
          </ButtonWrapper>
        </Modal>
      </ModalLayOut>
    </>
  );
}

const ModalLayOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 5;
  width: 37.5rem;
  height: 100vh;

  margin-left: -1.6rem;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.section`
  width: 30rem;
  height: 17.5rem;

  border-radius: 1.4rem;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.GRAYSCALE000};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100%;
`;

const Button = styled.button<{ $isOrange: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15rem;
  height: 5.4rem;

  color: ${({ $isOrange, theme }) => ($isOrange ? theme.colors.GRAYSCALE000 : theme.colors.GRAYSCALE800)};
  background-color: ${({ $isOrange, theme }) => ($isOrange ? theme.colors.HS_ORANGE500 : theme.colors.GRAYSCALE300)};
  ${({ theme }) => theme.fonts.body01}
`;

const Message = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 12.1rem;

  ${({ theme }) => theme.fonts.head01}
`;
