'use client';

import MainPopup from '@/app/componets/home/MainPopup';
import Image from 'next/image';
import { useState } from 'react';

type Item = {
  id: number;
  imgSrc: string;
  name: string;
  partner: string;
  tag: string[];
};

const MainPortfolios = [
  {
    id: 1,
    imgSrc: '/images/popup/main-p-01.png',
    name: '마그넷',
    partner: '롯데월드',
    href: ' ',
    tag: ['캐릭터굿즈'],
  },
  {
    id: 2,
    imgSrc: '/images/popup/main-p-02.png',
    name: '웰컴키트',
    partner: '카카오엔터테인먼트',
    href: ' ',
    tag: ['사내굿즈', '패키지'],
  },
  {
    id: 3,
    imgSrc: '/images/popup/main-p-03.png',
    name: '바스티안 굿즈 키트',
    partner: '오디언소리',
    href: ' ',
    tag: ['로고굿즈', '세트상품'],
  },
  {
    id: 4,
    imgSrc: '/images/popup/main-p-04.png',
    name: '인형키링',
    partner: '서울시 교육청',
    href: 'product/4299',
    tag: ['캐릭터굿즈'],
  },
  {
    id: 5,
    imgSrc: '/images/popup/main-p-05.png',
    name: '금속뱃지,키링',
    partner: 'T1',
    href: ' ',
    tag: ['로고굿즈', '게임굿즈', '패키지'],
  },
  {
    id: 6,
    imgSrc: '/images/popup/main-p-06.png',
    name: '슬로건 카드',
    partner: '대원씨아이',
    href: 'product/4235',
    tag: ['캐릭터굿즈'],
  },
];

export default function MainPortfolio() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleOpenPopup = (item: Item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="pt-[100px] max-w-[1200px] mx-auto">
      {/* 제목 */}
      <div className="flex relative justify-center items-center gap-[8px] max-md:gap-[4px] max-md:static max-md:flex-col">
        <h2 className="text-[#000] font-bold text-[32px] max-md:text-[24px]">
          포트폴리오
        </h2>
        {/* 버튼 */}
        <div className="absolute bottom-[7px] right-0 max-md:static max-md:mt-[5px]">
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
      </div>

      {/* 포트폴리오 */}
      {/* 이미지 관련 경고 이슈*/}
      <div>
        <ul className="grid grid-cols-3 grid-rows-2 gap-[40px_30px] pt-[60px] max-md:grid-cols-2 max-md:grid-rows-none">
          {MainPortfolios.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleOpenPopup(item)}
              className={`cursor-pointer ${index >= 2 ? 'max-md:hidden ' : ''}`}
            >
              <div className="overflow-hidden rounded-[8px] relative">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={380}
                  height={260}
                  priority
                  className="w-auto h-auto max-md:w-full rounded-[8px] transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                />
              </div>

              {/* 텍스트 */}
              <div className="text-left ">
                <h2 className="pt-[20px] font-bold text-[#000] text-[24px]">
                  {item.name}
                </h2>
                <p className="pt-[4px] text-[16px]">{item.partner}</p>
                <ul className="pt-[10px] flex gap-[4px]">
                  {item.tag.map((tagItem, index) => (
                    <li
                      key={index}
                      className="bg-[#F6F6F6] rounded-[6px] w-auto h-[30px] p-[4px_6px] text-[14px] flex items-center max-md:h-auto"
                    >
                      {tagItem}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <MainPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        item={selectedItem}
      />
    </div>
  );
}
