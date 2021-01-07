import {shallow} from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Test TodoListItem', () => {

  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]} 
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );




  test('Should render', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })




  test('Should call handleDelete', () => {


    wrapper.find('button').simulate('click'); 



    expect(handleDelete)
      .toHaveBeenCalledWith(demoTodos[0].id);
  })




  test('Should call handleToggle', () => {


    wrapper.find('p').simulate('click'); 



    expect(handleToggle)
      .toHaveBeenCalledWith(demoTodos[0].id);
  })




  test('Should show output text', () => {


    const textInsideP = wrapper.find('p');



    expect(textInsideP.text().trim())
      .toBe(`${demoTodos[0].desc}`);
  })




  test('Should show complete if todo is done', () => {

    const todo = demoTodos[0];
    todo.done = true

    const wrapper = shallow(
      <TodoListItem
        todo={todo} 
      />
    );
    expect(wrapper.find('p').hasClass('complete'))
      .toBe(true);
  })
})
