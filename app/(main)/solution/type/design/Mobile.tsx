import CareMatchMobile from '@/app/(main)/solution/shared/CareMatchMobile';
import EasyDoneMobile from '@/app/(main)/solution/shared/EasyDoneMobile';
import FaqTablet from '@/app/(main)/solution/shared/FaqTablet';
import NavMobile from '@/app/(main)/solution/shared/NavMobile';
import PartnersMobile from '@/app/(main)/solution/shared/PartnersMobile';

export default function DesignMobile() {
  return (
    <>
      <div className=" pt-[60px]">
        {/* 탭 */}
        <NavMobile />

        {/* 배너 */}
        <div className="relative top-[0px] w-full overflow-hidden">
          <img
            src={'/images/solution/designT.jpg'}
            alt=""
            className="min-w-[1200px] h-[160px] mx-auto object-cover"
          />
          <div className="absolute top-[30px] left-[30px]">
            <h2 className="font-bold text-[#000] text-[18px] mb-[6px]">
              디자인이 어렵거나 <br />
              시간이 부족하다면?
            </h2>
            <p className="text-[12px]">디자인 걱정도 그만!</p>
          </div>
        </div>

        {/* 텍스트 */}
        <div className=" pt-[40px] mx-auto text-[12px]">
          <div className="text-[#000] flex flex-col gap-[15px] justify-center items-center text-center">
            <strong className="font-bold text-[16px]">디자인도 편하게</strong>
            <p>
              굿즈 제작을 위해서 필요한 디자인들을 맡겨보세요.
              <br />
              칼선 제작부터 디자인 소스를 활용한 상품 디자인, 캐릭터 창작까지
              진행합니다.
            </p>
            <p className="mt-[20px]">
              새롭게 탄생된 디자인으로, 나만의 굿즈를 만들어보세요.
            </p>
          </div>
        </div>

        {/* 이미지 */}
        <ul className="flex justify-center items-center gap-[10px] p-[40px_20px]">
          <li className="flex flex-col gap-[10px] w-full p-[10px] rounded-[8px] border border-[#d8d8d8]">
            <img src={'/images/solution/cutting.png'} alt="" className="" />
            <h3 className="font-bold text-center text-black text-[18px]">
              칼선 제작
            </h3>
          </li>
          <li className="flex flex-col gap-[10px] w-full p-[10px] rounded-[8px] border border-[#d8d8d8]">
            <img
              src={'/images/solution/designCreation.png'}
              alt=""
              className=""
            />
            <h3 className="font-bold text-center text-black text-[18px]">
              디자인소스 응용/창작
            </h3>
          </li>
          <li className="flex flex-col gap-[10px] w-full p-[10px] rounded-[8px] border border-[#d8d8d8]">
            <img src={'/images/solution/bici.png'} alt="" className="" />
            <h3 className="font-bold text-center text-black text-[18px]">
              BI/CI 제작
            </h3>
          </li>
          <li className="flex flex-col gap-[10px] w-full p-[10px] rounded-[8px] border border-[#d8d8d8]">
            <img src={'/images/solution/character.png'} alt="" className="" />
            <h3 className="font-bold text-center text-black text-[18px]">
              캐릭터 창작
            </h3>
          </li>
        </ul>

        <CareMatchMobile />
        <EasyDoneMobile />
        <PartnersMobile />
        <FaqTablet />
      </div>
    </>
  );
}
