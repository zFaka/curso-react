import React, {useContext} from 'react';
import {AuthContext} from '../../auth/AuthContext';
import {types} from '../../types/types';

const LoginScreen = ({history}) => {


  const {dispatch} = useContext(AuthContext)

  const handleLogin = () => {


    const lastPathFromLocalStorage = localStorage
      .getItem('lastPath') || '/';



    dispatch({
      type:types.login, 
      payload:{
        name:'faka'
      }
    })

    history.replace(lastPathFromLocalStorage)
  };



  return (
    <div className='container mt-5'>

      <h1>SignIn</h1> 

      <button
        className='btn btn-primary'
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )}

export default LoginScreen;
