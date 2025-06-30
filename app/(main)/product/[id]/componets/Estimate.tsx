'use client';

import { PricingResult } from '@/app/_lib/types/PricingResult';
import Image from 'next/image';

interface Props {
  pricing: PricingResult | null;
}

export default function Estimate({ pricing }: Props) {
  if (!pricing || typeof pricing.total !== 'number') return null;

  return (
    <div>
      <div
        className="sticky top-[100px] rounded-[20px]"
        style={{
          padding: '32px 24px',
          background: '#fff',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 10px 0px',
        }}
      >
        {/* 총 결제 */}
        {pricing && (
          <div className="flex flex-col">
            <div
              className="flex justify-between"
              style={{ paddingBottom: '24px' }}
            >
              <p className="font-bold text-black text-[18px]">총 결제 금액</p>
              <p className="font-bold text-point1 text-[18px]">
                {pricing.total.toLocaleString()}
              </p>
            </div>

            {/* 공급가 */}
            <div
              className="flex justify-between"
              style={{ paddingBottom: '24px' }}
            >
              <p className="font-bold text-[#999] text-[16px]">공급가</p>
              <p className="font-bold text-[#999] text-[16px]">
                {pricing.supply.toLocaleString()}
              </p>
            </div>

            {/* 부가세 */}
            <div
              className="flex justify-between"
              style={{ paddingBottom: '24px' }}
            >
              <p className="font-bold text-[#999] text-[16px]">부가세</p>
              <p className="font-bold text-[#999] text-[16px]">
                {pricing.vat.toLocaleString()}
              </p>
            </div>

            {/* 배송비 */}
            <div
              className="flex justify-between"
              style={{ paddingBottom: '24px' }}
            >
              <p className="font-bold text-[#999] text-[16px]">배송비</p>
              <p className="font-bold text-[#999] text-[16px]">
                {pricing.shipping.toLocaleString()}
              </p>
            </div>

            {/* 제작기간 */}
            <div
              className="flex justify-between items-center border-t-1"
              style={{ borderColor: '#d8d8d8' }}
            >
              <p className="font-bold text-[16px] text-black">제작기간</p>

              <div
                style={{
                  textAlign: 'right',
                  margin: '12px 0px 0px 0px',
                }}
              >
                <p className="font-bold text-[16px] text-black">
                  <span>{pricing.quantity}</span>개 제작시
                  <span className="text-point1">{pricing.productionTime}</span>
                  일 예상
                </p>
                <p className="text-[12px] text-[#999]">
                  (시안 확정 후, 영업일 기준)
                </p>
              </div>
            </div>

            {/* 버튼 옵션 */}
            <div className="flex justify-around gap-[8px] pt-[20px]">
              <button
                type="button"
                className="border rounded-[12px]"
                style={{
                  borderColor: '#d8d8d8',
                  padding: '10px 13px',
                  width: '16%',
                  height: '48px',
                }}
              >
                <Image
                  src={'/icons/onBookmark.svg'}
                  width={20}
                  height={20}
                  alt=""
                />
              </button>

              <button
                type="button"
                className="border rounded-[8px] font-medium text-[14px]"
                style={{
                  borderColor: '#d8d8d8',
                  padding: '10px 13px',
                  width: '100%',
                  height: '48px',
                  color: '#5749c7',
                }}
              >
                시안 다운로드
              </button>

              <button
                type="button"
                className="border rounded-[8px] font-medium text-[14px]"
                style={{
                  borderColor: '#d8d8d8',
                  padding: '10px 13px',
                  width: '100%',
                  height: '48px',
                  color: '#5749c7',
                }}
              >
                견적서 다운로드
              </button>
            </div>

            {/* 버튼 옵션 2 */}
            <div className="flex gap-[8px]" style={{ padding: '10px 0px' }}>
              <button
                type="button"
                className=" text-[16px] font-bold text-point1 rounded-[8px] justify-center items-center"
                style={{
                  height: '56px',
                  background: '#eae8fc',
                  width: '100%',
                }}
              >
                장바구니
              </button>

              <button
                type="button"
                className=" text-[16px] font-bold text-white rounded-[8px] justify-center items-center"
                style={{
                  height: '56px',
                  background: '#6b59f6',
                  width: '100%',
                }}
              >
                구매하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
