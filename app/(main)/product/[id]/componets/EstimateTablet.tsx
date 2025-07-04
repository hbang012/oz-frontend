'use client';

import { PricingResult } from '@/app/_lib/types/PricingResult';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  pricing: PricingResult | null;
}

export default function EstimateTablet({ pricing }: Props) {
  const [open, setOpen] = useState(false);
  if (!pricing || typeof pricing.total !== 'number') return null;

  const PANEL_HEIGHT = 269;

  const DEFAULT_BOTTOM = -120;
  const EXPAND_DELTA = 160;

  return (
    <div>
      <div
        className="fixed left-0 right-0 z-10 "
        style={{
          bottom: DEFAULT_BOTTOM,
          height: PANEL_HEIGHT,
          transition: 'transform 150ms ease-out',
          transform: open ? `translateY(-${EXPAND_DELTA}px)` : `translateY(0)`,
        }}
      >
        <div onClick={() => setOpen(!open)}>
          <div
            className=" rounded-[20px]"
            style={{
              padding: '32px 24px',
              background: '#fff',
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 10px 0px',
              left: '0',
              right: '0',
            }}
          >
            <div className="flex justify-center">
              <span
                className="w-[32px] h-[4px] text-[#fff] "
                style={{ background: ' #d9d9d9', height: '4px', width: '32px' }}
              >
                -
              </span>
            </div>

            {/* 총 결제 */}
            {pricing && (
              <div className="flex flex-col">
                <div
                  className="flex justify-between"
                  style={{ paddingBottom: '24px' }}
                >
                  <p className="font-bold text-black text-[18px]">
                    총 결제 금액
                  </p>
                  <p className="font-bold text-point1 text-[18px]">
                    {pricing.total.toLocaleString()}
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
                      <span>{pricing.quantity}</span> 개 제작시 {''}
                      <span className="text-point1">
                        {pricing.productionTime}
                      </span>{' '}
                      예상
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
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="fixed left-0 right-0 z-10 "
        style={{
          bottom: '25px',
          height: '56px',
          padding: '8px 20px 16px',
          background: '#fff',
        }}
      >
        {/* 버튼 옵션 2 */}
        <div
          className=" flex gap-[8px]"
          style={{ padding: '10px 0px', background: '#fff' }}
        >
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
    </div>
  );
}
