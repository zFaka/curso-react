import React, {useEffect} from 'react';

const Message = () => {


  useEffect(() => {

    console.log('mounted component')

    window.addEventListener('mousemove', (event) => {

      console.log(event);

      const coord = {x:event.x, y:event.y};

    })

    return () => {

      console.log('unmounted component')

    }}, [])


  return (
    <>
      <h3>Un Capo</h3> 
    </>
  )}

export default Message;
