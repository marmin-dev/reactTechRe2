import { styled } from "styled-components";

const TempDiv = styled.div`
  background: none;
  border: 1px solid black;
`;

const Temp = (props) => {
  return (
    <TempDiv>
      <h2>섭씨 온도</h2>
      <input type="text" onChange={props.changeHandler} />
    </TempDiv>
  );
};

export default Temp;
