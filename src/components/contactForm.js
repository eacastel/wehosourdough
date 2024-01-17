import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${process.env.GATEWAY_URL}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setError("submit", {
        type: "manual",
        message: `Oops! There seems to be an issue! ${error.message}`,
      });
    }
  };

  return (
    <div className="page contact-page">
      <div className="text-side">
        {errors.submit && <p className="msg-error">{errors.submit.message}</p>}
      </div>
      <div className="form-side">
        {submitted ? (
          <div className="bg-wheat max-w-xl mx-auto text-center m-4 p-6 rounded-md">
            <p>
              Thank you for your Inquiry! Your message was sent, and you will be
              hearing from our staff shortly.{" "}
            </p>
            <button
              className="underline font-bold"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Clear Form
            </button>
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              {/* Name Input */}
              <div className="mt-6">
                <label htmlFor="name">
                  <h5 className="font-bold">Tu nombre</h5>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Necesitamos tu nombre para saber quien hace el pedido.",
                      maxLength: { value: 200, message: "El nombre es demasiado largo" },
                    }}
                    render={({ field }) => (
                      <input
                        type="text"
                        {...field}
                        id="name"
                        placeholder="Tu nombre"
                        className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
                      />
                    )}
                  />
                  {errors.name && (
                    <p className="text-error font-medium italic ml-2">
                      {errors.name.message}
                    </p>
                  )}
                </label>
              </div>
              <div className="mt-6">
                {/* ... Rest of the form fields ... */}
              </div>
              {/* Additional Information */}
              <div>
                En cuanto tengamos tu orden nos pondremos en contacto contigo
                para confirmar los detalles de la orden y el pago. Hacemos muy
                pocos panes al día y necesitamos al menos dos días para
                programar el pedido.
              </div>

              <div className="submit-wrapper py-4">
                <button
                  type="submit"
                  className="mt-2 shadow-md cursor-pointer border border-brown bg-wheat hover:text-wheat hover:shadow-none hover:bg-brown rounded text-text font-medium py-3 px-8 lg:py-4 lg:px-12 xl:py-5 xl:px-16 xl:text-lg"
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
