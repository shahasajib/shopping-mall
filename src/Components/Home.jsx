import React from 'react';
import imgBg from '../asstes/images/shooping-cart.jpg'
import Products from './Products';

const Home = () => {
  return (
    <div className='hero'>
      <div className='card bg-dark text-white border-0'>
        <img src={imgBg} alt="background" height='550px' />
        <div className='card-img-overlay d-flex '>
          <div className="container">
          <h5 className='card-title display-3 fw-bolder mb-0 '> Shopping Mall</h5>
          <p className='card-text lead fs-2'>
            Check Out trends
          </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;