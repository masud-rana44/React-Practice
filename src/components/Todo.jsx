import { useState } from 'react';

export default function Todo () {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);

   const handleInput = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes('.js') ? 'You need javascript skill to complete this take! Do you have it?': null;

    setTodo(inputValue);
    setWarning(updatedWarning);
  }

  return (
      <>
        <p>{ todo }</p>
        <textarea value={todo} onChange={handleInput}></textarea>
        <hr />
        <p>{warning || 'Good Choice'}</p>
      </>
    )
}