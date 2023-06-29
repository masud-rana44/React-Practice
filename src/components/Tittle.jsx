import React from 'react'

const Tittle = () => {
  console.log('Rendering title...');

  return (
    <h2>React hook callback tutorial</h2>
  )
}

export default React.memo(Tittle)