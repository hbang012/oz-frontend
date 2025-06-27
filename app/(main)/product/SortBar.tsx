'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Product } from '@/app/_lib/types/product';
import Image from 'next/image';

type SortKey =
  | 'DEFAULT'
  | 'POPULAR_DESC'
  | 'MINIMUM_PRICE_ASC'
  | 'MINIMUM_PRICE_DESC'
  | 'MINIMUM_QUANTITY_ASC'
  | 'MINIMUM_LEAD_TIME_ASC';

interface SortBarProps {
  sort: SortKey;
  setSort: Dispatch<SetStateAction<SortKey>>;
}

export default function SortBar({ sort, setSort }: SortBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const [filtered, setFiltered] = useState<Product[]>([]);

  // 상태
  const [items, setItems] = useState<Product[]>([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (sort !== 'DEFAULT') params.set('sort', sort);

    fetch(`http://localhost:3001/product?${params.toString()}`)
      .then((res) => res.json())
      .then((list: Product[]) => {
        // 카테고리 필터
        const n = Number(currentCategory);
        const filtered = currentCategory
          ? list.filter((p) =>
              [
                p.category_large_id,
                p.category_medium_id,
                p.category_small_id,
              ].includes(n)
            )
          : list;
        setItems(filtered);
        setFiltered(filtered);
      })
      .catch(console.error);
  }, [currentCategory, sort]);

  const itemCount = filtered.length;

  const [hover, setHover] = useState(false);

  const labels: Record<SortKey, string> = {
    DEFAULT: '기본순',
    POPULAR_DESC: '인기순',
    MINIMUM_PRICE_ASC: '가격 낮은순',
    MINIMUM_PRICE_DESC: '가격 높은순',
    MINIMUM_QUANTITY_ASC: '최소수량 적은순',
    MINIMUM_LEAD_TIME_ASC: '제작기간 빠른순',
  };

  const handleSort = (value: SortKey) => {
    setShowList(false);
    setSort(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className="flex justify-between items-center"
      style={{ padding: '20px 0 30px', width: '100%' }}
    >
      <p className="text-[12px] text-[#626262]">
        전체 <span style={{ margin: '0px 5px' }}>{itemCount}</span>
      </p>

      <div className="relative">
        <button
          type="button"
          onClick={() => setShowList((v) => !v)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: '8px 12px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: hover ? '#f0f0f0' : 'transparent',
          }}
        >
          <span className="flex">
            <p className="text-[14px] text-[#000]">{labels[sort]}</p>
            <Image
              src={'/icons/keyboard_arrow.svg'}
              width={20}
              height={20}
              alt=""
              style={{
                transform: showList ? 'rotate(270deg)' : 'rotate(90deg)',
              }}
            />
          </span>
        </button>

        {showList && (
          <ul
            className="absolute z-10 border bg-white rounded-[10px]"
            style={{ padding: '10px 10px', top: '120%', right: '0' }}
          >
            {Object.entries(labels).map(([key, label]) => (
              <li
                key={key}
                onClick={() => handleSort(key as SortKey)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f4ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                style={{
                  width: '126px',
                  transition: 'background-color 0.2s ease-in-out',
                }}
                className="w-[126px]"
              >
                <button
                  type="button"
                  className=" hover:text-point1 hover:font-bold"
                  style={{ padding: '8px' }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
