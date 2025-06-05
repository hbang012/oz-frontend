'use client';

import { useState } from 'react';
import { MenuItem, gnb, productMenu } from '@/app/componets/home/header/Gnb';
import Image from 'next/image';
import Link from 'next/link';
import SubProductMenu from '@/app/componets/home/header/SubProductMenu';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const toggleDepth3 = (index: number) => {
    setActiveSubItem(activeSubItem === index ? null : index);
  };

  return (
    <>
      {/* 배경 추가 */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* 메뉴 박스 */}
      <div
        className={`fixed top-0 right-0 w-[100%] h-full overflow-y-auto bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* webkit기반 브라우저에서 숨기기 */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <h2 className="pt-[20px] pl-[20px] font-bold text-[18px]">카테고리</h2>
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          <Image
            src={'/icons/plus-svgrepo-com.svg'}
            width={32}
            height={32}
            alt=""
            className="rotate-45"
          />
        </button>

        <ul className="flex flex-col gap-4 p-[32px_0px_66px_32px] text-[16px]">
          <h2 className="font-bold text-point1 border-b-1 border-[#eee] leading-[40px]">
            홈
          </h2>
          {/* 1depth */}
          {gnb.map((item, index) => (
            <li
              key={index}
              className="border-b-1 border-[#eee] leading-[35px] text-[#000]"
            >
              {item.sub ? (
                <button
                  type="button"
                  className="w-full text-left text-[16px] text-[#000]"
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.label}
                  <Image
                    src={'/icons/keyboard_arrow.svg'}
                    width={25}
                    height={25}
                    alt=""
                    className={`${
                      activeSubMenu === index ? 'rotate-270' : 'rotate-90'
                    } mb-[10px]`}
                  />
                </button>
              ) : (
                <Link href={item.href || ''} className="block">
                  {item.label}
                </Link>
              )}

              {/* 2depth */}
              {activeSubMenu === index && (
                <ul className="ml-4 mt-2 pl-4 pb-[20px]">
                  {item.sub &&
                    item.sub.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-[#777]">
                        {productMenu[subIndex] ? (
                          <button
                            type="button"
                            className="w-full text-left text-[#888]"
                            onClick={() => toggleDepth3(subIndex)}
                          >
                            {subItem.label}
                          </button>
                        ) : (
                          <Link href={subItem.href || ''}>{subItem.label}</Link>
                        )}
                        {activeSubItem === subIndex && (
                          <SubProductMenu
                            items={productMenu[subIndex]}
                            activeIndex={subIndex}
                          />
                        )}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
