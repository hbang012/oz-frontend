'use client';

import ContactInfo from '@/app/(main)/contact/ContactInfo';

export default function Contact() {
  return (
    <main className="max-w-[1200px] mx-auto" style={{ paddingTop: '180px' }}>
      {/* 문의하기 */}
      <div>
        <div className="">
          <h2 className="text-[32px] font-bold text-[#000]">문의하기</h2>
          <p className="text-[16px] text-[#333]"></p>
        </div>
        <div
          className="flex max-w-[747px] p-[14px] gap-[10px] border"
          style={{
            background: '#fff4f4',
            borderRadius: '4px',
            borderColor: '#ffd9d9',
            padding: '20px',
            maxWidth: '747px',
          }}
        >
          <span className="text-[14px]">⚠️</span>
          <p className="text-[14px]">
            여러 채널로 (문의하기, 채널톡, 이메일) 동일한 문의를 주실 경우, 확인
            과정에서 혼선이 발생해 답변이 더욱 지연될 수 있습니다. <br />
            원활한 응대를 위해 하나의 채널로 문의 주시는 것을 적극 권장드립니다.
          </p>
        </div>
      </div>

      {/* 문의정보 */}
      <div className="flex" style={{ paddingTop: '30px' }}>
        <span className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-point1 text-white text-[24px] font-bold">
          1
        </span>
        <h3 className="pl-[20px] text-[24px] font-medium text-[#000]">
          문의 정보를 입력해주세요
        </h3>
      </div>

      {/* 문의항목 */}
      <ContactInfo />
    </main>
  );
}
