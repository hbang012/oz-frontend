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

  // 테일윈드 max-md 안먹힘, 대체
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <div className="w-full bg-white ">
      {isMobile && (
        <ul
          style={{
            display: 'flex',
            width: '100%',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            gap: '20px',
            padding: '8px',
          }}
        >
          {tabs.map((tab) => {
            const isActive = (() => {
              if (!tab.href || !currentCategory) return false;
              const params = new URLSearchParams(tab.href.split('?')[1]);
              return params.get('category') === currentCategory;
            })();

            return (
              <li key={tab.id} style={{ flex: '0 0 auto' }}>
                {tab.href ? (
                  <Link
                    href={tab.href ?? '/'}
                    className={`px-4 py-2 text-[15px] whitespace-nowrap rounded-full ${
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
      )}

      {isTablet && (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'start',
            gap: '3%',
            padding: '4px',
          }}
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
                    className={`px-4 py-2 text-[15px] whitespace-nowrap rounded-full ${
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
      )}

      {!isMobile && !isTablet && (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '6%',
            padding: '10px',
          }}
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
      )}
    </div>
  );
}
