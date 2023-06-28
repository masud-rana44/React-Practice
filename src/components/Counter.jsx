import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const addFive = () => {
    for(let i = 0; i < 5; i++)  {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
  }

  return (
    <div>
      {count}
      <div>
        <button type='button' onClick={() => setCount(count + 1)}>add 1</button>
        <button type='button' onClick={addFive}>add 5</button>
      </div>
    </div>
  )
}

export default Counter