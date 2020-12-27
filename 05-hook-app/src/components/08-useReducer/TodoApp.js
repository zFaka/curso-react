import React, {useEffect, useReducer} from 'react';
import './styles.css' ;
import {todoReducer} from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);



  // Should jsonite the objecto to can storage

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])



  const handleDelete = (todoId) => {


    const delTodoAction = {

      type:'delete', 
      payload:todoId
    };


    dispatch(delTodoAction)
  };



  const handleToggle = (todoId) => {
    dispatch({

      type:'toggle', 
      payload:todoId
    }) 
  }



  const handleAddTodo = (newTodo) => {

    dispatch({

      type:'add', 
      payload:newTodo
    });
  };



  //<p className='text-center complete'>{++i}  {todo.desc}</p>

  return (
    <>
      <h1>TodoApp</h1> 

      <h4>Tasks: {todos.length} </h4>

      <div className='row'>

        <div className=''>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className=''>

          <TodoAdd
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>

    </>
  )}

export default TodoApp;
