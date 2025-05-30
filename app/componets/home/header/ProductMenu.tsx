'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProductMenu({
  className,
  menus,
}: {
  className: string;
  menus: { label: string; href: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <div
      className={`${className} absolute left-0 top-[50px] bg-white border w-full p-[30px]`}
    >
      <ul>
        {menus.map((item) => (
          <li
            key={item.label}
            onMouseEnter={() => setActive(null)}
            onMouseLeave={() => setActive(null)}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
