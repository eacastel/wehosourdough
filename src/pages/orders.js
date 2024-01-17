import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import SEO from '../components/seo'
import FooterOrder from '../components/footerOrder'

const Contact = () => {
  return (
    <div>
      <Layout>
        <SEO title='Order Form' />
        <main>
          <div className='mt-4 pt-4 text-center max-w-xl mx-auto'>
            <h1>Realiza tu pedido aquí</h1>
            <p>
              Para realizar tu pedido completa el siguiente formulario con tus datos y los de tu pedido o envíanos un Whatsapp: <br />
              <a href='tel:+32 616189198'>
                <span className='font-bold hover:underline'>
                +32 616-189-198.
                </span>
              </a>
            </p>
            <p className='border border-brown shadow-md mt-4 p-4 rounded-md'>
              El pan se fabrica unicamente bajo pedido y es necesario completar el pago por anticipado.  Una vez que hayamos recibido tu orden nos pondremos en contacto contigo para acordar los detalles del pago y el tiempo de elaboración. <br />
              <span className='font-bold'>
                Precio base es de €7.50.
              </span>
            </p>
          </div>
          <ContactForm className='' />
        </main>
        <FooterOrder />
      </Layout>
    </div>
  )
}

export default Contact
