import {mount} from "enzyme";
import React from 'react';
import {MemoryRouter} from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";

describe('Test PrivateRoute', () => {


  const props = {
    location:{
      pathname:'/marvel'
    }};

  // Storage.prototype.function work on >= 16.14.0
  // Simulation of localStorage functions
  // #simulate localstorage

  Storage.prototype.setItem = jest.fn();


  test(
    'Should show component if is authenticated & save in localStorage'
    , () => {


      // Mount is used because if we use shallow it
      // only renders the parent component and not 
      // the child components

      const wrapper = mount(

        // MemoryRouter enables the possibility of 
        // use Router components outside of <Router/> component
        // and simulate paths values

        <MemoryRouter>
          <PrivateRoute
            isAuthenticated={true} 
            component={()=><span>Rdy</span>}
            {...props}
          />
        </MemoryRouter>
      );


      expect(wrapper.find('span').exists())
        .toBe(true)

      expect(localStorage.setItem)
        .toHaveBeenCalledWith('lastPath', '/marvel')
    })



  test('Should block component if is not authenticated', () => {

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false} 
          component={()=><span>Rdy</span>}
          {...props}/>
      </MemoryRouter>);

    expect(wrapper.find('span').exists()).toBe(false)
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })
})
