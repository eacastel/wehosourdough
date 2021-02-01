import React, { useState } from "react";
import { useForm } from "react-hook-form";

const GATEWAY_URL = "https://29v8wns725.execute-api.us-east-2.amazonaws.com/prod";

export default () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
  } = useForm();

  const onSubmit = async data => {
    try {
      await fetch(GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="bg-wheat text-center m-4 p-6 rounded-md">
      <p>Thank you for your Inquiry! Your message was sent and you will be hearing from our staff shortly. </p>
      <button className="underline font-bold" type="button" onClick={() => setSubmitted(false)}>
        Clear Form
      </button>
    </div>
  );

  const showForm = (
    <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="mt-4">
      <label htmlFor="name">
        <h5 className="font-bold">Your Name</h5>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          ref={register({ required: true, maxLength: 200 })}
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
        />
        {errors.name && <p className="text-error font-medium italic ml-2">Name is required</p>}
      </label>
      </div>
      <div className="mt-4">
        <label htmlFor="phone">
          <h5 className="font-bold">Your Phone</h5>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="(123) 456-7890" 
            ref={register}
            className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
          />
        </label>
      </div>
      <div className="mt-4">
      <label htmlFor="email">
        <h5 className="font-bold">Email</h5>
        <input
          type="text"
          name="email"
          id="email"
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
          placeholder="your@email.address"
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && <p className="text-error font-medium italic ml-2">Email is required</p>}
      </label>
      </div>

    <div className="mt-4">
    <h5 className="font-bold">Select your Sourdough Bread:</h5>
      <div className="ml-4">
        <label for="classic"><input type="checkbox" id="classic" ref={register} name="classic" value="Classic" /> Classic White Sourdough (10% Wheat for added flavor)</label>
        <br />
        <label for="wheat"><input type="checkbox" id="wheat" ref={register} name="wheat" value="20% Wheat" /> 20% Wheat</label><br />
        <label for="wheatgerm"><input type="checkbox" id="wheatgerm" ref={register} name="wheatgerm" value="Add Wheat Germ" /> Add Wheat Germ (+ $2.50)</label><br />
        <label for="olives"><input type="checkbox" id="olives" ref={register} name="olives" value="Add Olives" /> Add Olives (+ $2.50)</label><br />
        <label for="pecans"><input type="checkbox" id="pecans" name="pecans" ref={register} value="Add Pecans" /> Add Pecans (+ $2.50)</label><br />
        </div>
    </div>

      <div className="mt-4">
      <label htmlFor="message">
        <h5 className="font-bold">Tell us about your order:</h5>
        <textarea
          ref={register}
          name="message"
          id="message"
          rows="3"
          placeholder="Please write down your order here."
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
        />
        {errors.message && <p className="text-error font-medium italic ml-2">Please include your order or request.</p>}
      </label>
          </div>
      <div className="submit-wrapper py-4">
        <button type="submit" className="shadow-md cursor-pointer border border-brown bg-wheat hover:text-wheat hover:shadow-none hover:bg-brown rounded text-text font-medium py-3 px-8 lg:py-4 lg:px-12 xl:py-5 xl:px-16 xl:text-lg">
          Send
        </button>
      </div>
    </form>
    </div>
  );

  return (
    <div className="page contact-page">
      <div className="text-side">
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  );
};
