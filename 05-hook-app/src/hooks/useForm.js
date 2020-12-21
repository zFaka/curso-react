import {useState} from 'react';

const useForm = (initalState = {})=> {


  const [value, setValue] = useState(initalState);


  const reset = () => {

    setValue(initalState);
  };

  const handleInputChange = ({target}) => {

    setValue({
      ...value, 
      [target.name]:target.value
    })
  }


  return [value, handleInputChange, reset];
}

export default useForm;
