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
            <h1>We are no longer taking orders!</h1>
      
            <p className='border border-brown shadow-md mt-4 p-4 rounded-md'>
              We've moved and no longer taking orders. Thank you for your interest! <br />
              <span className='font-bold'>
                
              </span>
            </p>
          </div>
          <ContactForm className='' />
        </main>
        
      </Layout>
    </div>
  )
}

export default Contact
