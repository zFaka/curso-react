import React, {useContext} from 'react';
import {UserContext} from './UserContext';

const AboutScreen = () => {
  const {user, setUser} = useContext(UserContext);


  const handleClick = () => {

    setUser({})
  };


  return (
    <>
      <h1>About</h1> 
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        className='btn btn-primary'
        onClick={handleClick}
      >
        LogOut
      </button>
    </>
  )}

export default AboutScreen;
