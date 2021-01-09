import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({

  isAuthenticated, 
  component:Component, 
  ...rest

}) => {

  // Is for see the props of rest and search inside
  //console.log(rest)

  localStorage.setItem('lastPath', rest.location.pathname)


  return (
    // Le pasamos las props history, path, data
    // mediante el uso de ...rest
    <Route {...rest}
      // props === ...rest
      component={(props)=>(
        (isAuthenticated)
          ? <Component {...props}/>
          : <Redirect to='/login'/>
      )}
    />
  )
}



PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, 
  component: PropTypes.func.isRequired}


export default PrivateRoute;
