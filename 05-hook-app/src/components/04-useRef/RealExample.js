import React, {useState} from 'react';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css' ;

const RealExample = () => {

  const [show, setShow] = useState(false);
  const handleHider = () => {setShow(!show)};

  return (
    <>
      <h1>RealExample</h1> 
      <hr/>
      {show && <MultipleCustomHooks/>}
      <hr/>
      <button 
        className='btn btn-outline-primary'
        onClick={handleHider}
      >
        Show/Hide
      </button>
    </>
  )}

export default RealExample;
