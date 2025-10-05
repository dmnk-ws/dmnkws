import React from 'react';
import ContactForm from '@/components/form/ContactForm';
import Section from '@/components/section/Section';

export default function Contact() {
  return (
    <Section id="contact">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center">
        Let&apos;s get in touch.
      </h1>
      <h2 className="text-xl mb-10 lg:mb-20 text-center">
        You have a question, proposal or simply want to say hello? Just go ahead.
      </h2>
      <ContactForm />
    </Section>
  );
}
