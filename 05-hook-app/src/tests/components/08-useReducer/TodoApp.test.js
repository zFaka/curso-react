import React from 'react';
import {act} from "@testing-library/react";
import {mount, shallow} from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import {demoTodos} from "../../fixtures/demoTodos";

describe('Test TodoApp', () => {


  const wrapper = shallow(<TodoApp />);

  const spy = jest.spyOn(Storage.prototype, 'setItem');


  test('Should render', () => {
    expect(wrapper)
      .toMatchSnapshot()
  })



  test('Should add ToDo', () => {

    const wrapper = mount(<TodoApp/>);

    act(() => {

      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
    })

    
    expect(wrapper.find('h4').text().trim()).toBe('Tasks: 2')
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  })




  test('Should del todo', () => {


    act(() => {

      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
      wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)
    })

    
    expect(wrapper.find('h4').text().trim()).toBe('Tasks: 0')
  })
})
