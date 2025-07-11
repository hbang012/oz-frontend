'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './MainSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function Frame() {
  return (
    <div className="pt-[100px] overflow-hidden" style={{ width: '100%' }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000}
        className={styles.swiper}
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index} style={{ width: '1000px' }}>
            <img src={'/icons/ozicon.svg'} height={80} width={52} alt="" />
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
