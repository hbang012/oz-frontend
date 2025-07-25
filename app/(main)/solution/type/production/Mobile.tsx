import CareMatchMobile from '@/app/(main)/solution/shared/CareMatchMobile';
import EasyDoneMobile from '@/app/(main)/solution/shared/EasyDoneMobile';
import FaqTablet from '@/app/(main)/solution/shared/FaqTablet';
import NavMobile from '@/app/(main)/solution/shared/NavMobile';
import PartnersMobile from '@/app/(main)/solution/shared/PartnersMobile';

const Imgs = [
  {
    id: 1,
    imgSrc: '/images/solution/production01.png',
    name: '아크릴류',
  },
  {
    id: 2,
    imgSrc: '/images/solution/production02.png',
    name: '모바일 악세사리',
  },
  {
    id: 3,
    imgSrc: '/images/solution/production03.png',
    name: '스티커',
  },
  {
    id: 4,
    imgSrc: '/images/solution/production04.png',
    name: '의류',
  },
  {
    id: 5,
    imgSrc: '/images/solution/production05.png',
    name: '마우스패드',
  },
  {
    id: 6,
    imgSrc: '/images/solution/production06.png',
    name: '패키지',
  },
  {
    id: 7,
    imgSrc: '/images/solution/production07.png',
    name: '지류',
  },
  {
    id: 8,
    imgSrc: '/images/solution/production08.png',
    name: '금속뱃지',
  },
  {
    id: 9,
    imgSrc: '/images/solution/production09.png',
    name: '피규어,틴케이스',
  },
  {
    id: 10,
    imgSrc: '/images/solution/production10.png',
    name: '마스킹테이프',
  },
];

export default function ProductionMobile() {
  return (
    <>
      <div className=" pt-[60px]">
        {/* 탭 */}
        <NavMobile />

        {/* 배너 */}
        <div className="relative top-[0px] w-full overflow-hidden">
          <img
            src={'/images/solution/productionT.png'}
            alt=""
            className="min-w-[1200px] h-[160px] mx-auto object-cover"
          />
          <div className="absolute top-[30px] left-[30px]">
            <h2 className="font-bold text-[#000] text-[18px] mb-[6px]">
              검증된 퀄리티의 굿즈제작
            </h2>
            <p className="text-[12px]">
              퀄리티 확인이 완료된 굿즈만 제작합니다
            </p>
          </div>
        </div>

        {/* 텍스트 */}
        <div className=" pt-[40px] mx-auto text-[12px]">
          <div className="text-[#000] flex flex-col gap-[15px] justify-center items-center text-center">
            <strong className="font-bold text-[16px]">
              다양한 굿즈 제작을 한 번에
            </strong>
            <p>
              오즈의제작소는 지류, 아크릴, 의류, 패키지, PVC 등<br />
              다양한 분야의 굿즈를 전문적으로 만들 수 있습니다.
            </p>
          </div>
        </div>

        {/* 이미지 */}
        <div className="w-full overflow-x-auto px-[20px] pt-[20px]">
          <ul className="flex gap-[10px] flex-nowrap">
            {Imgs.map((item) => (
              <li key={item.id} className="flex-shrink-0 w-[100px]">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-[113px] object-cover"
                />
                <h3 className="pt-[6px] text-[12px] text-black text-center whitespace-nowrap">
                  {item.name}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <CareMatchMobile />
        <EasyDoneMobile />
        <PartnersMobile />
        <FaqTablet />
      </div>
    </>
  );
}
