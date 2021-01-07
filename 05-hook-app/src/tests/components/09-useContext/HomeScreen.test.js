import {mount} from "enzyme";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import {UserContext} from "../../../components/09-useContext/UserContext";

describe('Test HomeScreen', () => {

  const user = {

    name:'Faka', 
    email:'f@ka.com'

  };

  //user === user:user
  const wrapper = mount(
    <UserContext.Provider 
      value={{
        user
      }}
    >
      <HomeScreen/>
    </UserContext.Provider>
  );




  test('Should render', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })

})
