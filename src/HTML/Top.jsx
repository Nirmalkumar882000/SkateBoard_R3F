import React from 'react'


function Top() {
  return (
    <div className="flex justify-center w-screen p-4 text-lg sm:justify-between">
      <div className='hidden sm:block sm:p-8'>
        {/* <h1>Home</h1> */}
      </div>
      <div id='section-label-container' className='flex gap-5 font-extrabold text-gray-300'>
        <p className='text-black uppercase'>1. Board</p>
        <p className='uppercase'>2. Trucks</p>
        <p className='uppercase'>3. Wheels</p>
        <p className='uppercase'>4. Finish</p>
      </div>
      <div className='hidden ml-20 sm:block'>
        <img src="cart.svg" alt="cart image"/>
      </div>
    </div>
  )
}

export default Top
