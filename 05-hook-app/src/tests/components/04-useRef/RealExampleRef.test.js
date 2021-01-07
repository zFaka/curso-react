import {shallow} from "enzyme"
import RealExample from "../../../components/04-useRef/RealExample"

describe('Test RealExample', () => {


  const wrapper = shallow(<RealExample/>);



  test('Should load Component', () => {

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultipleCustomHooks').exists())
      .toBe(false);
  })



  test('Should show MultipleCustomHooks', () => {

    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists())
      .toBe(true);
  })
})
