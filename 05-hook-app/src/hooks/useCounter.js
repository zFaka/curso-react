import {useState} from 'react';

const useCounter = (initalState = 0) => {


  const [state, setState] = useState(initalState);


  const increase = (factor = 1) => {

    setState(state + factor);

  }


  const decrease = (factor = 1) => {

    setState(state - factor);

  }


  const reset = () => {

    setState(initalState);

  };



  return {

    state, 
    increase, 
    decrease, 
    reset

  };
}

export default useCounter ;
