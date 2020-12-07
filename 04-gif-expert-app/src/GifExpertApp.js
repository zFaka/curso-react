import React, {useState} from 'react';
import {AddCategory} from './components/atoms/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Creeper', 'Enderman', 'Wolf']);

  //const handleAdd = () => {setCategories([...categories, 'Slime']);};

  return (
    <>
      <h2>GifExpertApp</h2> 
      <hr/>
      <AddCategory setCategories={setCategories}/>
      <ol>
        {
          categories.map(category => {
            return <li key={category}> {category} </li>
          })
        }
      </ol>
    </>
  )}

export default GifExpertApp ;


