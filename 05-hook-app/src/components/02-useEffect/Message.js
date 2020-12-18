import React, {useEffect, useState} from 'react';

const Message = () => {

  const [coord, setCoord] = useState({x:0, y:0});
  const {x, y} = coord;


  useEffect(() => {

    console.log('mounted component')

    const mouseMove = (e) => {

      const coords = {x:e.x, y:e.y};
      setCoord(coords);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {

      window.removeEventListener('mousemove', mouseMove);

      console.log('unmounted component')
    }}, [])



  return (
    <>
      <h3>Un Capo</h3> 
      <p>
        x:{x} y:{y}
      </p>
    </>
  )
}

export default Message;
