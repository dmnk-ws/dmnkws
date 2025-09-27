import React from 'react';

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
}

export default function Textarea({ label, name, placeholder }: TextareaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required
        rows={6}
        className="w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-b-2 focus:border-b-blue-500"
        placeholder={placeholder ?? label}
      />
    </div>
  );
}
