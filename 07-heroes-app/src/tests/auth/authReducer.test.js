// const state = {
// name: 'Fernando',   <= This is the STATE
// logged: true
// };

import {authReducer} from "../../auth/authReducer";
import {types} from "../../types/types";



describe('Test authReducer', () => {


  test('Should return default state', () => {


    const outputState = authReducer(
      {logged:false},
      {});


    expect(outputState)
      .toEqual({logged: false});
  })



  test('Should authenticate & show name', () => {


    const outputState = authReducer(
      {logged: true}
      , 
      {type:types.login, 
        payload:{name:'faka'}});



    expect(outputState)
      .toEqual({
        name:'faka', 
        logged: true});
  })



  test('Should delete name & logged false', () => {


    const outputOfReducer = authReducer(
      {name:'faka', 
        logged: true}
      , 
      {type:types.logout});



    expect(outputOfReducer)
      .toEqual({logged: false});
  })

})
