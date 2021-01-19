import {mount, shallow} from "enzyme";
import {AuthContext} from "../../auth/AuthContext";
import AppRouter from "../../routers/AppRouter";

describe('Test AppRouter', () => {


  const contextValue = {
    dispatch: jest.fn(), 
    user: {logged:false}};


  test('Should show login if is not authenticated', () => {


    // value recive an Object with user and dispatch value
    // 1 value={Object}   recive an Object
    // 2 {user, dispatch} its an Object
    // 3 value={contextValue} in this case contextValue is an Object 
    // 4 value={{user, dispatch}} put Object inside value


    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter/>
      </AuthContext.Provider>
    );



    expect(wrapper).toMatchSnapshot()
  })



  test('Should show marvel if is authenticated', () => {


    const contextValue = {
      dispatch: jest.fn(), 
      user: {
        logged:true, 
        name:'faka'}};

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter/>
      </AuthContext.Provider>);



    // .nameOfClass is used for find class in components
    expect(wrapper.find('.navbar').exists())
      .toBe(true)
  })
})
