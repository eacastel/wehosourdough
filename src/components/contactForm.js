import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, setError, errors, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      await fetch(`${process.env.GATSBY_GATEWAY_URL}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      setSubmitted(true)
      reset()
    } catch (error) {
      setError(
        'submit',
        'submitError',
        `Oops! There seems to be an issue! ${error.message}`
      )
    }
  }

  const showSubmitError = (msg) => <p className='msg-error'>{msg}</p>

  const showThankYou = (
    <div className='bg-wheat max-w-xl mx-auto text-center m-4 p-6 rounded-md'>
      <p>
        Thank you for your Inquiry! Your message was sent and you will be
        hearing from our staff shortly.{' '}
      </p>
      <button
        className='underline font-bold'
        type='button'
        onClick={() => setSubmitted(false)}
      >
        Clear Form
      </button>
    </div>
  )

  const showForm = (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)} method='post'>
        <div className='mt-6'>
          <label htmlFor='name'>
            <h5 className='font-bold'>Your Name</h5>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your name'
              ref={register({ required: true, maxLength: 200 })}
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            />
            {errors.name && (
              <p className='text-error font-medium italic ml-2'>
                Name is required
              </p>
            )}
          </label>
        </div>
        <div className='mt-6'>
          <label htmlFor='phone'>
            <h5 className='font-bold'>Your Phone</h5>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='(123) 456-7890'
              ref={register}
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            />
          </label>
        </div>
        <div className='mt-6'>
          <label htmlFor='email'>
            <h5 className='font-bold'>Email</h5>
            <input
              type='text'
              name='email'
              id='email'
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
              placeholder='your@email.com'
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && (
              <p className='text-error font-medium italic ml-2'>
                Email is required
              </p>
            )}
          </label>
        </div>

        <div className='mt-6'>
          <h5 className='font-bold mb-2'>Select your Sourdough Bread:</h5>
          <div className='ml-4'>
            <label for='classic'>
              <input
                className='mt-2'
                type='checkbox'
                id='classic'
                ref={register}
                name='classic'
                value='Classic'
              />{' '}
              Classic Weho Sourdough - $12.00 (10% Whole Wheat for added flavor)
            </label>
            <br />
            <label for='sesame'>
              <input
                className='mt-2'
                type='checkbox'
                id='sesame'
                name='sesame'
                ref={register}
                value='Sesame'
              />{' '}
              Sesame Weho Sourdough - $14.50 (Unhulled Sesame Seeds Toasted)
            </label>
            <br />
            <label for='olives'>
              <input
                className='mt-2'
                type='checkbox'
                id='olives'
                ref={register}
                name='olives'
                value='Olives'
              />{' '}
              Olive Weho Sourdough - $16.50 (Olives, Pecans, Grated Lemon Zest,
              Herbs de Provence)
            </label>
            <br />
          </div>
        </div>

        <div className='mt-6'>
          <label htmlFor='message'>
            <h5 className='font-bold'>Tell us about your order:</h5>
            <textarea
              ref={register}
              name='message'
              id='message'
              rows='3'
              placeholder='Please include any additional details or requests about your order such as preferred pickup date and time, etc.'
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            />
            {errors.message && (
              <p className='text-error font-medium italic ml-2'>
                Please include your order or request.
              </p>
            )}
          </label>
        </div>
        <div>
          We will contact you after placing your order to arrange payment
          information and pickup. Orders need to be placed at least 2 days in
          advance to fit them into the baking schedule.
        </div>
        <div className='submit-wrapper py-4'>
          <button
            type='submit'
            className='mt-2 shadow-md cursor-pointer border border-brown bg-wheat hover:text-wheat hover:shadow-none hover:bg-brown rounded text-text font-medium py-3 px-8 lg:py-4 lg:px-12 xl:py-5 xl:px-16 xl:text-lg'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )

  return (
    <div className='page contact-page'>
      <div className='text-side'>
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className='form-side'>{submitted ? showThankYou : showForm}</div>
    </div>
  )
}
