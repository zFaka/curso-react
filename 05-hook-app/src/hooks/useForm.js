import {useState} from 'react';

const useForm = (initalState = {})=> {


  const [value, setValue] = useState(initalState);

  const handleInputChange = ({target}) => {

    setValue({
      ...value, 
      [target.name]:target.value
    })
  }


  return [value, handleInputChange];
}

export default useForm;
