'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Product } from '@/app/_lib/types/product';

type SortKey =
  | 'default'
  | 'popular'
  | 'price_asc'
  | 'price_desc'
  | 'qty_asc'
  | 'time_asc';

interface SortBarProps {
  sort: SortKey;
  setSort: Dispatch<SetStateAction<SortKey>>;
}

export default function SortBar({ sort, setSort }: SortBarProps) {
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;

  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  useEffect(() => {
    fetch('http://localhost:3001/product')
      .then((res) => res.json())
      .then((json: Product[]) => {
        const categoryNum = Number(currentCategory);
        const filteredItems = !currentCategory
          ? json
          : json.filter((item) =>
              [
                item.category_large_id,
                item.category_medium_id,
                item.category_small_id,
              ].includes(categoryNum)
            );

        setFiltered(filteredItems);
        setPage(1);
      });
  }, [currentCategory]);

  const itemCount = filtered.length;

  const labels: Record<SortKey, string> = {
    default: '기본순',
    popular: '인기순',
    price_asc: '가격 낮은순',
    price_desc: '가격 높은순',
    qty_asc: '최소수량 적은순',
    time_asc: '제작기간 빠른순',
  };

  return (
    <div
      className="flex justify-between items-center"
      style={{ padding: '20px 0 30px', width: '100%' }}
    >
      <p className="text-[12px] text-[#626262]">
        전체 <span style={{ margin: '0px 5px' }}>{itemCount}</span>
      </p>
      <button type="button" className="border-0">
        <p className="text-[14px] text-[#000]">기본순</p>
      </button>
    </div>
  );
}
