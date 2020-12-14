import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counterApp.css';

const CounterWithCustomHook = () => {
  
  const {state, increase, decrease, reset} = useCounter();

  return (
    <>
      <h1>Counter with hook {state}</h1>
      <button onClick={()=>increase(2)} className='btn btn-primary'>+</button>
      <button onClick={reset} className='btn btn-primary'>o</button>
      <button onClick={()=>decrease(3)} className='btn btn-primary'>-</button>
    </>
  )}

export default CounterWithCustomHook ;
