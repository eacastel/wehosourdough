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
            <h1>Ordena tu pan aquí</h1>
            <p>
              Para ordenar completa la siguiente forma con tus datos y tu pedido o envíanos un Whatsapp! 
              now: <br />
              <a href='tel:+1-‪323-963-3322‬'>
                <span className='font-bold hover:underline'>
                  (323) 963-3322‬.
                </span>
              </a>
            </p>
            <p className='border border-brown shadow-md mt-4 p-4 rounded-md'>
              El pan se hace unicamente bajo pedido y es necesario completar el pago por anticipado.  Una vez que hayamos recibido tu orden nos pondremos en contacto contigo para afinar detalles de pago y tiempo de elaboración.  Los pagos se podrán realizar por  <br />
              <span className='font-bold'>
                Precio base es de €12.
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
