import { decrementCounter, incrementCounter } from "./Action";
import { connect } from "react-redux";

const Child = ({ incrementCounter, decrementCounter }) => {
  return (
    <>
      <button onClick={incrementCounter}>+1</button>
      <button onClick={decrementCounter}>-1</button>
    </>
  );
};
const mapStateToProps = (state) => ({
  counter: state.counter,
});
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Child);
