import React, {useState} from 'react';
import {AddCategory} from './components/atoms/AddCategory';
import {GifGrid} from './components/molecules/GifGrid';

export const GifExpertApp = ({defaultCategories=[]}) => {

  const [categories, setCategories] = useState(defaultCategories);

  //const handleAdd = () => {setCategories([...categories, 'Slime']);};

  return (
    <>
      <h2 className='titletitle'>GifExpertApp</h2> 
      <hr/>
      <AddCategory setCategories={setCategories}/>
      <ol>
        {
          categories.map(category => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )}

export default GifExpertApp ;


