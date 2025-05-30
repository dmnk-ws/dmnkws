import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconProp;
  href: string;
}

export default function Icon({ href, icon }: IconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center w-20 h-20 rounded-full hover:bg-white transition duration-300 group mx-2"
    >
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        fixedWidth
        className="group-hover:text-black transition duration-300"
        color="white"
      />
    </a>
  );
}
