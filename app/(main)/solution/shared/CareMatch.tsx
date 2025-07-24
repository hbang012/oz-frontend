const cardList = [
  {
    src: '/images/solution/suggestion.png',
    label: '추천',
  },
  {
    src: '/images/solution/making.png',
    label: '제작',
  },
  {
    src: '/images/solution/design.png',
    label: '디자인',
  },
  {
    src: '/images/solution/packaging.png',
    label: '포장',
  },
  {
    src: '/images/solution/delivery.png',
    label: '배송',
  },
];

export default function CareMatch() {
  return (
    <div className=" bg-[#4a30b6] w-full m-[90px_0px] ">
      <div className="max-w-[950px] mx-auto flex gap-[70px] p-[28px_0px]">
        {/* 텍스트 */}
        <div className="flex flex-col gap-[32px] max-w-[240px]">
          <h3 className="text-[#fff] font-bold text-[20px]">
            1:1 전담 담당자가 매칭되어 <br /> 추천부터 배송까지 책임집니다.
          </h3>
          <button
            type="button"
            className="text-[#6b59f6] text-[14px] w-[117px] h-[46px] rounded-[8px] bg-white"
          >
            1:1 상담신청
          </button>
        </div>

        {/* 이미지 리스트 */}
        <ul className="flex justify-between gap-[1%] w-[640px]">
          {cardList.map(({ src, label }, idx) => (
            <li
              key={idx}
              className="flex flex-col gap-[8px] justify-center items-center pb-[40px]"
            >
              <img
                src={src}
                alt={label}
                className="rounded-[50%] w-[100px] h-[100px]"
              />
              <p className="text-[14px] text-[#fafafa]">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
