import {mount} from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import {UserContext} from "../../../components/09-useContext/UserContext";

describe('Test AppRouter', () => {

  const user = {
    id:1, 
    name:'faka', 
  };

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <AppRouter/>
    </UserContext.Provider>
  );

  test('Should render', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })

})
