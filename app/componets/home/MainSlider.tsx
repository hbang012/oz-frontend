'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import styles from '@/app/componets/home/MainSlider.module.css';
import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    id: 1,
    imgSrc: '/images/slide/main-Slide01.png',
    title: '굿즈 열풍의 이유 & 인기 많은\n굿즈를 위한 4가지 TIP',
    description:
      '굿즈는 왜 인기가 많을까? 오즈의제작소에서 성공하는 굿즈 마케팅과\n굿즈 제작을 위한 꿀팁을 전달합니다',
  },
  {
    id: 2,
    imgSrc: '/images/slide/main-Slide02.png',
    title: '홍보에서 기능까지 완벽한\nNFC 키링',
    description:
      '스마트폰을 갖다대기만 하면 원하는 링크로 연결되는 아크릴 NFC키링',
  },
  {
    id: 3,
    imgSrc: '/images/slide/main-Slide03.png',
    title: '세상에 단 하나뿐인 나만의\n디자인 트럼프 카드',
    description:
      '1세트에 54가지 디자인을 넣을 수 있다니!\n포토카드, 캐릭터 카드, 한글/숫자 교구용 카드 등으로 활용가능해요',
  },
  {
    id: 4,
    imgSrc: '/images/slide/main-Slide04.png',
    title: '포근포근 내 품 안에 말랑말랑\n귀여운 패브릭 굿즈',
    description:
      '500개부터 제작 가능한 귀여운 캐릭터 맞춤형 인형굿즈를 소개합니다',
  },
  {
    id: 5,
    imgSrc: '/images/slide/main-Slide05.png',
    title: '데스크테리어에 찰떡,\n오피스에 감성을 더하다',
    description:
      '슬기로운 오피스 생활! 도킹형 충전기, 디자인 키캡, 마우스패드로 매일 만나는 책상을\n감각적으로 데코할 수 있어요',
  },
  {
    id: 6,
    imgSrc: '/images/slide/main-Slide06.png',
    title: '팬들의 구매욕구를 자극하는\n퀄리티 좋은 아크릴 굿즈',
    description:
      '아크릴 키링, 아크릴 디오라마, 아크릴 스탠드, 글리터 아크릴 등등\n개성있는 디자인을 담은 다양한 아크릴 굿즈를 제작해보세요',
  },
];

export default function MainSlider() {
  const [temp, setTemp] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setTemp(1);
  }, []);

  return (
    <div className="max-w-[1920px] pt-[3%] flex gap-[50px] border-b-1 border-[#eee] max-md:block">
      <div className="relative ml-[8%] max-w-[302px] text-[#000] shrink-0 max-md:ml-[15px]">
        <h2 className="text-[32px] font-bold max-md:text-[25px]">
          당신의 아이디어를 <br /> 굿즈로 변신시키는 마법! <br /> 오즈의제작소
        </h2>
      </div>

      {/* 슬라이더 */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={10}
        slidesPerView={2.5}
        loop={true}
        autoplay={{ delay: 3000 }}
        className={`${styles.slider}`}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          0: {
            slidesPerView: 1.3,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`p-[10px] mb-[20%] text-center ${styles.slider}`}>
              <Image
                src={slide.imgSrc}
                width={400}
                height={300}
                alt="굿즈 이미지"
                className="rounded-[20px] scale-[0.7] w-auto h-auto "
                priority
              />
              {/* 텍스트 */}
              <div className={`text-left ${styles.slideText}`}>
                <h2 className="text-[24px] font-bold leading-[30px] mt-[20px] max-md:text-[20px]">
                  {slide.title}
                </h2>
                <p className="leading-[20px] mt-[10px] text-[#777] max-md:text-[14px]">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* 외부 버튼 */}
        <div>
          <button ref={prevRef} className={styles.prevButton}></button>
          <button ref={nextRef} className={styles.nextButton}></button>
        </div>
      </Swiper>
    </div>
  );
}
