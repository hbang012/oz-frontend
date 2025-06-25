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
        const topMenus = 제작소?.sub || [];

        const getCategoryValue = (href?: string | null): number | null => {
          if (!href) return null;
          const params = new URLSearchParams(href.split('?')[1]);
          const value = params.get('category');
          return value ? Number(value) : null;
        };

        let selectedTop: GnbItem | null = null;

        // 단계별로 탐색
        outer: for (const top of topMenus) {
          const topCat = getCategoryValue(top.href);
          if (topCat === categoryId) {
            selectedTop = top;
            break;
          }

          if (top.sub) {
            for (const mid of top.sub) {
              const midCat = getCategoryValue(mid.href);
              if (midCat === categoryId) {
                selectedTop = top;
                break outer;
              }

              if (mid.sub) {
                for (const small of mid.sub) {
                  const smallCat = getCategoryValue(small.href);
                  if (smallCat === categoryId) {
                    selectedTop = top;
                    break outer;
                  }
                }
              }
            }
          }

          if (selectedTop) break;
        }

        const mediumList = selectedTop?.sub || [];
        const findExpandedId = (
          items: GnbItem[],
          categoryId: number | null
        ): number | null => {
          for (const medium of items) {
            if (medium.id == categoryId) return medium.id; // loose equality OK

            if (medium.sub) {
              for (const small of medium.sub) {
                if (getCategoryValue(small.href) == categoryId)
                  return medium.id;

                if (small.sub) {
                  for (const leaf of small.sub) {
                    if (getCategoryValue(leaf.href) == categoryId)
                      return medium.id;
                  }
                }
              }
            }
          }
          return null;
        };

        const expandedFromSub = findExpandedId(mediumList, categoryId);

        setMediumTabs(mediumList);
        setExpandedId(expandedFromSub);

        console.log(
          '✅ selectedTop.sub IDs:',
          mediumList.map((m) => m.id)
        );
        for (const medium of mediumList) {
          console.log(
            '🔍 compare medium.id vs categoryId',
            medium.id,
            categoryId
          );
        }
      });
  }, [categoryId]);

  return (
    <aside className="w-[220px]">
      <ul className="flex flex-col gap-2">
        {mediumTabs.map((medium) => {
          const isExpanded = medium.id === expandedId;

          return (
            <li key={medium.id}>
              {/* 중분류 탭 */}
              <Link
                href={medium.href ?? '/product'}
                onClick={() => setExpandedId(isExpanded ? null : medium.id)}
                className={`w-full block text-left px-3 py-2 rounded-md text-[15px] font-semibold ${
                  isExpanded ? 'bg-point1 text-white' : 'hover:text-point1'
                }`}
              >
                {medium.label}
              </Link>

              {/* 중분류 하위: 소분류들 */}
              {isExpanded && medium.sub && (
                <ul className="pl-4 mt-1 flex flex-col gap-1">
                  {medium.sub.map((small) => {
                    const isSmallActive =
                      isExpanded && getCategoryValue(small.href) === categoryId;

                    return (
                      <li key={small.id}>
                        <Link
                          href={small.href ?? '/product'}
                          className={`block text-[14px] px-2 py-1 rounded-md ${
                            isSmallActive
                              ? 'text-point1 font-bold'
                              : 'hover:text-point1'
                          }`}
                        >
                          {small.label}
                        </Link>

                        {/* 소분류 하위: 리프 노드 (있을 경우) */}
                        {small.sub && small.sub.length > 0 && (
                          <ul className="pl-4 mt-1 flex flex-col gap-1">
                            {small.sub.map((leaf) => {
                              const isLeafActive =
                                isExpanded &&
                                getCategoryValue(leaf.href) === categoryId;

                              return (
                                <li key={leaf.id}>
                                  <Link
                                    href={leaf.href ?? '/product'}
                                    className={`block text-[13px] px-2 py-1 rounded-md ${
                                      isLeafActive
                                        ? 'text-point1 font-bold'
                                        : 'hover:text-point1'
                                    }`}
                                  >
                                    {leaf.label}
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
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
