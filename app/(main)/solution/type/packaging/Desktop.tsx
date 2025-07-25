import CareMatch from '@/app/(main)/solution/shared/CareMatch';
import EasyDoneDesktop from '@/app/(main)/solution/shared/EasyDoneDesktop';
import Faq from '@/app/(main)/solution/shared/Faq';
import NavDesktop from '@/app/(main)/solution/shared/NavDesktop';
import PartnersDesktop from '@/app/(main)/solution/shared/PartnersDesktop';

const Imgs = [
  {
    id: 1,
    imgSrc: '/images/solution/packaging1.png',
    name: '헤더택 포장',
  },
  {
    id: 2,
    imgSrc: '/images/solution/packaging2.png',
    name: '뒷대지 포장',
  },
  {
    id: 3,
    imgSrc: '/images/solution/packaging3.png',
    name: '틴케이스와 스펀지',
  },
  {
    id: 4,
    imgSrc: '/images/solution/packaging4.png',
    name: '행택과 선물포장',
  },
  {
    id: 5,
    imgSrc: '/images/solution/packaging5.png',
    name: 'C형 상자(피자형 박스)',
  },
  {
    id: 6,
    imgSrc: '/images/solution/packaging6.png',
    name: '투명 창문형 박스',
  },
  {
    id: 7,
    imgSrc: '/images/solution/packaging7.png',
    name: '싸바리박스',
  },
  {
    id: 8,
    imgSrc: '/images/solution/packaging8.png',
    name: '표지바리 (자석싸바리) 박스',
  },
  {
    id: 9,
    imgSrc: '/images/solution/packaging9.png',
    name: '키트 포장',
  },
  {
    id: 10,
    imgSrc: '/images/solution/packaging10.png',
    name: '절취선이 들어간 반달상자',
  },
  {
    id: 11,
    imgSrc: '/images/solution/packaging11.png',
    name: '상하분리 상자와 띠지',
  },
  {
    id: 12,
    imgSrc: '/images/solution/packaging12.png',
    name: '친환경 봉투 포장',
  },
];

export default function PackagingDesktop() {
  return (
    <>
      {/* 배너 */}
      <header className="relative top-[85px] w-full overflow-hidden">
        <img
          src={'/images/solution/packaging00.png'}
          alt=""
          className="min-w-[1200px] h-[220px] mx-auto object-cover"
        />
        <div className="absolute top-[55px] right-[60%]">
          <h2 className="font-bold text-[#000] text-[32px] mb-[6px]">
            완성도를 높이는 패키징
          </h2>
          <p>패키징 방법 추천부터 진행까지</p>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto pt-[85px]">
        {/* 탭 */}
        <NavDesktop />

        {/* 텍스트 */}
        <div className=" pt-[70px] mx-auto">
          <div className="text-[#000] flex flex-col gap-[15px] justify-center items-center text-center">
            <strong className="font-bold text-[20px]">
              간단한 패키징부터 키트까지
            </strong>
            <p className="text-[16px]">
              좋은 패키징 방법을 추천드리기도 하며
              <br />
              제작부터 포장까지 완료해서 납품 드립니다. <br />
            </p>
            <p className="mt-[20px]">
              희망하시면 품질 검수까지 꼼꼼히 완료한 후, 품질검증 스티커를 붙여
              보내드리고 있습니다.
            </p>
          </div>
        </div>

        {/* 이미지 컨테이너 */}
        <div className="max-w-[1076px] mx-auto pt-[60px]">
          <ul className="grid grid-cols-4 gap-[14px]">
            {Imgs.map((item) => (
              <li key={item.id} className="">
                <div className="flex flex-col gap-[14px]">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-wull"
                  />
                  <h3 className="pt-[10px] font-bold text-[16px] text-black">
                    {item.name}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <CareMatch />
        <EasyDoneDesktop />
        <PartnersDesktop />
        <Faq />
      </main>
    </>
  );
}
