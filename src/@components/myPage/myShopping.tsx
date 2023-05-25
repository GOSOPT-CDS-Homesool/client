import { styled } from "styled-components";
import { myShoppingList } from "../../core/myPage";
import ListBox from "../common/listBox";
import Title from "../common/title";

export default function MyShopping() {
  return (
    <MyShoppingWrapper>
      <Title title="나의 쇼핑" />
      {myShoppingList.map(({ id, listTitle }) => (
        <div key={id}>
          <ListBox listTitle={listTitle} />
        </div>
      ))}
    </MyShoppingWrapper>
  );
}

const MyShoppingWrapper = styled.section`
  margin-bottom: 4.4rem;
`;
