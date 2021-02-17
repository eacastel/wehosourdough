import React from 'react';
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import SEO from '../components/seo'

const Contact = () => {
  return (
    <div>
        <Layout>
            <SEO title="Order Form" />
        <main>
            <div className="mt-4 pt-4 text-center max-w-xl mx-auto">
                <h1>Place an Order for Pickup!</h1>
                <p>Fill out the form below to place an order. <br />Or call now:  <a href="tel:+1-‪323-963-3322‬"><span className="font-bold hover:underline">(323) 963-3322‬.</span></a></p>
                <p className="border border-brown shadow-md mt-4 p-4 rounded-md">All sourdough bread is made to order and requires payment in advance. Once we receive the order we will contact you to arrange payment via Venmo or Paypal. <br /><span className="font-bold">Price per loaf is $12. Curbside pick-up!</span></p>
                
            </div>
            <ContactForm className="" />
        </main>
        </Layout>
    </div>
  );
};

export default Contact;
