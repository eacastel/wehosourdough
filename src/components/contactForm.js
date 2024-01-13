import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setError, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${process.env.GATEWAY_URL}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setError('submit', {
        type: 'manual',
        message: `Oops! There seems to be an issue! ${error.message}`,
      });
    }
  };

  return (
    <div className='page contact-page'>
      <div className='text-side'>
        {errors.submit && <p className='msg-error'>{errors.submit.message}</p>}
      </div>
      <div className='form-side'>
        {submitted ? (
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
        ) : (
          <div className='max-w-xl mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} method='post'>
              <div className='mt-6'>
                <label htmlFor='name'>
                  <h5 className='font-bold'>Tu nombre</h5>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Tu nombre'
                    {...register('name', { required: true, maxLength: 200 })}
                    className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
                  />
                  {errors.name && <p className='text-error font-medium italic ml-2'>Es necesario que nos proporciones el nombre de quien hace el pedido.</p>}
                </label>
              </div>
              <div className='mt-6'>
                <label htmlFor='phone'>
                  <h5 className='font-bold'>Tu teléfono</h5>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    placeholder='123-456-789'
                    {...register('phone')}
                    className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
                  />
                </label>
              </div>
              <div className='mt-6'>
                <label htmlFor='email'>
                  <h5 className='font-bold'>Tu correo electrónico</h5>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    placeholder='correo@electronico.com'
                    {...register('email', {
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
                  />
                  {errors.email && <p className='text-error font-medium italic ml-2'>Necesitamos tu correo electrónico para poder confirmar tu orden.</p>}
                </label>
              </div>

                            {/* Bread Type Selection */}
                            <div className='mt-6'>
                <h5 className='font-bold mb-2'>Elige qué tipo de pan quieres:</h5>
                <div className='ml-4'>
                  <label htmlFor='classic'>
                    <input
                      className='mt-2'
                      type='checkbox'
                      id='classic'
                      {...register('classic')}
                      value='Classic'
                    />{' '}
                    Weho Sourdough Clásico - €6.25 (10% de harina integral)
                  </label>
                  <br />
                  <label htmlFor='sesame'>
                    <input
                      className='mt-2'
                      type='checkbox'
                      id='sesame'
                      {...register('sesame')}
                      value='Sesame'
                    />{' '}
                    Weho Sourdough con ajonjolí - €8.50 (Semillas enteras y tostadas de ajonjolí)
                  </label>
                  <br />
                  <label htmlFor='olives'>
                    <input
                      className='mt-2'
                      type='checkbox'
                      id='olives'
                      {...register('olives')}
                      value='Olives'
                    />{' '}
                    Weho Sourdough con aceitunas y nuez pacana - €9.50 (Aceitunas maceradas, nuez pacana, raspadura de limón, Herbs de Provence)
                  </label>
                  <br />
                </div>
              </div>

              {/* Message Textarea */}
              <div className='mt-6'>
                <label htmlFor='message'>
                  <h5 className='font-bold'>Anota aquí cualquier indicación especial:</h5>
                  <textarea
                    {...register('message')}
                    id='message'
                    rows='3'
                    className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
                  />
                  {errors.message && <p className='text-error font-medium italic ml-2'>Por favor incluye información adicional sobre tu orden</p>}
                </label>
              </div>

              {/* Additional Information */}
              <div>
                En cuanto tengamos tu orden nos pondremos en contacto contigo para confirmar los detalles de la orden y el pago. Hacemos muy pocos panes al día y necesitamos al menos dos días para programar el pedido.
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
        )}
      </div>
    </div>
  );
}
