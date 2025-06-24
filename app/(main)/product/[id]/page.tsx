'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { Product } from '@/app/_lib/types/product';
import Image from 'next/image';

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
    <main className="pt-[100px] max-w-[1200px] mx-auto max-sm:pt-[60px]">
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

      {/* 이미지 */}
      <div className="flex gap-[15px]">
        <div>
          <Image
            src={`http://localhost:3001${product.image_url}`}
            alt={product.name}
            width={135}
            height={135}
            className="rounded-[20px]"
            style={{ background: '#ba9e9e' }}
          />
        </div>

        <div style={{}}>
          <Image
            src={`http://localhost:3001${product.image_url}`}
            alt={product.name}
            width={550}
            height={550}
            className="rounded-[20px]"
            style={{ background: '#f3efe9' }}
          />
        </div>

        {/* 옵션 */}
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
                여기에 별도문의 포장방법 배송방법 택배 같은 옵션 데이터
                들어가야함
              </p>

              {/* 수량 옵션 */}
              <div className="flex items-center" style={{ gap: '10px' }}>
                <div
                  className="text-[14px] text-[#555] font-bold"
                  style={{ width: '100px' }}
                >
                  수량
                </div>
                <div
                  className="flex justify-center items-center w-full relative border border-[#d8d8d8] rounded-[8px]"
                  style={{
                    height: '46px',
                    padding: '0px 16px',
                    background: '#fff',
                  }}
                ></div>
              </div>

              {/* 가격 */}
              <div className="flex" style={{ gap: '65px' }}>
                <p className="font-bold text-[14px] text-[#555]">가격</p>
                <p className="font-bold text-point1">
                  {product.supply_price}원
                </p>
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
          <div
            className="sticky top-[100px] rounded-[20px]"
            style={{
              padding: '32px 24px',
              background: '#fff',
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 10px 0px',
            }}
          >
            <div className="flex flex-col">
              {/* 총 결제 */}
              <div
                className="flex justify-between"
                style={{ paddingBottom: '24px' }}
              >
                <p className="font-bold text-black text-[18px]">총 결제 금액</p>
                <p className="font-bold text-point1 text-[18px]">
                  {product.supply_price}
                </p>
              </div>

              {/* 공급가 */}
              <div
                className="flex justify-between"
                style={{ paddingBottom: '24px' }}
              >
                <p className="font-bold text-[#999] text-[16px]">공급가</p>
                <p className="font-bold text-[#999] text-[16px]">
                  {product.shipping_fee}
                </p>
              </div>

              {/* 부가세 */}
              <div
                className="flex justify-between"
                style={{ paddingBottom: '24px' }}
              >
                <p className="font-bold text-[#999] text-[16px]">부가세</p>
                <p className="font-bold text-[#999] text-[16px]">
                  {product.shipping_fee}
                </p>
              </div>

              {/* 배송비 */}
              <div
                className="flex justify-between"
                style={{ paddingBottom: '24px' }}
              >
                <p className="font-bold text-[#999] text-[16px]">배송비</p>
                <p className="font-bold text-[#999] text-[16px]">
                  {product.shipping_fee}
                </p>
              </div>

              {/* 제작기간 */}
              <div
                className="flex justify-between items-center border-t-1"
                style={{ borderColor: '#d8d8d8' }}
              >
                <p className="font-bold text-[16px] text-black">제작기간</p>

                <div style={{ textAlign: 'right', margin: '12px 0px 0px 0px' }}>
                  <p className="font-bold text-[16px] text-black">
                    <span>여기에 수량 데이터</span>개 제작시
                    <span className="text-point1">
                      여기에 날짜 80~120일 이런거 데이터
                    </span>
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
          </div>
        </div>
      </div>

      <p>상품 ID: {product.product_id}</p>
      <p>최소 수량: {product.quantity_range}</p>
      <p>단가: {Number(product.supply_price).toLocaleString()}원</p>
    </main>
  );
}
