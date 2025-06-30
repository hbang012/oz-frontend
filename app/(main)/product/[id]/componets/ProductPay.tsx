'use client';

import Estimate from '@/app/(main)/product/[id]/componets/Estimate';
import QuantitySelector from '@/app/(main)/product/[id]/componets/QuantitySelector';
import { PricingResult } from '@/app/_lib/types/PricingResult';
import { QtyTier } from '@/app/_lib/types/QtyTier';
import { Product } from '@/app/_lib/types/product';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface ProductPayProps {
  selectedOptions: Record<number, string>;
  deliveryMethod: string;
}

export default function ProductPay({
  selectedOptions,
  deliveryMethod,
}: ProductPayProps) {
  // 데이터
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  // 티어, 선택수량, 계산결과 상태 | 훅: 상태선언
  const [qtyTiers, setQtyTiers] = useState<QtyTier[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [pricing, setPricing] = useState<PricingResult | null>(null);

  // 1) 상품 상세 fetch
  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/product/${id}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(setProduct)
      .catch(() => setError(true));
  }, [id]);

  // 2) 수량 티어 fetch
  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/product/${id}/quantity-options`)
      .then((r) => r.json())
      .then((json) => setQtyTiers(json.tiers || []))
      .catch(console.error);
  }, [id]);

  // 수량 티어 기본값
  useEffect(() => {
    if (qtyTiers.length > 0) {
      const defaultQty = qtyTiers[0].minQty; // 제일 작은 수량
      onSelectQty(defaultQty);
    }
  }, [qtyTiers]);

  // 3) 수량 선택 시 계산 API
  const onSelectQty = async (qty: number) => {
    setQuantity(qty);
    try {
      const res = await fetch(`http://localhost:3001/product/${id}/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: qty }),
      });
      const data: PricingResult | { error: string } = await res.json();
      if ('error' in data) {
        console.warn('계산 API 에러:', data.error);
        return;
      }
      setPricing(data as PricingResult);
    } catch (e) {
      console.error('네트워크 에러:', e);
    }
  };

  if (error) return <p>상품을 불러오지 못했습니다.</p>;
  if (!product) return <p>로딩 중...</p>;

  return (
    <div className="flex flex-col">
      <ul className="flex flex-col gap-[25px]">
        <li
          className="flex flex-col gap-[15px] rounded-[12px] border"
          style={{
            padding: '32px 24px',
            background: '#fff',
            width: '100%',
            borderColor: '#6b59f6',
          }}
        >
          <p>
            여기에 별도문의 포장방법 배송방법 택배 같은 옵션 데이터 들어가야함
          </p>

          {/* 수량옵션 */}
          <QuantitySelector
            tiers={qtyTiers}
            selectedQty={quantity}
            onSelectQty={onSelectQty}
          />

          {/* 가격 */}
          <div className="flex" style={{ gap: '65px' }}>
            <p className="font-bold text-[14px] text-[#555]">가격</p>
            <p className="font-bold text-point1">{product.supply_price}원</p>
          </div>

          {/* 파일 업로드 */}
          <div className="flex items-center" style={{ gap: '10px' }}>
            <div
              className="text-[14px] text-[#555] font-bold"
              style={{ width: '100px' }}
            >
              디자인 파일
            </div>
            <div
              className="flex justify-center items-center w-full border border-[#d8d8d8] rounded-[8px]"
              style={{
                height: '46px',
                padding: '0px 16px',
                background: '#fff',
              }}
            >
              파일 업로드
            </div>
          </div>
        </li>
      </ul>
      {/* 다른 옵션 추가 버튼 */}
      <div style={{ padding: '22px 0px' }}>
        <button
          type="button"
          className="border rounded-[12px] text-[14px] "
          style={{
            padding: '22px 24px',
            background: '#fff',
            width: '100%',
            borderColor: '#6b59f6',
          }}
        >
          <p style={{ color: '#5749c7' }}>다른 옵션 추가</p>
        </button>
      </div>

      {/* 옵션 견적값 */}
      <Estimate pricing={pricing} />
    </div>
  );
}
