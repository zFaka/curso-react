import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {
  return (
    <>
      <h1 className='animate__animated animate__fadeIn'> 
        Marvel 
      </h1> 
      <HeroList publisher={`Marvel Comics`}/>
    </>
  )}

export default MarvelScreen;
