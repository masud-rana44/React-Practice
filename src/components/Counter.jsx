import { useEffect, useState } from 'react';

export default function Counter () {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // This function call on every render
  useEffect(() => {
    console.log('counter rendered');
    document.title = `Clicked ${count} times`
  }, [count]);

  useEffect(() => {
    console.log('Timer started');
    const interval = setInterval(tick, 1000);


    // Do this cleanup
    return () => {
      console.log('Timer stopped');
      clearInterval(interval);
    }
  }, [])

  const tick = () => {
    console.log('Tick executed')
    setDate(new Date());
  }

  return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button type='button' onClick={() => {
            setCount((count) => count + 1)
          }}>Click</button>
        </p>
      </div>
    )
}