'use client';

import { useLogin } from '@/app/(auth)/login/LoginContext';
import Search from '@/app/componets/home/header/Search';
import Image from 'next/image';
import { useState } from 'react';

export default function Utility() {
  const { openLogin } = useLogin();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex gap-[8px]">
      {/* 검색 */}
      {!isSearchOpen && (
        <button
          type="button"
          className="border-0 bg-[#f6f6f6] rounded-[50%] w-[40px] h-[40px]"
          onClick={() => setIsSearchOpen(true)}
        >
          <Image
            src={'/icons/sharch.svg'}
            width={100}
            height={100}
            alt=""
            className="w-[24px] h-[24px]"
          />
        </button>
      )}
      {isSearchOpen && (
        <Search
          isSearchOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      )}

      {/* 장바구니 */}
      <button
        type="button"
        className="border-0 bg-[#f6f6f6] rounded-[50%] w-[40px] h-[40px]"
        onClick={openLogin}
      >
        <Image
          src={'/icons/cart.svg'}
          width={100}
          height={100}
          alt=""
          className="w-[24px] h-[24px]"
        />
      </button>

      {/* 로그인 */}
      <button
        type="button"
        className="text-[14px] text-gray-400 pl-[16px]"
        onClick={openLogin}
      >
        로그인
      </button>
    </div>
  );
}
