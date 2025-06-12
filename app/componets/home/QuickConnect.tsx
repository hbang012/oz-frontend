import Link from 'next/link';
import '@/app/animations.css';

export default function QuickConnect() {
  return (
    <div className="pt-[100px] max-w-[1200px] mx-auto max-sm:pt-[60px]">
      <div className="flex flex-col text-center justify-center fade-up">
        <h2 className="font-bold text-[32px] text-[#000] max-md:text-[24px]">
          굿즈 추천부터 제작까지 <br />
          오즈의제작소와 함께
        </h2>
      </div>

      <div className="flex justify-center gap-4 mt-[40px] fade-up2 max-sm:flex-col">
        {/* 굿즈 문의하기 버튼 */}
        <button
          type="button"
          className="group relative overflow-hidden flex w-[200px] h-[58px] p-[15px] justify-center items-center gap-[4px] text-[#fff] font-bold text-[18px] bg-[#000] rounded-[100px] transition-colors duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
        >
          <Link
            href={'/'}
            className="relative z-10 flex items-center text-[#fff] transition-colors duration-500 group-hover:text-[#fff]"
          >
            굿즈 문의하기 💡
          </Link>
          {/* 버튼 애니메이션 효과 */}
          <span
            className="absolute left-0 top-0 w-full h-full bg-point1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
            aria-hidden="true"
            style={{ transform: 'translateZ(0)' }}
          ></span>
        </button>

        {/* 뉴스레터 구독 버튼 */}
        <button
          type="button"
          className="group relative overflow-hidden flex w-[200px] h-[58px] p-[15px] justify-center items-center gap-[4px] text-[#000] font-bold text-[18px] border border-[#eee] rounded-[100px] shadow-[inset_0px_0px_0px_1px_rgb(238,238,238)] transition-colors duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
        >
          <Link
            href={'/'}
            className="relative z-10 flex items-center text-[#000] transition-colors duration-500 group-hover:text-[#fff]"
          >
            뉴스레터 구독 💌
          </Link>
          {/* 버튼 애니메이션 효과 */}
          <span
            className="absolute left-0 top-0 w-full h-full bg-[#000] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
            aria-hidden="true"
            style={{ transform: 'translateZ(0)' }}
          ></span>
        </button>
      </div>
    </div>
  );
}
