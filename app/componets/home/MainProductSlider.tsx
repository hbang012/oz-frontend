'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '@/app/animations.css';
import style from '@/app/componets/home/MainProductSlider.module.css';
import { Scrollbar } from 'swiper/modules';

const MainProducts = [
  {
    id: 1,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠123',
    num: 1,
  },
  {
    id: 2,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠12313',
    num: 12,
  },
  {
    id: 3,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠123123',
    num: 1,
  },
  {
    id: 4,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠2',
    num: 144,
  },
  {
    id: 5,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 1123,
  },
  {
    id: 6,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 1,
  },
  {
    id: 7,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 12,
  },
  {
    id: 8,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    num: 1,
  },
];

export default function MainProductSlider() {
  // 4개씩그룹
  const groupedProducts = [];
  for (let i = 0; i < MainProducts.length; i += 4) {
    groupedProducts.push(MainProducts.slice(i, i + 4));
  }

  return (
    <div className="px-[25%] max-sm:px-[10px] fade-up2">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true, el: `.${style.swiperScrollbar}` }}
      >
        {groupedProducts.map((group, index) => (
          <SwiperSlide key={index}>
            <ul className="grid grid-cols-2 grid-rows-2 gap-[10px]">
              {/* 상품 */}
              {group.map((item, i) => (
                <li
                  key={i}
                  className="group cursor-pointer overflow-hidden rounded-[8px] bg-[#f6f6f6] flex flex-col items-cente"
                >
                  <div className="relative w-full pt-[133%]">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="absolute top-0 left-0 w-[80%] h-auto m-auto inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    {/* 태그 */}
                    <div className="absolute left-[10px] bottom-[10px] flex gap-[4px]">
                      <div className="w-auto h-[22px] p-[3px_6px] rounded-[5px] bg-black text-white text-[11px]">
                        {item.tag}
                      </div>
                      <div className="w-auto h-[22px] p-[3px_6px] rounded-[5px] bg-white text-[11px]">
                        최소{item.num}개
                      </div>
                    </div>
                  </div>

                  {/* 설명 */}
                  <div className="p-[0_0_15px_15px] text-left">
                    <h2 className="font-bold text-[14px] text-[#000]">
                      {item.name}
                    </h2>
                    <p className="font-bold text-[13px] text-[#777]">
                      최소 <span>{item.price}</span>원 ~
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
}
