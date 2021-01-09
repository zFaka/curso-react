import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {
  return (
    <>
      <h1 className='animate__animated animate__fadeIn'>
        DC
      </h1> 
      <HeroList publisher={`DC Comics`}/>
    </>
  )}

export default DcScreen;
