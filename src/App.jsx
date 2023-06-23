import "./App.css";
import Text from './composition/Text';
import Emoji from "./composition/Emoji";

function App() {
  return (
    <>
    <Emoji>
      {(addEmoji) => <Text addEmoji={addEmoji}/>}
    </Emoji>
    </>
  );
}

export default App;
