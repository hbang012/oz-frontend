import CareMatch from '@/app/(main)/solution/shared/CareMatch';
import EasyDoneDesktop from '@/app/(main)/solution/shared/EasyDoneDesktop';
import Faq from '@/app/(main)/solution/shared/Faq';
import NavDesktop from '@/app/(main)/solution/shared/NavDesktop';
import PartnersDesktop from '@/app/(main)/solution/shared/PartnersDesktop';

export default function FulfillmentDesktop() {
  return (
    <>
      {/* 배너 */}
      <header className="relative top-[85px] w-full overflow-hidden">
        <img
          src={'/images/solution/fulfillment.png'}
          alt=""
          className="min-w-[1200px] h-[220px] mx-auto object-cover"
        />
        <div className="absolute top-[55px] right-[60%]">
          <h2 className="font-bold text-[#000] text-[32px] mb-[6px]">
            판매를 위해 필요한 배송까지!
          </h2>
          <p>저렴한 가격으로 물류보관, 개별배송 가능합니다</p>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto pt-[85px]">
        {/* 탭 */}
        <NavDesktop />

        {/* 텍스트 */}
        <div className=" pt-[70px] mx-auto">
          <div className="text-[#000] flex flex-col gap-[15px] justify-center items-center text-center">
            <strong className="font-bold text-[20px]">
              배송처리까지 깔끔하게
            </strong>
            <p className="text-[16px]">
              번거로운 배송관리는 오즈의제작소에 맡겨보세요.
              <br />
              물류보관, 택배포장, 개별배송까지 <br />
              풀필먼트 서비스로 굿즈판매와 운영을 효율적으로 지원합니다.
            </p>
          </div>
        </div>

        {/* 이미지 */}
        <div className="p-[40px_30px_0px] flex justify-center items-center">
          <img src={'/images/solution/fulfillment01.png'} alt="" />
        </div>

        <CareMatch />
        <EasyDoneDesktop />
        <PartnersDesktop />
        <Faq />
      </main>
    </>
  );
}
