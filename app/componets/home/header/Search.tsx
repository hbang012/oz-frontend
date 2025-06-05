'use client';

import SubSearch from '@/app/componets/home/header/SubSearch';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchProps {
  isSearchOpen: boolean;
  onClose: () => void;
  animationClass: string;
}

export default function Search({
  onClose,
  isSearchOpen,
  animationClass,
}: SearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`/search-results?page=${query}`);
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="관심있는 굿즈를 검색해 보세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          className={`border border-[#d8d8d8] rounded-[8px] w-[245px] p-2 text-[12px] ${animationClass}`}
        />
        <button type="button" className="hidden">
          x
        </button>
      </div>

      <div className="block md:hidden">
        <SubSearch isSearchOpen={isSearchOpen} onClose={onClose} />
      </div>
    </>
  );
}
