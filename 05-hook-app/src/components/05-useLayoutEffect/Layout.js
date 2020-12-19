import React, {useLayoutEffect, useRef, useState} from 'react';
import useCounter from '../../hooks/useCounter';
import {useFetch} from '../../hooks/useFetch';
import './layout.css' ;

export const Layout = () => {

  const {counter, increase} = useCounter(1);
  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {quote} = !!data && data[0];
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});


  useLayoutEffect(() => {

    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])


  return (
    <>
      <h1>useLayoutEffect</h1> 

      <blockquote className='blockquote text-right'>
        <p 
          className='mb-3'
          ref={pTag}
        >
          {quote}
        </p>
      </blockquote>

      <button className='btn btn-primary' onClick={increase}>
        Nxt Quote
      </button>
      <hr/>
      <pre>
        {JSON.stringify(boxSize, null, 2)}
      </pre>
    </>
  )}
