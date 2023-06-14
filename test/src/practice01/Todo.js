import { styled } from "styled-components";

const TBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Todo = (props) => {
  return <TBox>{props.children}</TBox>;
};
export default Todo;
