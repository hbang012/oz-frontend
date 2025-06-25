// app/componets/home/header/SubMenu.tsx
'use client';

import { useState, useEffect } from 'react';
import type { GnbItem } from '@/app/_lib/types/GnbItem';
import Image from 'next/image';
import Link from 'next/link';
import SubProductMenu from './SubProductMenu';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // DB에서 받아온 1~3Depth 메뉴 트리
  const [menuData, setMenuData] = useState<GnbItem[]>([]);
  // 2Depth 토글 상태
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  // 3Depth 토글 상태
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/gnb')
      .then((res) => res.json())
      .then((data: GnbItem[]) => setMenuData(data))
      .catch((err) => console.error('GNB 로딩 실패', err));
  }, []);

  if (menuData.length === 0) return null;

  const toggleSubMenu = (idx: number) => {
    setActiveSubMenu((prev) => (prev === idx ? null : idx));
    setActiveSubItem(null);
  };
  const toggleDepth3 = (idx: number) => {
    setActiveSubItem((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      {/* 백드롭 */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* 사이드 메뉴 */}
      <div
        className={`fixed top-0 right-0 w-full h-full overflow-y-auto bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 스크롤바 숨기기 */}
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
            src="/icons/plus-svgrepo-com.svg"
            width={32}
            height={32}
            alt="닫기"
            className="rotate-45"
          />
        </button>

        <ul className="flex flex-col gap-4 p-[32px_0px_66px_32px] text-[16px]">
          <h2 className="font-bold text-point1 border-b-1 border-[#eee] leading-[40px]">
            홈
          </h2>

          {/* 1Depth */}
          {menuData.map((item, idx) => (
            <li
              key={item.id}
              className="border-b-1 border-[#eee] leading-[35px] text-[#000]"
            >
              {item.sub && item.sub.length > 0 ? (
                <button
                  type="button"
                  className="w-full text-left text-[16px] text-[#000] flex justify-between items-center"
                  onClick={() => toggleSubMenu(idx)}
                >
                  {item.label}
                  <Image
                    src="/icons/keyboard_arrow.svg"
                    width={25}
                    height={25}
                    alt="토글"
                    className={`${
                      activeSubMenu === idx ? 'rotate-270' : 'rotate-90'
                    } mb-[10px]`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href ?? ''}
                  className="block"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}

              {/* 2Depth */}
              {activeSubMenu === idx && item.sub && (
                <ul className="ml-4 mt-2 pl-4 pb-[20px]">
                  {item.sub.map((subItem, subIdx) => (
                    <li key={subItem.id} className="text-[#777]">
                      {subItem.sub && subItem.sub.length > 0 ? (
                        <button
                          type="button"
                          className="w-full text-left text-[#888] flex justify-between items-center"
                          onClick={() => toggleDepth3(subIdx)}
                        >
                          {subItem.label}
                          <Image
                            src="/icons/keyboard_arrow.svg"
                            width={20}
                            height={20}
                            alt="토글"
                            className={`${
                              activeSubItem === subIdx
                                ? 'rotate-270'
                                : 'rotate-90'
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={subItem.href ?? ''}
                          className="block"
                          onClick={onClose}
                        >
                          {subItem.label}
                        </Link>
                      )}

                      {/* 3Depth */}
                      {activeSubItem === subIdx && subItem.sub && (
                        <SubProductMenu items={subItem.sub} />
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
