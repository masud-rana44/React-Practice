const person = {
  name: "Masud Rana",
  theme: {
    backgroundColor: "grey",
    color: "white",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
