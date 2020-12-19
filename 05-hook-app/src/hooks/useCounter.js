import {useState} from 'react';

const useCounter = (initalState = 0) => {


  const [counter, setCounter] = useState(initalState);


  const increase = () => {

    setCounter(counter + 1);

  }


  const decrease = () => {

    setCounter(counter - 1);

  }


  const reset = () => {

    setCounter(initalState);

  };



  return {

    counter, 
    increase, 
    decrease, 
    reset

  };
}

export default useCounter ;
