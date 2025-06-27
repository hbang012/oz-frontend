'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import type { GnbItem } from '@/app/_lib/types/GnbItem';
import Image from 'next/image';

export default function SideCategory() {
  const [mediumTabs, setMediumTabs] = useState<GnbItem[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedMedium, setSelectedMedium] = useState<number | null>(null);

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
            if (medium.id == categoryId) return medium.id;

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

        const autoSelect =
          mediumList.find(
            (m) =>
              !(m.sub && m.sub.length > 0) &&
              getCategoryValue(m.href) === categoryId
          )?.id ?? null;
        setSelectedMedium(autoSelect);
      });
  }, [categoryId]);

  return (
    <aside
      className="w-[220px] border-r-1 "
      style={{ paddingRight: '36px', marginRight: '52px', borderColor: '#eee' }}
    >
      <ul className="flex flex-col" style={{ gap: '10px' }}>
        {mediumTabs.map((medium) => {
          const isExpanded = medium.id === expandedId;
          const hasChildren = medium.sub && medium.sub.length > 0;

          return (
            <li key={medium.id}>
              {/* 중분류 탭 */}
              {hasChildren ? (
                <button
                  onClick={() => {
                    setExpandedId(isExpanded ? null : medium.id);
                    setSelectedMedium(null);
                  }}
                  className={`
            flex items-center justify-between w-full text-left
            px-3 py-2 rounded-md text-[15px] font-semibold
            ${isExpanded ? 'text-point1 font-bold' : 'text-[#000]'}
          `}
                >
                  <span>{medium.label}</span>
                  <Image
                    src="/icons/keyboard_arrow.svg"
                    width={16}
                    height={16}
                    alt="toggle arrow"
                    style={{
                      transform: isExpanded
                        ? 'rotate(270deg)'
                        : 'rotate(90deg)',
                    }}
                  />
                </button>
              ) : (
                /* 하위없음 중분류 */
                <Link
                  href={medium.href ?? '/product'}
                  onClick={() => setSelectedMedium(medium.id)}
                  className={`
            block w-full text-left px-3 py-2 rounded-md text-[15px]
            ${
              selectedMedium === medium.id
                ? 'text-point1 font-bold'
                : 'text-[#000]'
            }
          `}
                >
                  {medium.label}
                </Link>
              )}

              {/* 중분류 하위: 소분류들 */}
              {hasChildren &&
                isExpanded &&
                medium.sub &&
                medium.sub.length > 0 && (
                  <ul
                    className="flex flex-col"
                    style={{ gap: '10px', padding: '20px 0px 20px 40px' }}
                  >
                    {medium.sub.map((small) => {
                      const isSmallActive =
                        isExpanded &&
                        getCategoryValue(small.href) === categoryId;

                      return (
                        <li key={small.id}>
                          <Link
                            href={small.href ?? '/product'}
                            className={`block text-[14px] px-2 py-1 rounded-md ${
                              isSmallActive ? 'text-point1 font-bold' : ' '
                            }`}
                          >
                            {small.label}
                          </Link>

                          {/* 소분류 하위 */}
                          {small.sub && small.sub.length > 0 && (
                            <ul
                              className="pl-4 mt-1 flex flex-col"
                              style={{ gap: '20px' }}
                            >
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
                                          : ' '
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
