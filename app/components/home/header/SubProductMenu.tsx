'use client';

import { useState } from 'react';
import type { GnbItem } from '@/app/_lib/types/GnbItem';
import Link from 'next/link';

export default function SubProductMenu({
  items,
  onClose,
}: {
  items: GnbItem[];
  onClose: () => void;
}) {
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null);

  const toggleDepth3 = (idx: number) => {
    setActiveSubItem((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="p-[25px] rounded bg-[#eee] w-[80%]">
      {items.length > 0 ? (
        <ul>
          {/* 추가한 내용 */}
          <li className="mb-2">
            <Link
              href={`/product?category=${items[0].parent_id}`}
              className="hover:text-point1"
            >
              전체보기
            </Link>
          </li>

          {items.map((item, idx) => (
            <li key={item.id} className="mb-2">
              {item.sub && item.sub.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleDepth3(idx)}
                    className="hover:font-bold flex items-center"
                  >
                    {item.label}
                    <img
                      src="/icons/gray_arrow.svg"
                      width={6}
                      height={6}
                      alt="토글"
                      className={`ml-[10px] mt-[5px] ${
                        activeSubItem === idx ? 'rotate-270' : 'rotate-90'
                      } mb-[10px]`}
                    />
                  </button>

                  {activeSubItem === idx && (
                    <ul className="ml-4 mt-2">
                      {item.sub.map((sub) => (
                        <li key={sub.id} className="mb-2">
                          <Link
                            href={sub.href ?? ''}
                            className="hover:text-point1"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href ?? ''} className="hover:text-point1">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">해당 카테고리에는 하위 메뉴가 없습니다.</p>
      )}
    </div>
  );
}
