import React, { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow((show) => !show);
  }

  return (
    <>
      { show && <Counter/>}
      <button type='button' onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
    </>
  )
}

export default App