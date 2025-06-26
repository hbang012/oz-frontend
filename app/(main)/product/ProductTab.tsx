'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { GnbItem } from '@/app/_lib/types/GnbItem';
import { useSearchParams } from 'next/navigation';

export default function ProductCategoryTabs() {
  const [tabs, setTabs] = useState<GnbItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/gnb')
      .then((res) => res.json())
      .then((json) => {
        const 제작소 = json.find((item: GnbItem) => item.label === '제작소');
        setTabs(제작소?.sub || []);
      });
  }, []);

  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <div className="w-full bg-white ">
      <ul
        className="max-w-[1200px] flex justify-center overflow-x-auto "
        style={{ margin: 'auto', gap: '6%', padding: '10px 10px' }}
      >
        {tabs.map((tab) => {
          const isActive = (() => {
            if (!tab.href || !currentCategory) return false;
            const params = new URLSearchParams(tab.href.split('?')[1]);
            return params.get('category') === currentCategory;
          })();

          return (
            <li key={tab.id}>
              {tab.href ? (
                <Link
                  href={tab.href ?? '/'}
                  className={`px-4 py-2 text-[18px] whitespace-nowrap rounded-full ${
                    isActive ? 'text-point1 font-bold' : 'hover:text-white'
                  }`}
                >
                  {tab.label}
                </Link>
              ) : (
                <span>{tab.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
