import React from 'react'

const Footer = () => {
  return (
    <footer className='sticky bottom-0 z-50 w-full bg-brown mt-8'>
      <div className='flex flex-row justify-between h-12'>
        <div className='flex-auto self-center text-sm text-bggray ml-8'>
          {new Date().getFullYear()} &copy; All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
export default Footer
