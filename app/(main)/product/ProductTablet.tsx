'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/componets/Pagination';
import SideCategory from '@/app/(main)/product/SideCategory';
import SortBar from '@/app/(main)/product/SortBar';
import ProductCategoryTabs from '@/app/(main)/product/ProductTab';
import type { Product } from '@/app/_lib/types/product';

type SortKey =
  | 'DEFAULT'
  | 'POPULAR_DESC'
  | 'MINIMUM_PRICE_ASC'
  | 'MINIMUM_PRICE_DESC'
  | 'MINIMUM_QUANTITY_ASC'
  | 'MINIMUM_LEAD_TIME_ASC';

export default function ProductTablet() {
  const [data, setData] = useState<Product[] | null>(null);
  const [filtered, setFiltered] = useState<Product[]>([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const itemsPerPage = 16;

  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const [sortKey, setSortKey] = useState<SortKey>('DEFAULT');
  const sortParam = (searchParams.get('sort') as SortKey) ?? 'DEFAULT';

  useEffect(() => {
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (sortKey !== 'DEFAULT') params.set('sort', sortKey);

    fetch(`http://localhost:3001/product?${params.toString()}`)
      .then((res) => res.json())
      .then((list: Product[]) => {
        // currentCategory로 필터링
        const categoryNum = Number(currentCategory);
        const filteredList = currentCategory
          ? list.filter((item) =>
              [
                item.category_large_id,
                item.category_medium_id,
                item.category_small_id,
              ].includes(categoryNum)
            )
          : list;

        // 상태 업데이트
        setData(list);
        setFiltered(filteredList);
        setTotalPage(Math.ceil(filteredList.length / itemsPerPage));
        setPage(1);
      })
      .catch(console.error);
  }, [currentCategory, sortKey]);

  const startIndex = (page - 1) * itemsPerPage;
  const pagedData = filtered.slice(startIndex, startIndex + itemsPerPage);

  if (!data) return <p>로딩 중...</p>;

  return (
    <main
      className=""
      style={{
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div
        className="border-b-1 "
        style={{ padding: '100px 0px 10px 0px', borderColor: '#eee' }}
      >
        <ProductCategoryTabs />
      </div>

      <div className="flex">
        {/* 전체 아이템 */}
        <div style={{ width: '100%' }}>
          {/* 필터 옵션 */}
          <SortBar sort={sortKey} setSort={setSortKey} />

          <ul className="grid grid-cols-4 grid-rows-10" style={{ gap: '20px' }}>
            {pagedData?.map((product) => (
              <li key={product.product_id} className="relative">
                <Link href={`/product/${product.product_id}`}>
                  {/* 이미지 */}
                  <div
                    className="rounded-[16px] overflow-hidden"
                    style={{
                      height: '80%',
                      width: '100%',
                      background: '#f3efe9',
                    }}
                  >
                    {/* 북마크 */}
                    <span
                      className="absolute"
                      style={{ top: '6%', right: '7%' }}
                    >
                      <Image
                        src={'/icons/Bookmark.svg'}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </span>
                    <Image
                      src={`http://localhost:3001${product.image_url}`}
                      alt={product.name}
                      width={291}
                      height={291}
                      priority
                      sizes="291px"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>

                  {/* 태그 */}
                  <div className="absolute" style={{ top: '66%', left: '7%' }}>
                    <span
                      className=" rounded-[5px] text-white text-[13px] font-bold bg-point1"
                      style={{ padding: '5px 5px', marginRight: '5px' }}
                    >
                      {product.category_medium_name || '카테고리'}
                    </span>
                    <span
                      className=" rounded-[5px] text-[#777] text-[13px] font-bold bg-white"
                      style={{ padding: '5px 5px' }}
                    >
                      {product.quantity_range || '최소 0개'}
                    </span>
                  </div>

                  {/* 텍스트 */}
                  <div style={{ padding: '16px 14px' }}>
                    <h2 className="text-[16px] font-bold">{product.name}</h2>
                    <p className="text-[14px]">
                      최소{' '}
                      <span>
                        {product.supply_price
                          ? `${Number(
                              product.supply_price
                            ).toLocaleString()}원~`
                          : '1234원~'}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center" style={{ padding: '50px' }}>
        {data && totalPage > 0 && (
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        )}
      </div>
    </main>
  );
}
