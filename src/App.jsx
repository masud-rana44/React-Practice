import Profile from "./components/Profile";
import Clock from "./components/Clock";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <Profile />
        <TodoList />
      </div>
      <Clock locale="bn-BD" />
    </>
  );
}

export default App;
