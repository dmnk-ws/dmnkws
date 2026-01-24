'use client';

import React, { useEffect, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FormMessageProps {
  type: 'success' | 'error';
  message?: string | null;
}

export default function FormMessage({ message, type }: FormMessageProps) {
  const [isVisible, setIsVisible] = useState(true);
  const typeClasses =
    type === 'success'
      ? 'bg-green-100 border-green-400 text-green-700'
      : 'bg-red-100 border-red-400 text-red-700';

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!message || !isVisible) return null;

  return (
    <div
      className={`${typeClasses} p-4 border rounded-md relative transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          type="button"
          className="ml-4 text-lg font-bold hover:opacity-60 transition-opacity cursor-pointer"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faXmark} className="size-6" />
        </button>
      </div>
    </div>
  );
}
