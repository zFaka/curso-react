import {todoReducer} from '../../../components/08-useReducer/todoReducer';
import {demoTodos} from '../../fixtures/demoTodos';



describe('Test in todoReducer', () => {




  test('Should return default state', () => {

    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  })




  test('Should update state and add ToDo', () => {

    const newTodo = {

      id:3, 
      desc:'zapato', 
      done: false
    };

    const action = {

      type:'add', 
      payload:newTodo
    }

    const state = todoReducer(demoTodos, action);


    expect(state).toEqual([...demoTodos, newTodo]);
  })




  test('Should del a todo', () => {

    //action.payload === id of todo
    const action = {type:'delete', payload:2};
    const state = todoReducer(demoTodos, action);



    expect(state)
      .toHaveLength(1);

    expect(state)
      .toEqual([demoTodos[0]])
  })




  test('Should toggle a todo', () => {


    const todoId = 1
    const action = {type:'toggle', payload:todoId};
    const state = todoReducer(demoTodos, action);



    expect(state[0].done)
      .toEqual(!demoTodos[0].done);

    expect(state[1])
      .toEqual(demoTodos[1])
  })

})
