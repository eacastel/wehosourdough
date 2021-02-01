import React from 'react'

const Button = () => {
    return (
        <div className="p-5 text-center">
            <button id="button" type="button" className="
                cursor-pointer
                border
                border-brown
                bg-wheat
                hover:text-wheat
                hover:bg-brown
                rounded
                text-text
                font-medium
                py-3 px-8
                lg:py-4 lg:px-12
                xl:py-5 xl:px-16 xl:text-lg"
            > Order Here </button>
        </div>
    )
};
export default Button;