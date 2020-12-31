import React, {useContext} from 'react';
import {UserContext} from './UserContext';

const LoginScreen = () => {

  const {setUser} = useContext(UserContext);

  const inputedData = {

      id:123, 
    nick:'chucko'
  };


  return (
    <>
      <h1>Login</h1> 
      <button 
        className='btn btn-primary'
        onClick={()=>setUser(inputedData)}
      >
        Login
      </button>
    </>
  )}

export default LoginScreen;
