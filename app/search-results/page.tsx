'use client';

import { useSearchParams } from 'next/navigation';
import gnb from '@/app/componets/home/header/Gnb';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('page') || '';

  const filteredData = Array.isArray(gnb)
    ? gnb.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1>"{query}" 검색 결과</h1>
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => <li key={item.href}>{item.label}</li>)
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
