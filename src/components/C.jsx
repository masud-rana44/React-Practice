import { useContext } from "react";
import { counterContext } from "../AppAlt";

function C() {
  const { count, countDispatch } = useContext(counterContext);

  return (
    <div>
      <div>From C - count: {count}</div>
      <button type="button" onClick={() => countDispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => countDispatch("decrement")}>
        Decrement
      </button>
    </div>
  );
}

export default C;
