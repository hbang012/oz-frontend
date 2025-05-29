'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function MainSlider() {
  return (
    <div className="w-[100%] pt-[3%] flex ">
      <div className="ml-[8%] max-w-[302px]">
        <h2 className="text-[32px] font-bold">
          당신의 아이디어를 굿즈로 변신시키는 마법! 오즈의제작소
        </h2>
      </div>

      <div>
        <Swiper
          className="swiper-wrapper"
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={4}
        >
          <SwiperSlide>
            <div className="w-[400px] h-[485px] border rounded-[20px]">
              <h2 className="text-[24px] font-bold">
                굿즈 열풍의 이유 & 인기 많은 굿즈를 위한 4가지 TIP
              </h2>
              <p>
                굿즈는 왜 인기가 많을까? 오즈의제작소에서 성공하는 굿즈 마케팅과
                굿즈 제작을 위한 꿀팁을 전달합니다.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
