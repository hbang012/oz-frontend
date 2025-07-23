'use client';

export default function HomeScreen() {
  return (
    <div className="space-y-4">
      {/* 타이틀 */}
      <div className="flex  items-center">
        <img
          src={'/icons/tmp.png'}
          alt=""
          className="w-[56px] h-[56px] rounded-[24px] mr-[14px]"
        />

        <div>
          <h2 className="text-[22px] font-bold cursor-default">오즈의제작소</h2>
          <button type="button" className="flex items-center">
            <p className="text-[12px] text-[#666666]">운영시간 보기</p>
            <img
              src={'/icons/gray_arrow.svg'}
              alt=""
              className="w-[10px] h-[10px] ml-[6px]"
            />
          </button>
        </div>
      </div>

      {/* 인사말 */}
      <div className="p-[15px] bg-white rounded-[20px] cursor-default">
        <div className="flex">
          <img
            src={'/icons/chat.png'}
            alt=""
            className="w-[36px] h-[36px] rounded-[15px] border border-[#eee]"
          />
          <div className=" ml-[8px] mb-[20px]">
            <h3 className="text-[13px] font-bold">오즈의 제작소</h3>
            <p className="text-[14px] leading-[22px] text-[#333] mt-[5px] ">
              👋 안녕하세요
              <br />
              마법같은 굿즈제작소, 오즈의제작소입니다 🔮
              <br />
              궁금한 사항을 선택해 주세요.
            </p>
          </div>
        </div>

        {/* 문의하기 버튼 */}
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <button
            type="button"
            className="w-full flex justify-center gap-[8px] rounded-[16px] p-3 bg-[#acabf9] "
          >
            <p className="font-bold text-[#000] text-[15px] ">문의하기</p>
            <img src={'/icons/send.png'} alt="" className="w-[20px] h-[20px]" />
          </button>
          <p className="flex items-center text-[12px] text-[#cecece] cursor-default">
            <img
              src={'/icons/brightness.png'}
              alt=""
              className="w-[8px] h-[8px] mr-[5px]"
            />
            몇 분 내 답변 받으실 수 있어요
          </p>
        </div>
      </div>

      {/* 다른 방법으로 문의 */}
      <div className="flex items-center justify-between p-[15px] bg-white rounded-[20px]">
        <p className="text-[#bbbbbb] cursor-default">다른 방법으로 문의</p>

        <div className="flex gap-[10px]">
          <img
            src={'/icons/app-kakao.png'}
            alt=""
            className="w-[36px] h-[36px] rounded-[12px]"
          />
          <img
            src={'/icons/call.png'}
            alt=""
            className="p-[8px] w-[36px] h-[36px] rounded-[12px] bg-[#329BE733]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-[5px] text-[12px] text-[#999] mt-4 cursor-default">
        <img
          src={'/icons/chennle.png'}
          alt=""
          className="w-[12px] h-[12px] rounded-[5px]"
        />
        <span className="font-bold">채널톡</span> 이용중
      </div>
    </div>
  );
}
