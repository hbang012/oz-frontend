'use client';

import Image from 'next/image';
import '@/app/animations.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@/app/componets/home/MainBlog.module.css';
import { useEffect, useRef, useState } from 'react';

const focus = [
  {
    id: 1,
    imgSrc: '/images/slide/focus-01.png',
    tit: '유통업계에 불고 있는 IP 굿즈 열풍',
    txt: 'IP 콜라보 굿즈의 사례와 유통업계에서 특히 IP 상품을 많이 선보이는 이유 등을 설명해요',
    date: '2024-12-21',
  },
  {
    id: 2,
    imgSrc: '/images/slide/focus-02.png',
    tit: '굿즈 열풍의 이유 & 인기많은 굿즈를 위한 4가지 TIP',
    txt: '굿즈는 왜 인기가 많을까요? 브랜드/IP에 어떤 영향과 효과를 줄까요? 또, 성공적인 굿즈 제작을 위해 중요한 4가지 TIP을 공유합니다!',
    date: '2024-12-21',
  },
  {
    id: 3,
    imgSrc: '/images/slide/focus-03.png',
    tit: '실용적이고 특별한 회사 굿즈 찾으시나요?',
    txt: '실용적이면서도 회사의 브랜드를 잘 나타낼 수 있는 굿즈 7가지를 소개 드립니다!',
    date: '2024-11-27',
  },
  {
    id: 4,
    imgSrc: '/images/slide/focus-04.png',
    tit: '꾸미기에 푹 빠진 MZ세대에 맞춘 "굿즈 아이템 추천"',
    txt: '백꾸, 카꾸, 다꾸, 신꾸, 폴꾸 등 MZ트렌드에 대해 소개해요!',
    date: '2024-10-28',
  },
  {
    id: 5,
    imgSrc: '/images/slide/focus-05.png',
    tit: '작고 귀여운데 실용성까지? 아이돌 굿즈 추천템 8가지',
    txt: '가지고 다니기 편한 작은 굿즈 8가지를 소개합니다.',
    date: '2024-09-28',
  },
  {
    id: 6,
    imgSrc: '/images/slide/focus-06.png',
    tit: '일본 도쿄타워 전망대 기념품샵 THE SKY 방문 후기[치이카와, 블루록 콜라보 굿즈까지?!]',
    txt: '일본 도쿄타워 전망대 기념품샵에 다녀왔습니다.',
    date: '2024-06-21',
  },
  {
    id: 7,
    imgSrc: '/images/slide/focus-07.png',
    tit: '미국 텍사스 K-POP 페스티벌 후기 2탄',
    txt: '미국 텍사스에서 열린 K-POP 페스티벌에 다녀왔습니다.',
    date: '2024-06-21',
  },
  {
    id: 8,
    imgSrc: '/images/slide/focus-08.png',
    tit: '뉴욕 첼시마켓 기념품샵 방문 후기',
    txt: '뉴욕 첼시마켓의 기념품샵을 방문했습니다.',
    date: '2024-05-19',
  },
];

export default function MainBlog() {
  const [temp, setTemp] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setTemp(1);
  }, []);

  return (
    <div className="pt-[100px] max-w-[1200px] mx-auto max-sm:pt-[60px] fade-up">
      {/* 제목 */}
      <div className="flex relative justify-between items-center gap-[8px] max-md:gap-[4px] max-md:justify-between">
        <h2 className="text-[#000] font-bold text-[50px] max-md:text-[24px]">
          Focus On
        </h2>
        {/* 버튼 */}
        <div className="absolute bottom-[7px] right-0 max-md:mt-[5px]">
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
        </div>

        {/* 슬라이더 버튼 */}
        <div>
          <button ref={prevRef} className={styles.prevButton}></button>
          <button ref={nextRef} className={styles.nextButton}></button>
        </div>
      </div>

      {/* 슬라이더 */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1.2,
          },
        }}
      >
        {focus.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full pt-[20px]">
              <Image
                src={item.imgSrc}
                alt={item.tit}
                width={380}
                height={213}
                priority
                className="rounded-[8px]"
              />
              <div>
                <h2 className="pt-[20px] text-[24px] text-[#000] font-bold max-md:text-[20px]">
                  {item.tit}
                </h2>
                <p className="pt-[8px] text-[16px] max-md:text-[14px]">
                  {item.txt}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
