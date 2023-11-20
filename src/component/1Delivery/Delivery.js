import React from 'react'
import '../1Delivery/Delivery.css'
import { FaAngleDown } from "react-icons/fa";


const Delivery = () => {
  return (
    <section id='overview-container'>
      <div className='delivery-container'>
        <div className='container2'>
          <div className='row'>
            <div className='col13 marleft'>
              <div className=' dimg center borderbottom'>
                <div className='Delivery-image'>
                  <img src='../img/bikecolor.avif' alt='img.avif'/>
                </div>
              
                <p className='del_content'>Delivery </p>
              </div>
            </div>
            <div className='col13'>
              <div className='dimg center'>
                <div className='Delivery-image'>
                  <img src='../img/platecolor.avif' alt='img.avif'/>     
                </div>
               
                <p>Dinning Out</p>
              </div>
            </div>
            <div className='col13'>
              <div className='dimg center'>
                <div className='Delivery-image'>
                  <img src='../img/bottlecolor.webp' alt='img.webp'/> 
                </div>
                
                <p>Nightlife</p>
              </div>
            </div>
            <div className='col13'>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className='filter-button-sec'>
        <div className='container'>
          <div className='col12 left gap'>
            <div className='filter-content marleft frvc'>
              <p><svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ"><title>filter</title><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg> Filter</p>
            </div>
            <div className='Ratings-content frvc'>
              <p>Ratings : 4.0+</p>
            </div>
            <div className='Veg-content frvc'>
              <p>Pure Veg</p>
            </div>
            <div className='cuisines-content frvc'>
              <p>cuisines <i> <FaAngleDown/></i></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery;