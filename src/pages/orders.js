import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => {
  return (
    <div>
      <Layout>
        <SEO title='Order Form' />
        <main>
          <div className='mt-4 pt-4 text-center max-w-xl mx-auto'>
            <h1>We are no longer taking orders!</h1>
      
            <p className='border border-brown shadow-md mt-4 p-4 rounded-md'>
              We've moved and no longer taking orders. Thank you for your interest!
            </p>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default Contact
