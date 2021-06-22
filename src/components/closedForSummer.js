import React from 'react'

const ButtonClosed = () => {
  return (
    <div className='p-6 md:pl-0 text-center md:text-left'>
      <button
        id='button'
        type='button'
        className='shadow-md cursor-pointer border border-brown bg-darkred text-white font-medium py-3 px-8 lg:py-4 lg:px-12 xl:py-5 xl:px-16 xl:text-lg'
      >
        {' '}
        WE WILL BE CLOSED FOR THE SUMMER UNTIL AUGUST 20TH. THANK YOU FOR YOUR
        PATRONAGE!
      </button>
    </div>
  )
}
export default ButtonClosed
