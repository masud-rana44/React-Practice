import React from 'react';
import withCounter from './HOC/withCounter';

function HoverCounter({ count, countHandler }) {
    return (
      <h2  onMouseOver={countHandler}>
        Hovered {count} times
      </h2>
  )
}

export default withCounter(HoverCounter);