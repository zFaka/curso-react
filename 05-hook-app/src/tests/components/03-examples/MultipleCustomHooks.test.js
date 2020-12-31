import {shallow} from "enzyme";
import {MultipleCustomHooks} from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from "../../../hooks/useCounter";
import {useFetch} from "../../../hooks/useFetch";
// Outputs Hooks simulator
jest.mock('../../../hooks/useFetch')
jest.mock("../../../hooks/useCounter")

describe('Test MultipleCustomHooks', () => {



  test('Should show component correctly', () => {


  useCounter.mockReturnValue({

    counter:0, 
    increase:()=>{}
  });
    useFetch.mockReturnValue({data:null,loading:true,error:null});

    const wrapper = shallow(<MultipleCustomHooks/>);
    expect(wrapper).toMatchSnapshot();
  })



  test('Should show info', () => {


  useCounter.mockReturnValue({counter:0, increase:()=>{}});
    useFetch.mockReturnValue({

      data:[{

        author:'Fernando', 
        quote:'Hola Mundo'
      }], 
      loading:false, 
      error:null
    })

    const wrapper = shallow(<MultipleCustomHooks/>);

    expect(wrapper.find('.alert').exists())
      .toBe(false);

    expect(wrapper.find('.mb-3').text().trim())
      .toBe('Hola Mundo');

    expect(wrapper.find('footer').text().trim())
      .toBe('Fernando');
  })

})
