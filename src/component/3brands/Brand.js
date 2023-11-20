import './Brand.css'
import Dish from '../../Object.json';


import React from 'react'

const Brand = () => {
    const bran1 = Dish.Brands;
    const bran = bran1.map((e)=>{
        return (
            <div className='col2'>
            <div className='hotelbrand-content'>
                <div className='brand-img'>
                    <img src={e.image1} alt='img.avif' />
                </div>
                <div className='hbrands-content'>
                    <p className='hname'>{e.hotelName}</p>
                    <p>{e.estimatedTime}</p>
                </div>
            </div>
        </div> 
        ) 
    })
  return (
    <div className='hotel-container'>
        <div className='brandname-content'>
            <h1>Top brands for you</h1>
        </div>
        <div className='hotelborder-container'>
            <div className='container'>
                <div className='row'>
                    {bran}
                </div>
            </div>
        </div>
    </div>
  )}

export default Brand;