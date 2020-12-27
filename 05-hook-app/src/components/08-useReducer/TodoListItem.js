import React from 'react';
import './styles.css' ;

const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <>
      <li
        key={todo.id}
        className='list-group-item'
      >
        <p 
          className={`${todo.done && 'complete'}`}
          onClick={()=>handleToggle(todo.id)}
        >
          {todo.desc}
        </p>

        <button 
          className='btn btn-danger'
          onClick={()=>handleDelete(todo.id)}
        >
          x 
        </button>
      </li>
    </>
  )}

export default TodoListItem;
