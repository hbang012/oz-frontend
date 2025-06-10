import Image from 'next/image';

export default function Suggestion() {
  return (
    <div className="pt-[60px] max-w-[1200px] mx-auto">
      {/* 제목 */}
      <div className="flex flex-col gap-[8px] text-center">
        <h2 className="text-[#000] font-bold text-[32px]">FOR YOU</h2>
        <p className="text-[#000] font-bold text-[24px]">
          굿즈 전문가의 맞춤 제안
        </p>
        <span className="place-items-end">
          <button
            type="button"
            className="group flex w-[80px] h-[32px] justify-center items-center gap-[4px] text-[#000] font-bold text-[13px] border border-[#eee] rounded-[100px] shadow-[inset_0px_0px_0px_1px_rgb(238,238,238)] hover:text-[#fff] hover:bg-[#000] hover:shadow-none transition-colors duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)] hover:border-0"
          >
            더보기
            <Image
              src={'/icons/plus-svgrepo-com.svg'}
              width={15}
              height={15}
              priority
              alt=""
              className="group-hover:hidden"
            />
            <Image
              src={'/icons/plus-gray.svg'}
              width={8}
              height={8}
              priority
              alt=""
              className="hidden group-hover:block"
            />
          </button>
        </span>
      </div>

      {/* 상품 */}
      <div className="pt-[60px]">
        <ul className="grid-cols-4 gap-[60px_13px]">
          <li>
            <div className="relative w-[290px] h-[386px] rounded-[8px] bg-[#f6f6f6] justify-center items-center">
              <div className="w-[80%] relative">
                <div className="absolute left-[16px] bottom-[17px] flex gap-[4px]">
                  <img src="/images/slide/Slide01.png" />
                </div>
              </div>
            </div>

            <div className="mt-[10px]">
              <h2 className="font-bold text-[18px] text-[#000]">반팔 티셔츠</h2>
              <p className="font-bold text-[18px] text-[#777]">
                최소 <span>3091</span>원~
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
