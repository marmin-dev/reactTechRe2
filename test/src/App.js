import { useState } from "react";
import Todo from "./practice 01/Todo";
import Title from "./practice 01/Title";

const App = () => {
  const [count, setCount] = useState(0);
  const incre = () => {
    setCount(count + 1);
  };
  const decre = () => {
    setCount(count - 1);
  };
  const reset = () => {
    alert("초기화 성공!");
    setCount(0);
  };
  return (
    <Todo>
      <Title count={count}></Title>
      <button onClick={incre}>카운트 증가</button>
      <button onClick={decre}>카운트 감소</button>
      <button onClick={reset}>카운트 초기화</button>
    </Todo>
  );
};

export default App;
