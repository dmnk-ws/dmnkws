'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const textStyle =
    pathname === href
      ? 'text-white'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <li className="p-3">
      <Link className={`${textStyle} rounded-md px-3 py-2`} href={href}>
        {label}
      </Link>
    </li>
  );
}
