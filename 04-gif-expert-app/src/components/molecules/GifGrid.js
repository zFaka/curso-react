import React from 'react';
import {useFetchGifs} from '../../hooks/useFetchGifs';
import GifGridItem from '../atoms/GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3> 

      {loading && <p className="animate__animated animate__flash">L   o  a ding</p>}

      <div className='card-grid'>
        {
          images.map((img) => (
            <GifGridItem 
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
category: PropTypes.string.isRequired
}
