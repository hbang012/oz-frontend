'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/forgot-password', label: 'Forgot Password' },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState('');
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div>
      <ul className="flex gap-x-[10px] p-[30px] pb-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? 'text-point1' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
