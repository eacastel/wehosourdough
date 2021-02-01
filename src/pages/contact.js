import React from 'react';
import Header from '../components/header'
import ContactForm from '../components/contactForm'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div>
        <Header />
        <main className="mx-2">
            <div className="mt-4 pt-4 text-center">
                <h1>Place an Order for Pickup!</h1>
                <p>Fill out the form below to place an order. <br />Or call now:  <a href="tel:+1-‪323-963-3322‬"><span className="font-bold hover:underline">(323) 963-3322‬.</span></a></p>
                <p className="border border-brown shadow-md m-4 p-4 rounded-md">All sourdough bread is made to order and requires payment in advance. Once we receive the order will will contact you to arrange payment via Venmo or Paypal. <span className="font-bold">Price per loaf is $14. Curbside pick-up!</span></p>
                
            </div>
            <ContactForm />
        </main>
        <Footer />
    </div>
  );
};

export default Contact;
