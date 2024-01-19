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
      const response = await fetch(`${process.env.GATSBY_GATEWAY_URL}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("submit", {
        type: "manual",
        message: `Oops! There seems to be an issue! ${error.message}`,
      });
    }
  };

  return (
    <div className="page contact-page">
      <div className="text-side">
        {errors.submit && (
          <p className="msg-error">{errors.submit.message}</p>
        )}
      </div>
      <div className="form-side">
        {submitted ? (
          <div className="bg-wheat max-w-xl mx-auto text-center m-4 p-6 rounded-md">
            <p>
              Muchas gracias por tu pedido!
              Tu mensaje ha sido enviado y nos pondremos en contacto contigo lo mas pronto posible.{" "}
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
                <label htmlFor="phone">
                  <h5 className="font-bold">Tu teléfono</h5>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        type="text"
                        {...field}
                        id="phone"
                        placeholder="123-456-789"
                        className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
                      />
                    )}
                  />
                </label>
              </div>

              <div className="mt-6">
                <label htmlFor="email">
                  <h5 className="font-bold">Tu correo electrónico</h5>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Necesitamos tu correo electrónico para poder confirmar tu pedido.",
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    }}
                    render={({ field }) => (
                      <input
                        type="text"
                        {...field}
                        id="email"
                        placeholder="correo@electronico.com"
                        className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-error font-medium italic ml-2">
                      {errors.email.message}
                    </p>
                  )}
                </label>
              </div>

              <div className="mt-6">
                <h5 className="font-bold mb-2">
                  Elige qué tipo de pan quieres:
                </h5>
                <div className="ml-4">
                  {["Classic", "Sesame", "Olives"].map((breadType) => (
                    <label key={breadType} htmlFor={breadType.toLowerCase()}>
                      <Controller
                        name={breadType.toLowerCase()}
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <input
                            type="checkbox"
                            {...field}
                            id={breadType.toLowerCase()}
                            value={breadType}
                            className="mt-2"
                          />
                        )}
                      />
                      Weho Sourdough {breadType} - €{getBreadPrice(breadType)}
                      <br />
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message">
                  <h5 className="font-bold">
                    Anota aquí cualquier indicación especial:
                  </h5>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <textarea
                        {...field}
                        id="message"
                        rows="3"
                        className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
                      />
                    )}
                  />
                  {errors.message && (
                    <p className="text-error font-medium italic ml-2">
                      {errors.message.message}
                    </p>
                  )}
                </label>
              </div>

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

function getBreadPrice(breadType) {
  // You may implement a logic to get the price based on the bread type
  // For now, returning a placeholder value
  return 7.5;
}
