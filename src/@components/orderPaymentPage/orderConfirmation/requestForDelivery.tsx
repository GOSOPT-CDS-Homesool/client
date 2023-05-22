import { TriangleOpenIcon } from "../../../assets";
import GrayGap from "../../common/GrayGap";
import { SHIPPING_MESSAGE_DATA } from "../../../core/shippingMessageData";
import { styled } from "styled-components";
import { useState } from "react";

export default function RequestForDelivery() {
  const [visible, setVisible] = useState(false);
  const [changeMessage, setChangeMessage] = useState(false);
  const [contents, setContents] = useState<string>("");

  function ChangeListMessage(value: string) {
    setContents(value);
    setChangeMessage(true);
    console.log(value);
    setVisible(false);
  }

  function clickDeliveryMessage() {
    setVisible(true);
  }

  return (
    <div>
      <RequestsForDelivery>
        <RequestsForDeliveryTitle>
          {changeMessage ? contents : SHIPPING_MESSAGE_DATA[0].message}
        </RequestsForDeliveryTitle>
      </RequestsForDelivery>
      <TriangleOpenButton onClick={clickDeliveryMessage} />
      <DeliveryMessageList>
        {visible &&
          SHIPPING_MESSAGE_DATA.slice(1, 6).map((list) => {
            return (
              <ListItem value={list.message} key={list.id} onClick={() => ChangeListMessage(list.message)}>
                {list.message}
              </ListItem>
            );
          })}
      </DeliveryMessageList>
      <GrayGap />
    </div>
  );
}

const DeliveryMessageList = styled.div`
  position: relative;
  top: -4.2rem;
`;

const ListItem = styled.li`
  width: 34.3rem;
  height: 3.5rem;
  padding: 0.8rem 1.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.GRAYSCALE400};
  background-color: ${({ theme }) => theme.colors.GRAYSCALE100};
  ${({ theme }) => theme.fonts.body03};

  &:hover {
    background-color: ${({ theme }) => theme.colors.GRAYSCALE300};
  }
`;

const RequestsForDeliveryTitle = styled.p`
  color: ${({ theme }) => theme.colors.GRAYSCALE800};
  ${({ theme }) => theme.fonts.body03};
`;

const TriangleOpenButton = styled(TriangleOpenIcon)`
  position: relative;
  top: -5.7rem;
  left: 31rem;
`;

const RequestsForDelivery = styled.div`
  display: flex;
  padding: 1rem 0 1.1rem 0.8rem;
  margin: 1.6rem 0 3.2rem 0;
  border: 0.1rem solid ${({ theme }) => theme.colors.HS_ORANGE500};
  border-radius: 0.4rem;
`;
