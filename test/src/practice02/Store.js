import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET_COUNTER:
      return {
        counter: 0,
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
