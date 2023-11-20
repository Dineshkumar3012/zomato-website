import Dish from '../../Object.json';
import '../2Dishtypes/Dishtypes.css';

import React from 'react';

const Dishtypes = () => {
    const res1 = Dish.dishtypes1;
    const res = res1.map((e)=>{
        return (
            <div className='col2 center'>
            <div className='dishtype-content'>
                <div className='type-img'>
                    <img src={e.image} alt='img.avif' />
                </div>
                <div className='name-content'>
                    <p>{e.dishName}</p>
                </div>
            </div>
        </div> 
        ) 
    })
  return (
    <div className='border-container'>
        <div className='heading-content'>
            <h1>Eat what makes you happy</h1>
        </div>
        <div className='dishtypes-container'>
            <div className='container'>
                <div className='row'>
                    {res}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dishtypes;