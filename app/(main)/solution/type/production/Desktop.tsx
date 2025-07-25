'use client';

import CareMatch from '@/app/(main)/solution/shared/CareMatch';
import EasyDoneDesktop from '@/app/(main)/solution/shared/EasyDoneDesktop';
import NavDesktop from '@/app/(main)/solution/shared/NavDesktop';
import PartnersDesktop from '@/app/(main)/solution/shared/PartnersDesktop';
import Faq from '@/app/(main)/solution/shared/Faq';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Imgs = [
  {
    id: 1,
    imgSrc: '/images/solution/production01.png',
    name: '아크릴류',
  },
  {
    id: 2,
    imgSrc: '/images/solution/production02.png',
    name: '모바일 악세사리',
  },
  {
    id: 3,
    imgSrc: '/images/solution/production03.png',
    name: '스티커',
  },
  {
    id: 4,
    imgSrc: '/images/solution/production04.png',
    name: '의류',
  },
  {
    id: 5,
    imgSrc: '/images/solution/production05.png',
    name: '마우스패드',
  },
  {
    id: 6,
    imgSrc: '/images/solution/production06.png',
    name: '패키지',
  },
  {
    id: 7,
    imgSrc: '/images/solution/production07.png',
    name: '지류',
  },
  {
    id: 8,
    imgSrc: '/images/solution/production08.png',
    name: '금속뱃지',
  },
  {
    id: 9,
    imgSrc: '/images/solution/production09.png',
    name: '피규어,틴케이스',
  },
];

export default function ProductionDesktop() {
  return (
    <div>
      {/* 배너 */}
      <header className="relative top-[85px] w-full overflow-hidden">
        <img
          src={'/images/solution/productionPC.png'}
          alt=""
          className="min-w-[1200px] h-[220px] mx-auto object-cover"
        />
        <div className="absolute top-[55px] right-[60%]">
          <h2 className="font-bold text-[#000] text-[32px] mb-[6px]">
            검증된 퀄리티의 굿즈제작
          </h2>
          <p>퀄리티 확인이 완료된 굿즈만 제작합니다</p>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto pt-[85px]">
        {/* 탭 */}
        <NavDesktop />

        {/* 텍스트 */}
        <div className=" pt-[70px] mx-auto">
          <div className="text-[#000] flex flex-col gap-[15px] justify-center items-center text-center">
            <strong className="font-bold text-[20px]">
              다양한 굿즈 제작을 한 번에
            </strong>
            <p className="text-[16px]">
              오즈의제작소는 지류, 아크릴, 의류, 패키지, PVC 등 <br />
              다양한 분야의 굿즈를 전문적으로 만들 수 있습니다.
            </p>
          </div>
        </div>

        {/* 이미지 슬라이드 */}
        <div className="p-[60px_22px_0px]">
          <Swiper spaceBetween={20} slidesPerView={4} loop={true}>
            <ul className="">
              {Imgs.map((item) => (
                <SwiperSlide key={item.id}>
                  <li className="">
                    <div className="">
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="w-full h-wull"
                      />
                      <h3 className="pt-[10px] font-bold text-[16px] text-black">
                        {item.name}
                      </h3>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>

        <CareMatch />
        <EasyDoneDesktop />
        <PartnersDesktop />
        <Faq />
      </main>
    </div>
  );
}
