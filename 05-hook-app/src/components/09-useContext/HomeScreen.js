import React, {useContext} from 'react';
import {UserContext} from './UserContext';

const HomeScreen = () => {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>Home Screen</h1> 
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )}

export default HomeScreen;
