import {shallow} from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Test TodoList', () => {

  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />);




  test('Should render', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })




  test('Should has a pair of <TodoListItem/>', () => {


    expect(wrapper.find('TodoListItem').length)
      .toBe(demoTodos.length)

    expect(wrapper
      .find('TodoListItem')
      .at(0)
      .prop('handleDelete')
    )
      .toEqual(expect.any(Function));
  })
})
