'use client';

import DepthThree from '@/app/componets/home/header/Depth-three';
import Link from 'next/link';

export default function Gnb() {
  return (
    <nav>
      <ul className="flex items-center gap-[8px] text-[18px] text-[#626262]">
        <li className="p-[6px_12px_7px] hover:bg-point1 hover:rounded-[20px] hover:text-[#fff] hover:h-[100%]">
          <Link href="/">오즈소개</Link>
        </li>
        <li className="p-[6px_12px_7px] hover:bg-point1 hover:rounded-[20px] hover:text-[#fff] hover:h-[100%]">
          <Link href="/">문의하기</Link>
        </li>

        {/* 제작소 */}
        <li className="relative p-[6px_12px_7px] hover:bg-point1 hover:rounded-[20px] hover:text-[#fff] hover:h-[100%]">
          <span>제작소</span>

          <DepthThree />
        </li>

        <li className="p-[6px_12px_7px] hover:bg-point1 hover:rounded-[20px] hover:text-[#fff] hover:h-[100%]">
          <Link href="/">콘텐츠</Link>
        </li>
      </ul>
    </nav>
  );
}
