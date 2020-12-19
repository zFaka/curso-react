import React, {useState} from 'react';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css' ;
import Small from './Small';

const Memorize = () => {

  const {counter, increase} = useCounter();
  const [show, setShow] = useState(true);


  return (
    <>
      <h1>Memorize</h1>

      <h2>Counter: <Small value={counter} /></h2>

      <button
        className='btn btn-outline-primary'
        onClick={increase}
      >
        +
      </button>

      <button
        className='btn btn-outline-primary ml-3'
        onClick={() => {

          setShow(!show);
        }}
      >
        Rfresh
      </button>
    </>
  )}

export default Memorize;
