import React, {useCallback, useState} from 'react';
import '../02-useEffect/effects.css' ;
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

  const [counter, setCounter] = useState(0);


  const increment = useCallback((num) => {

    setCounter(c=>c+num)
  }, [setCounter]);



  return (
    <>
      <h1>CallbackHook</h1> 

      <h2>Hook: {counter}</h2>

      <ShowIncrement increment={increment}/>
    </>
  )}

export default CallbackHook;
