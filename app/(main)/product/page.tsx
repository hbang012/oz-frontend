'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/componets/Pagination';
import type { Product } from '@/app/_lib/types/product';
import ProductCategoryTabs from '@/app/(main)/product/ProductTab';
import { useSearchParams } from 'next/navigation';
import SideCategory from '@/app/(main)/product/SideCategory';

export default function ProductPage() {
  const [data, setData] = useState<Product[] | null>(null);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const itemsPerPage = 10;

  // 전체 아이템 갯수
  const itemCount = filtered.length;

  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  useEffect(() => {
    fetch('http://localhost:3001/product')
      .then((res) => res.json())
      .then((json: Product[]) => {
        setData(json);

        if (!currentCategory) {
          setFiltered(json);
        } else {
          const categoryNum = Number(currentCategory);
          const filteredItems = json.filter((item) =>
            [
              item.category_large_id,
              item.category_medium_id,
              item.category_small_id,
            ].includes(categoryNum)
          );
          setFiltered(filteredItems);
        }

        setPage(1);
        setTotalPage(Math.ceil(json.length / itemsPerPage));
      });
  }, [currentCategory]);

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
        {currentCategory && (
          <div className="flex gap-[40px] mt-[40px]">
            <SideCategory />
          </div>
        )}

        {/* 전체 아이템 */}
        <div>
          {/* 옵션 */}
          <div
            className="flex"
            style={{
              padding: '20px 0px 30px 0px',
              justifyContent: 'space-between',
            }}
          >
            <p className="text-[12px] text-[#626262]">
              전체 <span style={{ margin: '0px 5px' }}>{itemCount}</span>
            </p>
            <button type="button" className="border-0">
              <p className="text-[14px] text-[#000]">기본순</p>
            </button>
          </div>

          <ul className="grid grid-cols-4 grid-rows-5" style={{ gap: '20px' }}>
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
