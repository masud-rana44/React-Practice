import React from 'react';
import withCounter from './HOC/withCounter';

function ClickCounter({ count, countHandler }) {
    return (
      <button type="button" onClick={countHandler}>
        clicked {count} times
      </button>
  )
}

export default withCounter(ClickCounter);