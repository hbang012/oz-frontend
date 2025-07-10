import { generatePagination } from '@/app/_lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Pagination({
  page,
  setPage,
  totalPage,
}: {
  page: number;
  setPage: (num: number) => void;
  totalPage: number;
}) {
  const [pageArr, setPageArr] = useState<(number | string)[]>([]);

  useEffect(() => {
    if (!totalPage || isNaN(totalPage)) return; // 임시
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[5px]">
      <button
        type="button"
        className="border-0 px-[10px] text-[14px]"
        style={{ lineHeight: '10px' }}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <Image
          src={'/icons/gray_arrow.svg'}
          alt=""
          width={6}
          height={6}
          style={{ transform: 'rotate(180deg)' }}
        />
      </button>

      {pageArr.map((item, i) => {
        if (item === '...') {
          return <span key={i}>...</span>;
        } else {
          return (
            <button
              type="button"
              key={i}
              onClick={() => setPage(item as number)}
              style={{ height: '28px', width: '28px' }}
              className={`${
                page === item
                  ? 'bg-point1 rounded-[50%] text-white'
                  : 'text-black'
              } border-0 px-[10px] text-[14px]`}
            >
              {item}
            </button>
          );
        }
      })}

      <button
        type="button"
        style={{ lineHeight: '1' }}
        className="border-0 px-[10px] text-[14px] disabled:opacity-50 "
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      >
        <Image src={'/icons/gray_arrow.svg'} alt="" width={6} height={6} />
      </button>
    </div>
  );
}
