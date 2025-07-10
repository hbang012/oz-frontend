'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function Frame() {
  return (
    <div className="w-full pt-[100px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000}
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <Image
              src={'/icons/ozicon.svg'}
              height={80}
              width={52}
              alt=""
              priority
            />
            <strong
              className="text-[#000] font-bold max-md:text-[30px]"
              style={{
                fontSize: '57px',
                paddingLeft: '30px',
                letterSpacing: '-0.57px',
              }}
            >
              All in one for GOODS Production
            </strong>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
