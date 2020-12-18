import React, {useEffect, useState} from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({

    name: '', 
    email: ''
  });


  const {name, email} = formState;


  // los [] se ponen cuando solo queres que se ejecute una vez
  useEffect(() => {
    //console.log('hey jude');
  }, []);


  // va a volver a ejecutarse cuando el formState se modifique
  useEffect(() => {
    //console.log('hey formState');
  }, [formState]);


  // se ejecuta cada vez que cambie el estadp del email
  useEffect(() => {
    //console.log('hey email');
  }, [email]);


  // target sale de event.target donde event es el evento que recibimos al escribir en el formulario
  const handleInputChange = ({target}) => {
    setFormState({
      ...formState, 
      [target.name]:target.value
    })
  }


  return (
    <>
      <h1>useEffect</h1> 

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

      {(name === 'faka') &&  <Message />}

    </>
  )}

export default SimpleForm;
