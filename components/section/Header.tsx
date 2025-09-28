import React, { memo } from 'react';

interface HeaderProps {
  header: string;
}

function Header({ header }: HeaderProps) {
  return <h1 className="text-3xl md:text-6xl font-bold mb-4">{header}</h1>;
}

export default memo(Header);
