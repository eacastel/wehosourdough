import React from 'react'

const Button = () => {
    return (
        <div className="p-5 text-center">
            <div data-field="phone">
                <a href="tel:+32 161 189 198">
                    <button id="button" type="button" className="shadow-md cursor-pointer border border-brown bg-wheat hover:text-wheat hover:shadow-none hover:bg-brown rounded text-text font-medium py-3 px-8 lg:py-4 lg:px-12 xl:py-5 xl:px-16 xl:text-lg"> Iniciar pedido </button>
                </a>
            </div>
        </div>
    )
};
export default Button;