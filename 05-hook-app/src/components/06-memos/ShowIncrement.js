import React from 'react';

const ShowIncrement = React.memo(({increment}) => {
  console.log('generado')
  return (
    <button
      className='btn btn-outline-primary'
      onClick={() => {increment(7)}}
    >
      Incrementar 
    </button>
  )})

export default ShowIncrement;
