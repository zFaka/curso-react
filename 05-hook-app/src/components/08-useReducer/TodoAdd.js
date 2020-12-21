import React from 'react';
import useForm from '../../hooks/useForm';

const TodoAdd = ({handleAddTodo}) => {


  const [{description}, handleInputChange, reset] = useForm({

    description:''
  });



  const handleSubmit = (e) => {

    //Esto evita que recargue la pagina una vez hecho el submit
    
    e.preventDefault();

    if(description.trim().length <= 1){return}

    const newTodo = {

      id:new Date().getTime(), 
      desc:description, 
      done: false
    };

    handleAddTodo(newTodo);

    reset();
  }



  return (
      <>
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              name= 'description'
              className='form-control rounded'
              autoComplete='off'
              value={description}
              onChange={handleInputChange}
            />

            <button 
              className='btn btn-primary'
              type='submit'
            >
              + 
            </button>
          </form>
      </>
  )}

export default TodoAdd;
