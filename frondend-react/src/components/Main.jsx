import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>This StocK prediction applications utilizes machine learning techniques specially employing keras and lstm model integrtaed within django framework</p>
        <Button text="Login" class="btn-outline-info" />

      </div>
    </div>
    
    </>
  )
}

export default Main