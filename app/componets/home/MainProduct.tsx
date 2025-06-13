'use client';

import MainProductSlider from '@/app/componets/home/MainProductSlider';
import Image from 'next/image';

const MainProducts = [
  {
    id: 1,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠123',
    quantity: 1,
  },
  {
    id: 2,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠12313',
    quantity: 12,
  },
  {
    id: 3,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠123123',
    quantity: 1,
  },
  {
    id: 4,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠2',
    quantity: 144,
  },
  {
    id: 5,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    quantity: 1123,
  },
  {
    id: 6,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    quantity: 1,
  },
  {
    id: 7,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    quantity: 12,
  },
  {
    id: 8,
    imgSrc: '/images/slide/main-Slide01.png',
    name: '반팔 티셔츠',
    price: '3091',
    href: '/',
    tag: '티셔츠',
    quantity: 1,
  },
];

export default function MainProduct() {
  return (
    <div className="pt-[60px] max-w-[1200px] mx-auto">
      {/* 제목 */}
      <div className="flex flex-col gap-[8px] text-center max-md:gap-[4px] fade-up">
        <h2 className="text-[#000] font-bold text-[32px] max-md:text-[24px]">
          FOR YOU
        </h2>
        <p className="text-[#000] font-bold text-[24px] max-md:text-[16px]">
          굿즈 전문가의 맞춤 제안
        </p>

        {/* 버튼 */}
        <span className="flex justify-end max-md:justify-center mt-[20px]">
          <button
            type="button"
            className="group relative overflow-hidden flex w-[80px] h-[32px] justify-center items-center gap-[4px] text-[#000] font-bold text-[13px] border border-[#eee] rounded-[100px] shadow-[inset_0px_0px_0px_1px_rgb(238,238,238)] transition-colors duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
          >
            <span className="relative z-10 flex items-center mr-[8px] transition-colors duration-500 group-hover:text-[#fff]">
              더보기
              <Image
                src={'/icons/plus-svgrepo-com.svg'}
                width={15}
                height={15}
                priority
                alt=""
                className="absolute top-[2px] left-[35px] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={'/icons/plus-gray.svg'}
                width={8}
                height={8}
                priority
                alt=""
                className="absolute top-[9px] left-[44px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </span>
            {/* 버튼 애니메이션 효과 */}
            <span
              className="absolute left-0 top-0 w-full h-full bg-[#000] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
              aria-hidden="true"
              style={{ transform: 'translateZ(0)' }}
            ></span>
          </button>
        </span>
      </div>

      {/* 상품 grid (PC) */}
      <div className="pt-[60px] hidden md:block fade-up2">
        <ul className="grid grid-cols-4 grid-rows-2 gap-[60px_13px]">
          {MainProducts.map((item) => (
            <li
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-[8px] max-w-[900px]"
            >
              <div className="relative w-[290px] h-[386px] bg-[#f6f6f6] flex justify-center items-center">
                {/* 상품 태그 */}
                <div className="absolute left-[16px] bottom-[17px] flex gap-[4px]">
                  <div className="w-auto h-[28px] p-[3px_6px] rounded-[5px] bg-black text-white text-[13px]">
                    {item.tag}
                  </div>
                  <div className="w-auto h-[28px] p-[3px_6px] rounded-[5px] bg-white text-[13px]">
                    최소{item.quantity}개
                  </div>
                </div>
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-[80%]"
                />
              </div>

              {/* 상품 설명 */}
              <div className="mt-[10px]">
                <h2 className=" font-bold text-[18px] text-[#000]">
                  반팔 티셔츠
                </h2>
                <p className=" font-bold text-[18px] text-[#777]">
                  최소 <span>3091</span>원~
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 태블릿 + 모바일 */}
      <div className="block md:hidden pt-[60px]">
        <MainProductSlider />
      </div>
    </div>
  );
}
