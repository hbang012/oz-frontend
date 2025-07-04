'use client';

import styles from '@/app/pagination.module.css';
import { Product } from '@/app/_lib/types/product';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductImgTablet() {
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
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p>상품을 불러오지 못했습니다.</p>;
  if (!product) return <p>로딩 중...</p>;

  const images = [product.image_url, ...(product.sub_image_urls || [])];
  return (
    <div className="" style={{ gap: '20px', width: '100%' }}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        spaceBetween={10}
        slidesPerView={1}
        style={{ borderRadius: '20px' }}
      >
        <ul>
          {images.map((url, idx) => (
            <SwiperSlide key={idx}>
              <li>
                <div className="w-full h-[400px] rounded-[20px] bg-[#f3efe9]">
                  <Image
                    src={`http://localhost:3001${url}`}
                    alt={`slide-${idx}`}
                    width={550}
                    height={550}
                    className="rounded-[20px]"
                    style={{
                      background: '#f3efe9',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
}
