'use client';

import Image from 'next/image';

export default function MainBlog() {
  return (
    <div className="pt-[100px] max-w-[1200px] mx-auto">
      {/* 제목 */}
      <div className="flex relative justify-between items-center gap-[8px] max-md:gap-[4px] max-md:static max-md:flex-col">
        <h2 className="text-[#000] font-bold text-[50px] max-md:text-[24px]">
          Focus On
        </h2>
        {/* 버튼 */}
        <div className="absolute bottom-[7px] right-0 max-md:static max-md:mt-[5px]">
          <button
            type="button"
            className="group relative overflow-hidden flex w-[80px] h-[32px] justify-center items-center gap-[4px] text-[#000] font-bold text-[13px] border border-[#eee] rounded-[100px] shadow-[inset_0px_0px_0px_1px_rgb(238,238,238)] transition-colors duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
          >
            <span className="relative z-10 flex items-center mr-[8px] transition-colors duration-500 group-hover:text-[#fff]">
              더보기
              <Image
                src={'/icons/plus-svgrepo-com.svg'}
                width={15}
                height={15}
                priority
                alt=""
                className="absolute top-[2px] left-[35px] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={'/icons/plus-gray.svg'}
                width={8}
                height={8}
                priority
                alt=""
                className="absolute top-[9px] left-[44px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </span>
            {/* 버튼 애니메이션 효과 */}
            <span
              className="absolute left-0 top-0 w-full h-full bg-[#000] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
              aria-hidden="true"
              style={{ transform: 'translateZ(0)' }}
            ></span>
          </button>
        </div>
      </div>

      {/* 슬라이더 */}
    </div>
  );
}
