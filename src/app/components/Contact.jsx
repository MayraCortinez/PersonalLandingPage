import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import VantaBackground from './VantaBackground';
import sendEmail from '@/utils/sendEmail';
import toast from 'react-hot-toast';

// Validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mensaje: Yup.string().required('Message is required'),
});

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    sendEmail(values)
      .then(() => {
        toast.success('Thanks for your email!');
        resetForm();
      })
      .catch((error) => {
        toast.error('Error sending email');
        console.error('Error:', error);
      });
  };

  return (
    <section id="contact" className="relative flex items-center justify-center min-h-screen py-20 text-center text-white">
      <VantaBackground />
      <div className="relative mx-4 max-w-4xl md:mx-auto bg-black/30 p-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-6 sans">Contact</h2>
        <p className="text-2xl mb-6 sans">Are you interested in working together? Get in touch!</p>

        <Formik
          initialValues={{ nombre: '', email: '', mensaje: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="flex flex-col gap-4">
              {/* Input Nombre */}
              <div>
                <Field
                  type="text"
                  name="nombre"
                  placeholder="Name"
                  className="p-3 md:px-16 rounded-lg bg-gray-700/60 text-white"
                />
                <ErrorMessage name="nombre" component="p" className="text-red-200 text-sm" />
              </div>

              {/* Input Email */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="p-3 md:px-16 rounded-lg bg-gray-700/60 text-white"
                />
                <ErrorMessage name="email" component="p" className="text-red-200 text-sm" />
              </div>

              {/* Textarea Mensaje */}
              <div>
                <Field
                  as="textarea"
                  name="mensaje"
                  placeholder="Message"
                  className="p-3 md:px-16 rounded-lg bg-gray-700/60 text-white"
                />
                <ErrorMessage name="mensaje" component="p" className="text-red-200 text-sm" />
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className={`btn self-center ${isSubmitting || !isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
