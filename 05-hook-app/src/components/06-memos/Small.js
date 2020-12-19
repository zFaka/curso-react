import React from 'react';

const Small = React.memo(({value}) => {

  console.log('has been called')

  return (
      <>
        <small>{value}</small> 
      </>
  )})

export default Small;
