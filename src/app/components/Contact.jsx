import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LightVanta from './LightVanta';
import DarkVanta from './DarkVanta';
import sendEmail from '@/utils/sendEmail';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';


const validationSchema = Yup.object({
  nombre: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mensaje: Yup.string().required('Message is required'),
});

const Contact = () => {

  const { isDarkMode } = useTheme();

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
    <section id="contact" className="mt-10 relative flex items-center justify-center h-lvh  text-center py-40 text-white">
        {isDarkMode ? <DarkVanta /> : <LightVanta />}
      <div className="relative mx-4 max-w-4xl md:mx-auto backdrop-blur-xl bg-black/10 p-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-6 title text-white">Contact</h2>
        <p className=" text-lg md:text-xl mb-8 sans">Are you interested in working together? Get in touch!</p>

        <Formik
          initialValues={{ nombre: '', email: '', mensaje: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="flex flex-col gap-4">

              <div>
                <Field
                  type="text"
                  name="nombre"
                  placeholder="Name"
                  className="p-3 w-4/5 md:w-2/3 rounded-lg bg-white/10 text-gray-700 placeholder-white"
                />
                <ErrorMessage name="nombre" component="p" className="text-red-900 text-base" />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="p-3 w-4/5 md:w-2/3 rounded-lg bg-white/10  text-gray-700 placeholder-white"
                />
                <ErrorMessage name="email" component="p" className="text-red-900 text-base" />
              </div>

              {/* Textarea Mensaje */}
              <div>
                <Field
                  as="textarea"
                  name="mensaje"
                  placeholder="Message"
                  className="p-3 w-4/5 md:w-2/3 rounded-lg bg-white/10 text-gray-700 placeholder-white"
                />
                <ErrorMessage name="mensaje" component="p" className="text-red-900 text-base" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className={`btn text-lg md:text-xl self-center ${isSubmitting || !isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="absolute bottom-0 right-0 flex space-x-6 p-6 icon-social">
        <a href="https://wa.me/5491178865748?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
          <Image src="/wp.png" alt="Icono whatsapp" width={48} height={48} className="w-16 h-16 cursor-pointer hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/mayra-cortinez-/" target="_blank" rel="noopener noreferrer">
          <Image src="/in.png" alt="Icono linkedin" width={48} height={48} className="w-16 h-16 cursor-pointer hover:scale-110" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
