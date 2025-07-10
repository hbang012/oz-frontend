import Image from 'next/image';

const partnerGroups = [
  [
    { id: 1, imgSrc: '/images/partner/nexon.png' },
    { id: 2, imgSrc: '/images/partner/smentertainment.png' },
    { id: 3, imgSrc: '/images/partner/jyp.png' },
    { id: 4, imgSrc: '/images/partner/SKtelecomT1.png' },
    { id: 5, imgSrc: '/images/partner/lotteworld.png' },
    { id: 6, imgSrc: '/images/partner/daewin.png' },
    { id: 7, imgSrc: '/images/partner/pokemon.png' },
  ],
  [
    { id: 8, imgSrc: '/images/partner/krafton.png' },
    { id: 9, imgSrc: '/images/partner/tiktok.png' },
    { id: 10, imgSrc: '/images/partner/afreecatv.png' },
    { id: 11, imgSrc: '/images/partner/mamaawards.png' },
    { id: 12, imgSrc: '/images/partner/makestar.png' },
    { id: 13, imgSrc: '/images/partner/sweetspot.png' },
    { id: 14, imgSrc: '/images/partner/musinsa.png' },
  ],
  [
    { id: 15, imgSrc: '/images/partner/ylab.png' },
    { id: 16, imgSrc: '/images/partner/chai.png' },
    { id: 17, imgSrc: '/images/partner/thinkyoung.png' },
    { id: 18, imgSrc: '/images/partner/Pinkfong.png' },
    { id: 19, imgSrc: '/images/partner/thegrmm.png' },
    { id: 20, imgSrc: '/images/partner/unicef.png' },
    { id: 21, imgSrc: '/images/partner/NationalMuseumofKorea.png' },
  ],
  [
    { id: 22, imgSrc: '/images/partner/sk.png' },
    { id: 23, imgSrc: '/images/partner/gsshop.png' },
    { id: 24, imgSrc: '/images/partner/cj.png' },
    { id: 25, imgSrc: '/images/partner/lg.png' },
    { id: 26, imgSrc: '/images/partner/hanwha.png' },
    { id: 27, imgSrc: '/images/partner/hanabank.png' },
    { id: 28, imgSrc: '/images/partner/SeoulEducation.png' },
  ],
];

export default function MainPartner() {
  return (
    <div className="pt-[100px] max-w-[1200px] mx-auto max-sm:pt-[60px]">
      <div className="text-center">
        <p className="text-[18px] text-point1 fade-up max-md:text-[15px]">
          스타트업부터 대기업까지
        </p>
        <h2 className="mt-[9px] font-bold text-[#000] text-[32px] fade-up2 max-md:text-[24px] max-md:mt-[4px]">
          다양한 기업이 오즈를 믿고 선택했어요
        </h2>
      </div>

      {/* 파트너 그룹 */}
      {partnerGroups.map((group, groupIndex) => (
        <ul
          key={groupIndex}
          className="flex justify-center gap-4 max-sm:static max-sm:grid max-sm:grid-cols-4 grid-rows-7"
        >
          {group.map((item) => (
            <li key={item.id} className="mt-[40px] w-full fade-up3">
              <Image
                src={item.imgSrc}
                alt=""
                width={120}
                height={60}
                priority
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
