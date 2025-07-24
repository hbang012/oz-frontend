import React from 'react';

const steps = [
  {
    src: '/images/solution/dodbogi.png',
    text: '예산,수량,기간 등을 고려해 적합한 굿즈 서치',
  },
  {
    src: '/images/solution/check.png',
    text: '가격,수량,기간 등 굿즈별로 일일이 확인',
  },
  {
    src: '/images/solution/book.png',
    text: '견적을 위한 제작방법, 옵션특징 이해 필요',
  },
  {
    src: '/images/solution/shape.svg',
    text: '퀄리티 확인을 위한 수많은 샘플테스트',
  },
  {
    src: '/images/solution/check2.svg',
    text: '업체에 일일이 발주 & 납기일 체크',
  },
  {
    src: '/images/solution/pack.png',
    text: '직접 포장하거나, 포장 업체에 맡기기',
  },
];

const steps2 = [
  {
    src: '/images/solution/good.svg',
    text: '추천서, 견적 제공받은 후 판단',
  },
  {
    src: '/images/solution/shape.svg',
    text: '과거 제작한 샘플로 퀄리티 체크 가능',
  },
  {
    src: '/images/solution/talk.png',
    text: '제작요청',
  },
];

export default function EasyDoneDesktop() {
  return (
    <div className="flex flex-col gap-[35px] justify-center items-center mb-[90px]">
      {/* 텍스트 */}
      <div className="text-center text-[#000]">
        <p className="text-[16px]">오즈의 제작소를 통해</p>
        <h3 className="text-[24px] font-bold">
          번거롭고 어려운 과정들을 끝내보세요!
        </h3>
      </div>

      {/* 솔루션 */}
      <div>
        <strong className="flex justify-center mb-[10px] text-[14px] text-[#000]">
          [일반적인 경우]
        </strong>
        <div className="max-w-[940px] overflow-x-auto flex gap-[10px] h-[159px] bg-[#f6f6f6] rounded-[8px] p-[30px]">
          <ul className="flex gap-[10px]">
            {steps.map(({ src, text }, idx) => (
              <React.Fragment key={idx}>
                <li className="w-[160px] flex flex-col justify-center items-center">
                  <img src={src} alt="" />
                  <p className="text-[14px] text-[#000] text-center mt-[8px]">
                    {text}
                  </p>
                </li>
                {/* 화살표는 마지막엔 안 붙임 */}
                {idx < steps.length - 1 && (
                  <li>
                    <img
                      src="/images/solution/arrow.svg"
                      alt="arrow"
                      className="w-[13px] h-full"
                    />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* 화살표 */}
        <div className="flex justify-center py-[15px]">
          <img
            src={'/images/solution/nextArrow.svg'}
            alt=""
            className="w-[74px] h-[39px]"
          />
        </div>

        <strong className="flex justify-center mb-[10px] text-[14px] text-[#000]">
          [오즈의제작소 이용]
        </strong>
        <div className="max-w-[394px] flex justify-center items-center gap-[10px] h-[159px] bg-[#f5f4ff] rounded-[8px] p-[30px]">
          <ul className="flex gap-[10px]">
            {steps2.map(({ src, text }, idx) => (
              <React.Fragment key={idx}>
                <li className="w-[98px] flex flex-col justify-center items-center">
                  <img src={src} alt="" />
                  <p className="text-[14px] text-[#000] text-center mt-[8px]">
                    {text}
                  </p>
                </li>
                {/* 화살표는 마지막엔 안 붙임 */}
                {idx < steps2.length - 1 && (
                  <li>
                    <img
                      src="/images/solution/arrow.svg"
                      alt="arrow"
                      className="w-[13px] h-full"
                    />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
