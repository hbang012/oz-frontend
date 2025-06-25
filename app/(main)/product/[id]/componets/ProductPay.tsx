import Image from 'next/image';

export default function ProductPay() {
  return (
    <div
      className="relative flex justify-between items-center"
      style={{ gap: '20px', margin: '35px 0px' }}
    >
      <p className="font-bold" style={{ width: '20%', color: '#777' }}>
        별도문의
      </p>
      <button
        type="button"
        className="relative flex justify-between w-full rounded-[8px] border"
        style={{
          padding: '11px 16px',
          height: '46px',
          borderColor: '#d8d8d8',
        }}
      >
        <div className="">
          <p className=" text-[16px]" style={{ color: '#d8d8d8' }}>
            옵션선택
          </p>
          <Image
            src={'/icons/keyboard_arrow.svg'}
            width={25}
            height={25}
            alt=""
            className="absolute rotate-90"
            style={{ top: '25%', right: '5%' }}
          />
        </div>
      </button>
      {/* 옵션 선택지 */}
      <ul
        className="flex flex-col absolute z-10 rounded-[10px]"
        style={{
          top: '100%',
          left: '19%',
          padding: '8px 0px',
          background: '#fff',
          boxShadow: 'rgba(0, 0, 0, 0.08)  0px 2px 12px 0px',
          width: '81%',
        }}
      >
        <li className="hover:bg-[#f5f4ff]" style={{ padding: '10px 16px' }}>
          옵션 선택지 데이터
        </li>
      </ul>
    </div>
  );
}
