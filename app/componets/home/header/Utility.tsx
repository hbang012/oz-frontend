'use client';

import { useLogin } from '@/app/(auth)/login/LoginContext';
import MobileMenu from '@/app/componets/home/header/SubMenu';
import Search from '@/app/componets/home/header/Search';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Utility() {
  const { openLogin } = useLogin();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const animationClass = isSearchOpen
    ? 'opacity-100 scale-100 max-h-[40px]'
    : 'opacity-0 scale-90 max-h-0 overflow-hidden';

  return (
    <div className="flex gap-[8px] max-md:gap-[1px]">
      {/* 검색 */}
      {!isSearchOpen && (
        <button
          type="button"
          className="border-0 bg-[#f6f6f6] rounded-[50%] w-[40px] h-[40px] max-md:bg-white"
          onClick={() => setIsSearchOpen(true)}
        >
          <Image
            src={'/icons/sharch.svg'}
            width={100}
            height={100}
            alt=""
            className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]"
          />
        </button>
      )}
      {isSearchOpen && (
        <Search
          isSearchOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          animationClass={animationClass}
        />
      )}

      {/* 장바구니 */}
      <button
        type="button"
        className="border-0 bg-[#f6f6f6] rounded-[50%] w-[40px] h-[40px] max-md:bg-white"
        onClick={openLogin}
      >
        <Image
          src={'/icons/cart.svg'}
          width={100}
          height={100}
          alt=""
          className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]"
        />
      </button>

      {/* 로그인 */}
      <Link
        href={'/login'}
        className="text-[14px] text-gray-400 pl-[16px] max-md:hidden"
        style={{ marginTop: '10px' }}
      >
        로그인
      </Link>

      {/* 더보기 버튼 */}
      <button
        type="button"
        className="hidden max-md:block border-0 rounded-[50%] w-[40px] h-[40px]"
        onClick={() => setIsMenuOpen(true)}
      >
        <Image
          src={'/icons/menu-hamburger.svg'}
          width={24}
          height={24}
          alt="더보기"
          className="max-md:w-[20px] max-md:h-[20px]"
        />
      </button>

      {/* 모바일 메뉴 */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
