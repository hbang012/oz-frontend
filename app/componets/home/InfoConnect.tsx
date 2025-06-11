'use client';

import Image from 'next/image';

export default function InfoConnect() {
  return (
    <div className="max-w-[1200px] mx-auto p-[40px_20px_0px] max-sm:p-[40px_0px]">
      <ul className="flex gap-[22px] max-sm:block">
        {/* 소개 */}
        <li className="group relative bg-point1 flex flex-col basis-[590px] gap-[128px] p-[30px] rounded-[8px] cursor-pointer overflow-hidden max-sm:mb-[15px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            style={{ backgroundImage: "url('/images/info/Introduction.png')" }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-[28px] font-bold text-white">오즈 소개</h2>
            <p className="text-[16px] text-white">
              오즈의 제작소를 통해 번거롭고 어려운 과정들을 끝내보세요! <br />
              1:1 큐레이션 덕분에, 굿즈제작이 쉬워진다
            </p>
          </div>
          <div className="relative z-10 pt-[10px] border-t-1 border-white flex">
            <p className="text-[14px] text-white">자세히 보기</p>
            <Image
              src={'/icons/arrow-2.svg'}
              alt=""
              width={15}
              height={15}
              className="ml-[15px]"
            />
          </div>
        </li>

        {/* 문의 */}
        <li className="group relative bg-black flex flex-col basis-[590px] gap-[128px] p-[30px] rounded-[8px] cursor-pointer overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            style={{ backgroundImage: "url('/images/info/Contact.png')" }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-[28px] font-bold text-white">문의하기</h2>
            <p className="text-[16px] text-white">
              1:1 전담 매니저가 매칭되어 <br />
              예산, 납기일, 수량, 컨셉, 사용 고객 특징에 맞는 굿즈를
              추천드립니다.
            </p>
          </div>
          <div className="relative z-10 pt-[10px] border-t-1 border-white flex">
            <p className="text-[14px] text-white">자세히 보기</p>
            <Image
              src={'/icons/arrow-2.svg'}
              alt=""
              width={15}
              height={15}
              className="ml-[15px]"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
