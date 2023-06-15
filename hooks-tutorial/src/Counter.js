import { useReducer } from "react";

const reducer = (state, action) => {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무 것도 해당 되지 않을 때 기본 상태 반환
      return state;
  }
};

const Counter = () => {
  /**
   * useState는 가장 기본적인 Hook이며 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다
   */
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>+1</button>
    </div>
  );
};

export default Counter;
