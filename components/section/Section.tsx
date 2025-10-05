import React, { ReactNode } from 'react';

export type Sections = 'home' | 'about' | 'portfolio' | 'contact';

interface SectionProps {
  id: Sections;
  children?: ReactNode;
  grid?: boolean;
}

export default function Section({ id, children, grid = false }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] py-16 flex flex-col"
    >
      {grid ? (
        children
      ) : (
        <div className="flex flex-col justify-center flex-1">{children}</div>
      )}
    </section>
  );
}
