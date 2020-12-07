import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (inputTxt) => {
    setTextareaValue(inputTxt.target.value)
  };

  const handleSubmmit = (submmitedValue) => {
    submmitedValue.preventDefault();

    if (textareaValue.trim().length > 1) {
      setCategories(oldTextareaValue=>[...oldTextareaValue, textareaValue]);
      setTextareaValue('');
    }
  };

  return (
    <form onSubmit={handleSubmmit}>
      <input 
        type='text' 
        placeholder='Any idea?'
        value={textareaValue} 
        onChange={handleTextareaChange}
      />
    </form>
  )}

AddCategory.propTypes = {   
  setCategories: PropTypes.func.isRequired
}
