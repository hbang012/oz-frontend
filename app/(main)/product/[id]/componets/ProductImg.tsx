'use client';

import { Product } from '@/app/_lib/types/product';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductImg() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/product/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setProduct(json))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p>상품을 불러오지 못했습니다.</p>;
  if (!product) return <p>로딩 중...</p>;

  const images = [product.image_url, ...(product.sub_image_urls || [])];
  return (
    <div className="flex" style={{ gap: '20px' }}>
      {/* 상세이미지 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '440px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          /* Scrollbar 숨기기 */
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <ul
          className="flex flex-col"
          style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {images.map((url, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              className={idx === selectedIndex ? 'active' : ''}
              style={{
                position: 'relative',
                width: 145,
                height: 135,
                overflow: 'hidden',
                borderRadius: 12,
                cursor: 'pointer',
              }}
            >
              <Image
                src={`http://localhost:3001${url}`}
                alt={`thumb-${idx}`}
                width={135}
                height={135}
                className="rounded-[12px]"
                style={{
                  top: '0',
                  left: '-10px',
                  position: 'absolute',
                  background: '#f3efe9',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.3s ease',
                  transform: hoverIdx === idx ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/*대표이미지 */}
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
    </div>
  );
}
