'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchProps {
  isSearchOpen: boolean;
  onClose: () => void;
}

export default function Search({ onClose, isSearchOpen }: SearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`/search-results?page=${query}`);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="관심있는 굿즈를 검색해 보세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        className={`border border-[#d8d8d8] rounded-[8px] w-[245px] p-2 transition-all duration-500 ease-in-out 
      ${
        isSearchOpen
          ? 'opacity-100 scale-100 max-h-[40px]'
          : 'opacity-0 scale-90 max-h-0 overflow-hidden'
      }`}
      />

      {/* 닫기 버튼 */}
      <button type="button" className="hidden">
        x
      </button>
    </>
  );
}
