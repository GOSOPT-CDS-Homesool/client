import { styled } from "styled-components";
import { customerCenterList } from "../../core/myPage";
import ListBox from "../common/listBox";
import Title from "../common/title";

export default function CustomerCenter() {
  return (
    <CustomerCenterWrapper>
      <Title title="나의 쇼핑" />
      {customerCenterList.map(({ id, listTitle }) => (
        <div key={id}>
          <ListBox listTitle={listTitle} />
        </div>
      ))}
    </CustomerCenterWrapper>
  );
}

const CustomerCenterWrapper = styled.section`
  margin-bottom: 5.6rem;
`;
