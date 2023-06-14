import { styled } from "styled-components";

const H1T = styled.h1`
  color: red;
`;

const Title = (props) => {
  return <H1T>현재 카운트는 {props.count} 입니다</H1T>;
};

export default Title;
