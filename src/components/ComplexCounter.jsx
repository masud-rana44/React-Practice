import { useReducer } from "react";

const initialState = { counter: 1, counter2: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>Count : {count.counter}</p>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment",
              value: count.counter,
            })
          }
        >
          Increment by {count.counter}
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 2 * count.counter,
            })
          }
        >
          Decrement by {2 * count.counter}
        </button>
      </div>

      <div>
        <p>Count2 : {count.counter2}</p>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment2",
              value: count.counter,
            })
          }
        >
          Increment by {count.counter2}
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 2 * count.counter2,
            })
          }
        >
          Decrement by {2 * count.counter2}
        </button>
      </div>
    </>
  );
}

export default ComplexCounter;
