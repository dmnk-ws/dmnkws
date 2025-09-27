import { Email } from '@/components/email/Template';

export interface ContactFormErrors extends Partial<Email> {
  form?: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: ContactFormErrors;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(data: Email): ValidationResult {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required';
  } else if (data.name.length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }

  if (!data.emailAddress || data.emailAddress.trim().length === 0) {
    errors.emailAddress = 'Email is required';
  } else if (!validateEmail(data.emailAddress)) {
    errors.emailAddress = 'Please enter a valid email address';
  }

  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = 'Subject is required';
  } else if (data.subject.length > 200) {
    errors.subject = 'Subject must be less than 200 characters';
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (data.message.length > 2000) {
    errors.message = 'Message must be less than 2000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
