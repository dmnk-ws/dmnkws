'use server';

import { Resend } from 'resend';
import Template from '@/components/email/Template';
import { validateContactForm, type ContactFormErrors } from '@/lib/validations/contact';

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.RESEND_TO;
const from = process.env.RESEND_FROM;

export type ContactFormState = {
  success?: boolean;
  errors?: ContactFormErrors;
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = {
    name: (formData.get('name') as string) || '',
    emailAddress: (formData.get('email') as string) || '',
    subject: (formData.get('subject') as string) || '',
    message: (formData.get('message') as string) || '',
  };

  const validation = validateContactForm(data);

  if (!validation.isValid) {
    return {
      errors: validation.errors,
    };
  }

  if (!to || !from) {
    return {
      errors: {
        form: 'Failed to send email. Please try again.',
      },
    };
  }

  try {
    const { name, emailAddress, subject, message } = data;

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Contact Form: ${subject}`,
      react: Template({ name, emailAddress, subject, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        errors: {
          form: 'Failed to send email. Please try again.',
        },
      };
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Server action error:', error);
    return {
      errors: {
        form: 'An unexpected error occurred. Please try again.',
      },
    };
  }
}
