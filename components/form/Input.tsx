import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function Input({
  label,
  value,
  onChange,
  name,
  type,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-b-2 focus:border-b-blue-500"
        placeholder={placeholder ?? label}
      />
    </div>
  );
}
