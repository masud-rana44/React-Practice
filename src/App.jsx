import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  return (
    <>
      <h2>{time}</h2>
      {setTimeout(() => {
        setTime(time + 1);
      }, 1000)}
    </>
  );
}

export default App;
