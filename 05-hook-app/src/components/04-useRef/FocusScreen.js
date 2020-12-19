import React, {useRef} from 'react';

const FocusScreen = () => {

  const inputRef = useRef();
  console.log(inputRef)


  const handleClick = () => {

    inputRef.current.select();

  };


  return (
    <>
      <h1>FocusScreen</h1> 
      <input
        ref={inputRef}
        className= 'form-control'
      />
      <button
        className= 'btn btn-outline-primary'
        onClick={handleClick}
      >
        Focus
      </button>
    </>
  )
}

export default FocusScreen;
