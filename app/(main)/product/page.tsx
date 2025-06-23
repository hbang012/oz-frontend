'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Gnb from '@/app/componets/home/header/Gnb';

type Product = {
  product_id: number;
  name: string;
  image_url: string;
  created_at: string;
  price?: number;
  quantity_range: string; // 최소 수량
  supply_price: string; // 최소 단가
  category_large_name: string;
  category_medium_name: string; // 중분류 "인형"
  category_small_name: string;
};

export default function ProductPage() {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/product')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>로딩 중...</p>;

  return (
    <main
      className=""
      style={{
        paddingTop: '200px',
        maxWidth: '1200px',
        height: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {/* 옵션 */}
      <div className="flex justify-between" style={{ paddingBottom: '30px' }}>
        <p className="text-[12px] text-[#626262]">전체</p>
        <button type="button" className="border-0">
          <p className="text-[14px] text-[#000]">기본순</p>
        </button>
      </div>

      {/* 전체 아이템 */}
      <ul className="grid grid-cols-4 grid-rows-5" style={{ gap: '20px' }}>
        {data.map((product) => (
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
                      ? `${Number(product.supply_price).toLocaleString()}원~`
                      : '1234원~'}
                  </span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
