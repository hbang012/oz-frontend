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

export default function CareMatchTablet() {
  return (
    <div className=" bg-[#4a30b6] w-full m-[40px_0px] ">
      <div className="p-[20px] flex flex-col gap-[20px]">
        {/* 텍스트 */}
        <h3 className="text-[#fff] font-bold text-[16px]">
          1:1 전담 담당자가 매칭되어 <br /> 추천부터 배송까지 책임집니다.
        </h3>

        {/* 이미지 리스트 */}
        <ul className="flex justify-between gap-[1%] w-[640px]">
          {cardList.map(({ src, label }, idx) => (
            <li
              key={idx}
              className="flex flex-col gap-[8px] justify-center items-center"
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

        {/* 버튼 */}
        <button
          type="button"
          className="text-[#6b59f6] text-[14px] w-[117px] h-[46px] rounded-[8px] bg-white"
        >
          1:1 상담신청
        </button>
      </div>
    </div>
  );
}
