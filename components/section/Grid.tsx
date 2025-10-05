import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1 items-center">
      {children}
    </div>
  );
}
