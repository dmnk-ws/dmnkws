'use client';

import React, { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';
import Input from '@/components/form/Input';
import Textarea from '@/components/form/Textarea';
import ErrorMessage from '@/components/form/ErrorMessage';
import FormMessage from '@/components/form/FormMessage';
import { useTranslation } from '@/context/TranslationContext';

const initialState: ContactFormState = {};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center mx-0 lg:mx-25 xl:mx-50">
      <form action={formAction} className="space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              label={t('name')}
              name="name"
              type="text"
              placeholder={t('placeholderName')}
              autoComplete="name"
            />
            <ErrorMessage message={state.errors?.name} />
          </div>
          <div>
            <Input
              label={t('email')}
              name="email"
              type="email"
              placeholder={t('placeholderEmail')}
              autoComplete="email"
            />
            <ErrorMessage message={state.errors?.emailAddress} />
          </div>
        </div>
        <div>
          <Input
            label={t('subject')}
            name="subject"
            type="text"
            placeholder={t('placeholderSubject')}
            autoComplete="off"
          />
          <ErrorMessage message={state.errors?.subject} />
        </div>
        <div>
          <Textarea
            label={t('message')}
            name="message"
            placeholder={t('placeholderMessage')}
          />
          <ErrorMessage message={state.errors?.message} />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={pending}
            className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-indigo-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
          >
            {pending ? t('sending') : t('send')}
          </button>
        </div>
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
