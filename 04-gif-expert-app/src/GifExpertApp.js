import React, {useState} from 'react';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Creeper', 'Enderman', 'Wolf']);

  const handleAdd = () => {
    setCategories([...categories, 'Slime']);
  };
  return (
    <>
      <h2>GifExpertApp</h2> 
      <hr/>
      <button onClick={handleAdd}>Add</button>
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
