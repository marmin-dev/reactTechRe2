import { connect } from "react-redux";
import Child from "./Child";
import { resetCounter } from "./Action";

const Parent = ({ counter, resetCounter }) => {
  return (
    <>
      <div>{counter}</div>
      <button onClick={resetCounter}>Reset</button>
      <Child />
    </>
  );
};
const mapDispatchToProps = {
  resetCounter,
};
const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Parent);
