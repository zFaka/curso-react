import {mount} from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import {UserContext} from "../../../components/09-useContext/UserContext";

describe('Test LoginScreen', () => {


  const setUser = jest.fn();

  const wrapper = mount(

    <UserContext.Provider
      value={{
        setUser
      }}
    >
      <LoginScreen/>
    </UserContext.Provider>
  )




  test('Should render', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })



  test('Should exec setUser', () => {


    wrapper.find('button').prop('onClick')()



    expect(setUser)
      .toHaveBeenCalledWith({
          id:123, 
          name: 'chucko'
        }
      )
  })
})
