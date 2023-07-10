// eslint-disable-next-line no-unused-vars
import B from "./components/B";
import { useReducer } from "react";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const counterContext = React.createContext();

const initialState = 10;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>From APP - count: {count}</div>
      <counterContext.Provider value={{ count, countDispatch: dispatch }}>
        <B />
      </counterContext.Provider>
    </>
  );
};

export default App;
