import React, {useMemo, useState} from 'react';
import {heavyProcess} from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css' ;

const MemoHook = () => {

  const {counter, increase} = useCounter(1000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => {heavyProcess(counter)}, [counter]);


  return (
    <>
      <h1>MemoHook</h1>

      <h2>Counter: <small>{counter}</small> </h2>

      <p>{memoProcesoPesado}</p>

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

export default MemoHook;
