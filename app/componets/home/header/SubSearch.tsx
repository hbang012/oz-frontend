'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SubSearchProps {
  isSearchOpen: boolean;
  onClose: () => void;
}

export default function SubSearch({ onClose, isSearchOpen }: SubSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`/search-results?page=${query}`);
    }
  };

  return (
    <div
      className={`absolute top-[60px] left-0 p-[8px_20px_16px] bg-white w-full min-h-[65px] transition-all duration-500 ease-in-out 
  ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    >
      <div className="pt-[5px] relative">
        <form>
          <Image
            src={'/icons/sharch-gray.svg'}
            alt=""
            width={15}
            height={15}
            className="absolute top-[18px] left-[14px]"
          />
          <input
            type="text"
            placeholder="관심있는 굿즈를 검색해 보세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="border border-[#d8d8d8] text-[12px] rounded-[8px] w-full h-[40px] pl-[40px] pr-[40px]"
          />
          <button
            type="button"
            className={`absolute top-[16px] right-[14px] transition-opacity duration-300 
        ${
          isSearchOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
            onClick={onClose}
          >
            <Image src={'/icons/colse-2.svg'} width={16} height={16} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
