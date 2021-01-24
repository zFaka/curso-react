import Swal from "sweetalert2";
import {fetchWithToken, fetchWithuotToken} from "../helpers/fetch";
import {types} from "../types/types";
import {eventLogout} from "./events";



export const startLogin = (email, password) => {

  return async(dispatch) => {

    const rsp = await fetchWithuotToken('auth', {email, password}, 'POST');
    const body = await rsp.json();

    if(body.ok){
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login({
        uid:body.uid, 
        name:body.name
      }))
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
};



export const startRegister = (name, email, password ) => {
  return async(dispatch) => {

    const rsp = await fetchWithuotToken('auth/new', {name, email, password}, 'POST');
    const body = await rsp.json();

    if(body.ok){
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login({
        uid:body.uid, 
        name:body.name
      }))
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
};



export const startChecking = () => {
  return async(dispatch) => {


    const rsp = await fetchWithToken('auth/renew');
    const body = await rsp.json();

    if(body.ok){
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login({
        uid:body.uid, 
        name:body.name
      }))
    } else {
      dispatch(checkingFinish())
    }
  }
};



const checkingFinish = (user) => (
  {type:types.authLogin, 
    payload:user})



const login = (user) => ({

  type:types.authLogin, 
  payload:user
})



export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(eventLogout())
    dispatch(logout())
  }
};


const logout = () => ({type:types.authLogout})
