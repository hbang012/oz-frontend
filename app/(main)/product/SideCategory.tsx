'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import type { GnbItem } from '@/app/_lib/types/GnbItem';

export default function SideCategory() {
  const [mediumTabs, setMediumTabs] = useState<GnbItem[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const categoryId = currentCategory ? Number(currentCategory) : null;

  const getCategoryValue = (href?: string | null): number | null => {
    if (!href) return null;
    const params = new URLSearchParams(href.split('?')[1]);
    const value = params.get('category');
    return value ? Number(value) : null;
  };

  useEffect(() => {
    fetch('http://localhost:3001/gnb')
      .then((res) => res.json())
      .then((json: GnbItem[]) => {
        const 제작소 = json.find((item) => item.label === '제작소');
        const mediumList = 제작소?.sub || [];

        // 전체 메뉴를 펼쳐서 현재 선택된 카테고리 위치 파악
        const findExpandedId = (
          items: GnbItem[],
          categoryId: number | null
        ): number | null => {
          for (const medium of items) {
            const mediumCat = getCategoryValue(medium.href);
            if (mediumCat === categoryId) return medium.id;

            if (medium.sub) {
              for (const small of medium.sub) {
                const smallCat = getCategoryValue(small.href);
                if (smallCat === categoryId) return medium.id;

                if (small.sub) {
                  for (const deep of small.sub) {
                    const deepCat = getCategoryValue(deep.href);
                    if (deepCat === categoryId) return small.id;
                  }
                }
              }
            }
          }
          return null;
        };

        const selectedId = findExpandedId(mediumList, categoryId);
        setExpandedId(selectedId);
        setMediumTabs(mediumList);

        console.log('🔥 expandedId:', selectedId);
        console.log('🧩 currentCategory:', currentCategory);
      });
  }, [currentCategory]);

  return (
    <aside className="w-[220px]">
      <ul className="flex flex-col gap-2">
        {mediumTabs.map((medium) => {
          const isExpanded = medium.id === expandedId;

          return (
            <li key={medium.id}>
              {/* 중분류 탭 */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : medium.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-[15px] font-semibold ${
                  isExpanded ? 'bg-point1 text-white' : 'hover:text-point1'
                }`}
              >
                {medium.label}
              </button>

              {/* 소분류 목록 (있을 경우) */}
              {isExpanded && medium.sub && (
                <ul className="pl-4 mt-1 flex flex-col gap-1">
                  {medium.sub.map((small) => {
                    const isActive =
                      getCategoryValue(small.href) === categoryId;

                    return (
                      <li key={small.id}>
                        <Link
                          href={small.href ?? '/product'}
                          className={`block text-[14px] px-2 py-1 rounded-md ${
                            isActive
                              ? 'text-point1 font-bold'
                              : 'hover:text-point1'
                          }`}
                        >
                          {small.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
