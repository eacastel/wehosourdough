import React from 'react'
import { Link } from 'gatsby'



const Footer = () => {

  return (
    <footer className="sticky bottom-0 z-50 w-full bg-brown mt-8">
      <div className="flex flex-row justify-between h-12">
        <div className="flex-auto self-center text-sm text-bggray ml-8">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </div>
        <div className="flex-auto self-center text-right mr-8">
          <Link to="contact">
              <button id="button" type="button" className="shadow-md cursor-pointer bg-wheat hover:text-wheat hover:shadow-none hover:bg-text rounded text-text font-medium px-2 pt-1 pb-2 mt-1 text-sm"> Order Here 
              </button>
          </Link>
        </div>
      </div>
      
    </footer>
  )
};
export default Footer;
