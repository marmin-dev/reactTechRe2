import { styled } from "styled-components";

const TempDiv = styled.div`
  background: none;
  border: 1px solid black;
`;

const Temp2 = (props) => {
  return (
    <TempDiv>
      <h2>화씨 온도</h2>
      <input type="text" readOnly id="ff" value={props.temp} />
    </TempDiv>
  );
};

export default Temp2;
