'use client';

import { useSearchParams } from 'next/navigation';
import gnb from '@/app/componets/home/header/Gnb';
import MainLayout from '@/app/(main)/layout';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('page') || '';

  const filteredData = Array.isArray(gnb)
    ? gnb.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <MainLayout>
      <main className="max-w-[1200px] mx-auto h-[900px] pt-[85px]">
        <div className="">
          <h1 className="text-[24px] p-[50px_0px_35px] font-bold leading-[36px]">
            <span className="text-point1">"{query}"</span> 에 대한 총 검색 결과
            ()
          </h1>
          <ul className="flex">
            <li>
              <button type="button" className="btn">
                전체
              </button>
            </li>
            <li>
              <button type="button" className="btn">
                굿즈
              </button>
            </li>
            <li>
              <button type="button" className="btn">
                블로그
              </button>
            </li>
          </ul>
          {filteredData.length > 0 ? (
            filteredData.map((item) => <li key={item.href}>{item.label}</li>)
          ) : (
            <p className="justify-center mt-[90px] text-[#999] text-[16px] w-full">
              검색 결과가 없어요.
            </p>
          )}
        </div>
      </main>
    </MainLayout>
  );
}
