'use client';

import Link from 'next/link';

export default function ProductMenu({
  className,
  menus,
}: {
  className: string;
  menus: { label: string; href: string }[];
}) {
  return (
    <div
      className={`${className} absolute left-0 top-[50px] bg-white border w-full p-[30px]`}
    >
      <ul>
        {menus.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
