import {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import {AuthContext} from "../../auth/AuthContext";
import DashboardRouters from "../../routers/DashboardRouters";

describe('Test DashboardRouters', () => {


  const contextValue = {
    dispatch: jest.fn(), 
    user: {
      logged:true, 
      name:'faka'}};

  const props = {
    location:{
      pathname:'/marvel'
    }};



  test('Should show component', () => {


    const storeOutputOfMount = mount(

      // AuthContext.Provider is for share 
      // the value of user and dispatch
      
      <AuthContext.Provider value={contextValue}>

        {/*
        MemoryRouter is puted to use any component 
        of React-Router and 
        use between them and inside
        */}

        <MemoryRouter>
          <DashboardRouters
            isAuthenticated={true} 
            component={()=><span>Rdy</span>}
            {...props}/>
        </MemoryRouter>
      </AuthContext.Provider>
    );



    expect(storeOutputOfMount)
      .toMatchSnapshot()

    expect(storeOutputOfMount.find('.text-info').text().trim())
      .toBe(contextValue.user.name)
  })

})
