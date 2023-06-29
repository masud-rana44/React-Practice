import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Tittle from './components/Tittle';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1(preCount => preCount + 1);
  }, [])

  const incrementByFive = useCallback(() => {
    setCount2(preCount => preCount + 5);
  }, [])

  const everOrOdd = useMemo(() => {
    let i = 0;
    while(i <= 1000000000) {  // costly operation
      i++;
    }
    return count1 % 2 == 0;
  }, [count1])

  return (
    <>
      <Tittle/>
      <ShowCount count={count1} title='Counter 1'/>
      <span>{everOrOdd ? 'Even' : 'Odd'}</span>
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <ShowCount count={count2} title='Counter 2'/>
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </>
  )
}

export default App