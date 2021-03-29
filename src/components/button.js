import React from 'react'
import { Link } from 'gatsby'

const Button = () => {
  return (
    <Link to='orders'>
      <div className='p-6 md:pl-0 text-center md:text-left'>
        <button
          id='button'
          type='button'
          className='shadow-md cursor-pointer border border-brown bg-wheat hover:text-wheat hover:shadow-none hover:bg-brown rounded text-text font-medium py-3 px-8 lg:py-4 lg:px-12 xl:py-5 xl:px-16 xl:text-lg'
        >
          {' '}
          Order Here
        </button>
      </div>
    </Link>
  )
}
export default Button
