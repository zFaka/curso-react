import {shallow} from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe('Test TodoApp', () => {


  const handleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAdd
      handleAddTodo={handleAddTodo}
    />); 




  test('Should render', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })




  test('Should dont call handleAddTodo', () => {


    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({preventDefault(){}})


    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })




  test('Should call handleAddTodo', () => {


    const value = 'lrn mny';


    // inputChange simulation     value:value = value
    wrapper.find('input').simulate('change', {
      target:{
        value, 
        name:'description'
      }}); 


    // submit simulation
    wrapper.find('form').simulate(
      'submit', 
      {preventDefault(){}});



    // call handleAddTodo
    expect(handleAddTodo)
      .toHaveBeenCalledTimes(1);

    // Its true if this is an object, 
    // can be empty and is wrong
    expect(handleAddTodo)
      .toHaveBeenCalledWith(expect.any(Object));

    // if the id is a number is true
    expect(handleAddTodo)
      .toHaveBeenCalledWith({

      id:expect.any(Number), 
      desc:value, 
      done:false
    })

    // check if reset() works and 
    // clear the input and its value
    expect(wrapper.find('input').prop('value'))
      .toBe('');
  })
})
