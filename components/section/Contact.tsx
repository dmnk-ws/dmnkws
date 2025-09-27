import React from 'react';
import ContactForm from '@/components/form/ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] py-8"
    >
      <h1 className="text-4xl mb-2 text-center">Let&apos;s get in touch.</h1>
      <h3 className="text-xl mb-20 text-center">
        You have a question, proposal or simply want to say hello? Just go ahead.
      </h3>
      <ContactForm />
    </section>
  );
}
