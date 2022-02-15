import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

  //const category = ['react', 'redux', 'udacity'];
  const [category, setCategory] = useState(['react']);

  /*const handleAdd = () => {
    //category.push('new');
    //console.log(category);
    // SOLUTION:
    //setCategory([...category, 'new']);
    setCategory( cats => [...cats, 'new']);
  }*/



  return (
    <>
        <h2>GitExpertApp</h2>
        <AddCategory setCategory={setCategory}/>
        <hr/>

        {/*<button onClick={handleAdd} >Agregar</button>*/}

        <ol>
            { 
                category.map(category => (
                  <GifGrid 
                    category={category} 
                    key={category}
                  /> 
                )) 
            
            }
        </ol>
    </>
  )
}
