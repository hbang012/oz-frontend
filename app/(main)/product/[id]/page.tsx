'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { Product } from '@/app/_lib/types/product';
import ProductImg from '@/app/(main)/product/[id]/componets/ProductImg';
import ProdutOptions from '@/app/(main)/product/[id]/componets/ProdutOptions';
import ProductPay from '@/app/(main)/product/[id]/componets/ProductPay';
import ProdutInfo from '@/app/(main)/product/[id]/componets/ProdutInfo';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/product/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setProduct(json))
      .catch((err) => {
        console.error('상세 조회 실패:', err);
        setError(true);
      });
  }, [id]);

  if (error) return <p>상품을 불러오지 못했습니다.</p>;
  if (!product) return <p>로딩 중...</p>;

  return (
    <main
      className="pt-[100px] max-w-[1200px] mx-auto max-sm:pt-[60px]"
      style={{ paddingLeft: '30px', paddingRight: '30px' }}
    >
      {/* 텍스트 */}
      <div
        className="flex flex-col border-b-1 border-[#d8d8d8]"
        style={{ padding: '50px 0px 28px 0px', margin: '0px 0px 22px 0px' }}
      >
        <span
          className=" h-[32px] rounded-[8px] text-[16px] text-white"
          style={{
            background: '#918FEF',
            width: 'fit-content',
            padding: '4px 8px',
          }}
        >
          {product.category_medium_name}
        </span>
        <h2
          className="font-bold pt-[8px] text-black"
          style={{ fontSize: '40px' }}
        >
          {product.name}
        </h2>
        <p>{product.description}</p>
      </div>

      <div className="flex" style={{ gap: '30px' }}>
        <div>
          <ProductImg />

          {/* 아이템별 옵션 */}
          <ProdutOptions />
        </div>

        {/* 아이템별 구매 */}
        <ProductPay />
      </div>

      <div>
        <ProdutInfo />
      </div>
    </main>
  );
}
