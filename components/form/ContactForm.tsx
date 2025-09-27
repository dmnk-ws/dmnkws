'use client';

import React, { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';
import Input from '@/components/form/Input';
import Textarea from '@/components/form/Textarea';
import ErrorMessage from '@/components/form/ErrorMessage';
import FormMessage from '@/components/form/FormMessage';

const initialState: ContactFormState = {};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <div className="max-w-2xl mx-auto">
      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input label="Name" name="name" type="text" placeholder="Your name..." />
            <ErrorMessage message={state.errors?.name} />
          </div>
          <div>
            <Input
              label="E-Mail"
              name="email"
              type="email"
              placeholder="Your email..."
            />
            <ErrorMessage message={state.errors?.emailAddress} />
          </div>
        </div>
        <div>
          <Input
            label="Subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
          />
          <ErrorMessage message={state.errors?.subject} />
        </div>
        <div>
          <Textarea label="Message" name="message" placeholder="Your message..." />
          <ErrorMessage message={state.errors?.message} />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-indigo-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
        >
          {pending ? 'Sending...' : 'Send'}
        </button>
        <FormMessage
          key={state.errors?.form ? `error-${Date.now()}` : 'error'}
          message={state.errors?.form}
          type="error"
        />
        <FormMessage
          key={state.success ? `success-${Date.now()}` : 'success'}
          message={state.success ? state.message : null}
          type="success"
        />
      </form>
    </div>
  );
}
