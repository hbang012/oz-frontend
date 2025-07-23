'use client';

import ToggleSwitch from './ToggleSwitch';

export default function Settings() {
  return (
    <div className="bg-white rounded-[20px] relative">
      <h2 className="text-[22px] font-bold ml-[10px] mt-[10px] text-[#000]">
        설정
      </h2>

      <div className="h-[200px] flex flex-col justify-center items-center ">
        <img
          src="/icons/strawberry.png"
          className="w-[56px] h-[56px] rounded-[20px]"
          alt=""
        />
        <h2 className="text-[17px] text-[#ccc] mt-2">이름</h2>
        <p className="text-[13px] text-[#ccc] mt-[4px]">연락처 정보</p>
        <button
          type="button"
          className="flex gap-[5px] items-center justify-center mt-[10px] bg-[#eee] rounded-[6px] w-[112px] h-[24px] p-[3px_4px]"
        >
          <img src={'/icons/edit.png'} alt="" className="w-[13px] h-[13px]" />
          <p className="text-[#858585] text-[13px]">정보 수정하기</p>
        </button>
      </div>

      <hr className="w-full border-t border-[#ddd] m-[4px_0px] p-[6px]" />

      {/* 상담환경 */}
      <h2 className="13px text-[#bbb] p-[8px_0px]">상담 환경</h2>
      <ul>
        {/* 언어 */}
        <li className="flex justify-between p-[6px_0px]">
          <div className="flex">
            <img
              src={'/icons/language.png'}
              alt=""
              className="w-[19px] h-[19px] mr-[8px]"
            />
            <p className="text-[15px] text-[#333]">언어</p>
          </div>

          <button type="button" className="flex items-center">
            <p className="mr-[5px] text-[#858585]">한국어</p>
            <img
              src={'/icons/gray_arrow.svg'}
              alt=""
              className="w-[13px] h-[13px] mb-[3px]"
            />
          </button>
        </li>

        {/* 메세지 번역 표시 */}
        <ToggleSwitch label="메세지 번역 표시" iconSrc="/icons/translate.png" />
        <ToggleSwitch
          label="알림음"
          iconSrc="/icons/bell2.png"
          initial={true}
        />
      </ul>

      <hr className="w-full border-t border-[#ddd] m-[4px_0px] p-[6px]" />

      <ul>
        <h2 className="13px text-[#bbb] p-[8px_0px]">상담 환경</h2>
        <ToggleSwitch label="문자 수신 거부" iconSrc="/icons/unchat.png" />
        <ToggleSwitch label="이메일 수신 거부" iconSrc="/icons/unemlail.png" />
      </ul>
    </div>
  );
}
