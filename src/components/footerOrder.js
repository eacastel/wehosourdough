import React from 'react'

const FooterOrder = () => {
  return (
    <footer className=' w-full bg-brown mt-8'>
      <div className='flex flex-row justify-between h-12'>
        <div className='flex-auto self-center text-sm text-bggray ml-8'>
          {new Date().getFullYear()} &copy; All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
export default FooterOrder
