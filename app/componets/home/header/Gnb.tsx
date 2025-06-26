'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProductMenu from './ProductMenu';
import type { GnbItem } from '@/app/_lib/types/GnbItem';

export default function Gnb() {
  const [active, setActive] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const pathname = usePathname();
  const isProductPage = pathname?.startsWith('/product');

  const [menuData, setMenuData] = useState<GnbItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/gnb')
      .then((res) => res.json())
      .then((data: GnbItem[]) => {
        setMenuData(data);
      })
      .catch((err) => {
        console.error('GNB 로딩 실패', err);
      });
  }, []);

  if (menuData.length === 0) return null;

  return (
    <nav className="max-md:hidden">
      <ul className="flex items-center gap-[8px] text-[18px] text-[#626262]">
        {menuData.map((item, index) => (
          <li
            key={item.id}
            className={`${
              index === 3 ? 'relative' : ''
            } flex items-center h-[85px]`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            {/* 1depth */}
            <Link
              href={item.href || ''}
              className="p-[6px_12px_7px] hover:bg-point1 hover:rounded-[20px] hover:text-[#fff]"
            >
              {item.label}
            </Link>

            {/* 2depth */}
            {item.sub && item.sub.length > 0 && (
              <ul
                className={`${
                  active === index && !isProductPage ? 'block' : 'hidden'
                } absolute left-1/2 top-[85px] -translate-x-1/2 ${
                  index === 2
                    ? 'flex justify-between max-w-[1200px] w-full h-[52px] bg-white border-b-1 border-[#eee]'
                    : ''
                } ${
                  index === 3
                    ? 'flex gap-x-[10px] whitespace-nowrap p-[16px] pr-[41px] border-[#eee] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] rounded-[8px] bg-white border'
                    : ''
                } ${active === index ? 'block' : 'hidden'}`}
              >
                {item.sub.map((subItem, i) => (
                  <li
                    key={subItem.id ?? i}
                    className="w-full p-[10px_0_0_30px]"
                    onMouseEnter={() => setActiveProduct(i)}
                    onMouseLeave={() => setActiveProduct(null)}
                  >
                    <Link
                      href={subItem.href ?? '/'}
                      className="block h-[40px] text-center hover:text-point1 hover:font-bold"
                    >
                      {subItem.label}
                    </Link>

                    {/* 3depth: 인덱스 2일 때만 ProductMenu */}
                    {index === 2 && (
                      <ProductMenu
                        className={activeProduct === i ? 'block' : 'hidden'}
                        menus={subItem.sub ?? []}
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
