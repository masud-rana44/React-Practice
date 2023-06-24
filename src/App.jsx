import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <>
      <Counter>
        {(count, handleCount) => (
          <HoverCounter count={count} handleCount={handleCount}/>
        )}
      </Counter>

      {/* <Counter render={(count, handleCount) => <ClickCounter count={count} handleCount={handleCount}/>}/> */}
    </>
  );
}

export default App;
