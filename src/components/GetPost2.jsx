import { useReducer, useEffect } from "react";

const initialState = {
  loading: false,
  error: "",
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        error: "",
        data: action.result,
      };
    case "fail":
      return {
        loading: false,
        error: "Fail to fetch form API.",
        data: {},
      };
    default:
      return state;
  }
};

function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    initialState.loading = true;
    initialState.error = "";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "success", result: data }))
      .catch(() => dispatch({ type: "fail" }));
  }, []);

  return (
    <div>
      {state.error ? (
        <div>{state.error}</div>
      ) : state.loading ? (
        <div>Loading ...</div>
      ) : null}
      {!state.error && !state.loading && <div>{state.data.title}</div>}
    </div>
  );
}

export default GetPost2;
