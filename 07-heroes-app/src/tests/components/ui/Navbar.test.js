import {mount} from "enzyme";
import {MemoryRouter, Router} from "react-router-dom";
import {AuthContext} from "../../../auth/AuthContext";
import {Navbar} from "../../../components/ui/Navbar";
import {types} from "../../../types/types";

describe('Test Navbar', () => {


  const historyMock = {
    push:jest.fn(), 
    replace:jest.fn(), 
    listen:jest.fn(), 
    createHref:jest.fn(), 
    location:{}};


  const contextValue = {
    dispatch: jest.fn(), 
    user: {
      logged:true, 
      name:'faka'}};


  const storeMountOutput = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>

        {/*Put Router to use put history*/}

        <Router history={historyMock}>
          <Navbar/>
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  // Always Use this to clear mocks after use
  afterEach(() => {
    jest.clearAllMocks()
  })



  test('Should show component', () => {


    expect(storeMountOutput)
      .toMatchSnapshot()

    expect(storeMountOutput.find('.text-info').text().trim())
      .toBe(contextValue.user.name)
  })



  test('Shouldcall logout and use History', () => {


    // this simulate a click and return a 
    // function and is executed

    storeMountOutput.find('button').prop('onClick')()

    expect(contextValue.dispatch)
      .toHaveBeenCalledWith({type: types.logout})

    expect(historyMock.replace)
      .toHaveBeenCalledWith('/login')
  })
})
