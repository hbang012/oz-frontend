'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductMenu({
  className,
  menus,
}: {
  className: string;
  menus: { label: string; href: string; sub?: any[] }[];
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={`${className} absolute left-0 top-[50px] bg-white border w-full p-[32px_35px_40px]`}
    >
      <ul className="border-r-1 border-[#d9d9d9] w-[220px] h-[456px] overflow-auto">
        {menus.map((item, index) => (
          <li
            key={item.label}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className="mb-[10px]"
          >
            <Link
              href={item.href}
              className="group flex items-center justify-between hover:font-bold hover:text-point1"
            >
              {item.label}
              <Image
                src={'/icons/keyboard_arrow.svg'}
                width={24}
                height={24}
                alt=""
                className="hidden group-hover:block"
              />
            </Link>
            <ul
              className={`absolute left-[238px] pl-[47px] top-[32px] ${
                active === index ? 'block' : 'hidden'
              }`}
            >
              {item.sub?.map((item) => (
                <li key={item.label} className="mb-[10px]">
                  <Link
                    href={item.href}
                    className="hover:text-point1 hover:font-bold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
