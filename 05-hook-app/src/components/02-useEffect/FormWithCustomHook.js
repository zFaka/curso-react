import React, {useEffect} from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {

  const [formValue, handleInputChange] = useForm({

    name: '', 
    email: '', 
    password: ''
  });


  const {name, email, password} = formValue;


  useEffect(() => {
    console.log('email');
  }, [email]);


  const handleSubmmit = (e) => {

    e.preventDefault();
    console.log(formValue);
  };


  return (
    <form onSubmit={handleSubmmit}>
      <h1>FormWithCustomHook</h1> 

      <div className='form-group'>
        <input
          type='text'
          name= 'name'
          className= 'form-control'
          placeholder='name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name= 'email'
          className= 'form-control'
          placeholder='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='password'
          name= 'password'
          className= 'form-control'
          placeholder='password'
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className='btn btn-primary' type='submit'>
        Save 
      </button>
    </form>
  )}

export default FormWithCustomHook;
