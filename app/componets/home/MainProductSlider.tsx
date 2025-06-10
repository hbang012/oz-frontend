'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/controller';
import { Controller } from 'swiper/modules';
import { useState } from 'react';

const products = [
  {
    id: 1,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠123',
    num: 1,
  },
  {
    id: 2,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠12313',
    num: 12,
  },
  {
    id: 3,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠123123',
    num: 1,
  },
  {
    id: 4,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠2',
    num: 144,
  },
  {
    id: 5,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 1123,
  },
  {
    id: 6,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 1,
  },
  {
    id: 7,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 12,
  },
  {
    id: 8,
    imgSrc: '/images/slide/Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 1,
  },
];

export default function MainProductSlider() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="px-[16px]">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group cursor-pointer overflow-hidden rounded-[8px] bg-[#f6f6f6] flex flex-col items-center">
              {/* 이미지 박스 */}
              <div className="relative w-full pt-[133%]">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="absolute top-0 left-0 w-[80%] h-auto m-auto inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* 태그 */}
                <div className="absolute left-[16px] bottom-[17px] flex gap-[4px]">
                  <div className="w-auto h-[28px] p-[3px_6px] rounded-[5px] bg-black text-white text-[13px]">
                    {item.tag}
                  </div>
                  <div className="w-auto h-[28px] p-[3px_6px] rounded-[5px] bg-white text-[13px]">
                    최소{item.num}개
                  </div>
                </div>
              </div>

              {/* 설명 */}
              <div className="mt-[10px] text-center">
                <h2 className="font-bold text-[16px] text-[#000]">
                  {item.name}
                </h2>
                <p className="font-bold text-[16px] text-[#777]">
                  최소 <span>{item.price}</span>원~
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
