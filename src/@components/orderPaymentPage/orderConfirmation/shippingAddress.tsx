import { RightSideOpenButton, TriangleOpenIcon } from "../../../assets";
import { styled } from "styled-components";
import GrayGap from "../../common/GrayGap";

export default function ShippingAddress() {
  return (
    <>
      <ShippingAddressHeaderContainer>
        <HeaderTitle>배송지</HeaderTitle>
        <ShippingListTitleContainer>
          <AddressListTitle>배송지 목록</AddressListTitle>
          <RightSideOpenButton />
        </ShippingListTitleContainer>
      </ShippingAddressHeaderContainer>
      <>
        <BaseAddressTitle>기본배송지</BaseAddressTitle>
        <BaseAddress>
          부산광역시 강서구 녹산산단382로14번가길 10~29번지광주전남공동혁신도시빛가람대방엘리움로얄카운티광주까지
        </BaseAddress>
        <RequestsForDelivery>
          <RequestsForDeliveryTitle>배송시 요청사항을 선택해주세요.</RequestsForDeliveryTitle>
          <TriangleOpenButton />
        </RequestsForDelivery>
      </>
      <GrayGap />
    </>
  );
}

const RequestsForDeliveryTitle = styled.p`
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.body03};
`;

const TriangleOpenButton = styled(TriangleOpenIcon)`
  margin: 0.6rem 0 0 14.1rem;
`;

const RequestsForDelivery = styled.div`
  display: flex;
  padding: 1rem 0 1.1rem 0.8rem;
  margin: 1.6rem 0 3.2rem 0;
  border: 0.1rem solid ${({ theme }) => theme.colors.HS_ORANGE500};
  border-radius: 0.4rem;
`;

const BaseAddress = styled.p`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.GRAYSCALE900};
  ${({ theme }) => theme.fonts.body01};
`;

const BaseAddressTitle = styled.div`
  display: inline-block;
  padding: 0.4rem 0.4rem;
  margin-top: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.HS_ORANGE500};
  border-radius: 0.9rem;
  color: ${({ theme }) => theme.colors.HS_ORANGE500};
  ${({ theme }) => theme.fonts.head01_2};
`;

const ShippingListTitleContainer = styled.div`
  display: flex;
  margin-left: 21.2rem;
`;

const ShippingAddressHeaderContainer = styled.div`
  display: flex;
  margin-top: 2.8rem;
`;

const AddressListTitle = styled.p`
  margin: 0.3rem 0.4rem 0 0;
  ${({ theme }) => theme.fonts.body03};
`;

const HeaderTitle = styled.header`
  ${({ theme }) => theme.fonts.head02};
`;
