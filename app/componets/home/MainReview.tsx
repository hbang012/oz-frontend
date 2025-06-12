import Image from 'next/image';
import '@/app/animations.css';

const MainReviews = [
  {
    id: 1,
    imgSrc: '/images/partner/nexon.png',
    name: '넥슨',
    reviews:
      '처음 제작해보는 건이라 시작 전에 조금 불안했으나, 결과적으로는 잘 제작 되어서 아주 만족스러웠습니다!! 중간 중간 시안 수정 잘 진행해주시고, 요청한 사항들 세세하게 확인해주시고 잘 진행해주셔서 감사해요:) 그리고 제작 납품일자 맞춰주시려고 노력해주셔서도 감사하고요! 광고주도 만족스럽다고 하여서 다행이고 대 만족 입니다!!!! 여기서 제작하면, 일단 퀄리티 걱정은 안해도 될 거 같아요 :) 잘 제작해주셔서 감사드려요!!!',
  },
  {
    id: 2,
    imgSrc: '/images/partner/cj.png',
    name: 'CJ제일제당',
    reviews:
      '빠듯한 리드타임 잘 맞추어 주셔서 다행히 기한내에 행사 진행할 수 있었고, 커뮤니케이션 촘촘하게 해주셔서 의뢰 과정이 편했습니다. 다음번에도 이러한 굿즈 제작할 일 있으면 오즈의제작소를 이용하고 싶습니다 :)',
  },
  {
    id: 3,
    imgSrc: '/images/partner/myungrang.png',
    name: '명랑시대외식청년창업협동조합',
    reviews:
      '얼마되지 않는 제작 기간에 맞춰서 어떤 굿즈가 제작이 가능한지 친절하게 알려주셨고, 소량의 제품 여러 개를 제작해야 하는 상황이라 더더욱 빠듯했던 일정이었던 와중에 항상 친절하게 대해주신 담당자분과 일정에 맞춰 제작을 해주신 제작팀 분들께 감사드립니다! 중간에 시안 수정해야 할 부분과 일부 불량건에 대한 대처까지 빠르게 해주셔서 굿즈 제작에 한결 수월했습니다. 감사합니다 :)',
  },
  {
    id: 4,
    imgSrc: '/images/partner/thegrmm.png',
    name: '더그림엔터테인먼트',
    reviews:
      '굿즈 품목이 많고 진행했던 레퍼런스가 많아 참고하기도 좋습니다. 다양한 구성으로 포장까지 완료해서 마무리할 수 있다는 게 최고 장점인 거 같습니다. 친절하게 잘 진행해주셔서, 특히 굿즈 제작에 경험이 부족한 경우에 이용하기 좋을 거 같습니다.',
  },
  {
    id: 5,
    imgSrc: '/images/partner/hani.png',
    name: '하니와 클로버',
    reviews:
      '전에도 한번 맡긴적이 있었는데, 일단 퀄리티가 너무 좋았던 기억이 있어서 이번에도 오즈의제작소를 이용하게 되었습니다. 역시나 실망시키지 않으시고 생각했던 것 보다 더 좋은 퀄리티로 완성된 굿즈를 받았어요. 앞으로도 굿즈 만들때마다 오즈의제작소가 1순위 일거같습니다.',
  },
  {
    id: 6,
    imgSrc: '/images/partner/naran.png',
    name: '나란',
    reviews:
      'nfc 굿즈 제작하고 싶어서 업체를 정말 많이 찾았는데 오즈의 제작소가 제격이었어요. 덕분에 원하는 대로 잘 제작했습니다. 제작 기간도 빨랐고, 작동도 문제 없이 잘 되어서 만족해요!',
  },
  {
    id: 7,
    imgSrc: '/images/partner/hamkke.png',
    name: '함께 일하는 재단',
    reviews:
      '우선 촉박한 일정에도 꼼꼼하게 챙겨주신 PM님께 감사의 말씀드립니다. 사회초년생을 타깃으로 한 웰컴키트를 구성했었는데, PM님께서 구성품 추천도 해주셔서 빠르게 준비할 수 있었습니다. 항상 빠르게 피드백 주셔서 덕분에 행사도 잘 마칠 수 있었습니다~ 다음에도 잘 부탁드립니다! 감사합니다 :)',
  },
  {
    id: 8,
    imgSrc: '/images/partner/nexon.png',
    name: '넥슨재팬',
    reviews:
      '적은 수량이였음에도 항상 좋은 대응을 해주었습니다. 여러 변경사항이 있었음에도 대부분 대응해주셔서 제작과정도 전체적으로 편했습니다. 실제로 받아본 제품도 퀄리티가 높았으며 사용자들 반응도 무척이나 좋았습니다.',
  },
];

export default function MainReview() {
  return (
    <div className="pt-[100px] max-w-[1200px] mx-auto">
      {/* 제목 */}
      <div className="flex relative justify-center items-center gap-[8px] max-md:gap-[4px] max-md:static max-md:flex-col fade-up">
        <h2 className="text-[#000] font-bold text-[32px] max-md:text-[24px]">
          오즈와 함께한 파트너들
        </h2>
        {/* 버튼 */}
        <div className="absolute bottom-[7px] right-0 max-md:static max-md:mt-[5px]">
          <button
            type="button"
            className="group relative overflow-hidden flex w-[80px] h-[32px] justify-center items-center gap-[4px] text-[#000] font-bold text-[13px] border border-[#eee] rounded-[100px] shadow-[inset_0px_0px_0px_1px_rgb(238,238,238)] transition-colors duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
          >
            <span className="relative z-10 flex items-center mr-[8px] transition-colors duration-500 group-hover:text-[#fff]">
              더보기
              <Image
                src={'/icons/plus-svgrepo-com.svg'}
                width={15}
                height={15}
                priority
                alt=""
                className="absolute top-[2px] left-[35px] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={'/icons/plus-gray.svg'}
                width={8}
                height={8}
                priority
                alt=""
                className="absolute top-[9px] left-[44px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </span>
            {/* 버튼 애니메이션 효과 */}
            <span
              className="absolute left-0 top-0 w-full h-full bg-[#000] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)]"
              aria-hidden="true"
              style={{ transform: 'translateZ(0)' }}
            ></span>
          </button>
        </div>
      </div>

      {/* 리뷰 */}
      <ul className="grid grid-cols-4 grid-rows-2 gap-[13px] pt-[60px] max-md:grid-cols-2 max-md:grid-rows-none max-sm:line-clamp-1 fade-up3">
        {MainReviews.map((item, index) => (
          <li
            key={item.id}
            className={`flex flex-col gap-[14px] p-[20px_22px_30px] rounded-[8px] border-[#eee] border max-sm:mt-[10px] ${
              index >= 4 ? 'max-md:hidden' : ''
            } ${index >= 2 ? 'max-sm:hidden' : ''}`}
          >
            <div className="flex justify-between items-center">
              <h2 className="w-[140px] text-[16px] font-bold text-[#000]">
                {item.name}
              </h2>
              <div className="w-[100px] h-[48px]">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={80}
                  height={28}
                  priority
                  className="h-auto w-auto"
                />
              </div>
            </div>
            <p className="text-[14px]">{item.reviews}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
