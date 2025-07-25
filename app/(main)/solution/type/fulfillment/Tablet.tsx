import CareMatchTablet from '@/app/(main)/solution/shared/CareMatchTablet';
import EasyDoneTablet from '@/app/(main)/solution/shared/EasyDoneTablet';
import FaqTablet from '@/app/(main)/solution/shared/FaqTablet';
import NavTablet from '@/app/(main)/solution/shared/NavTablet';
import PartnersTablet from '@/app/(main)/solution/shared/PartnersTablet';

export default function FulfillmentTablet() {
  return (
    <>
      <div className=" pt-[60px]">
        {/* 탭 */}
        <NavTablet />

        {/* 배너 */}
        <div className="relative top-[0px] w-full overflow-hidden">
          <img
            src={'/images/solution/fulfillmentT.png'}
            alt=""
            className="min-w-[1200px] h-[160px] mx-auto object-cover"
          />
          <div className="absolute top-[30px] left-[30px]">
            <h2 className="font-bold text-[#000] text-[18px] mb-[6px]">
              판매를 위해 필요한 배송까지!
            </h2>
            <p className="text-[12px]">
              저렴한 가격으로 물류보관, 개별배송 가능합니다
            </p>
          </div>
        </div>

        {/* 텍스트 */}
        <div className=" pt-[40px] mx-auto text-[12px]">
          <div className="text-[#000] flex flex-col gap-[15px] justify-center items-center text-center">
            <strong className="font-bold text-[16px]">
              배송처리까지 깔끔하게
            </strong>
            <p>
              번거로운 배송관리는 오즈의제작소에 맡겨보세요.
              <br />
              물류보관, 택배포장, 개별배송까지
              <br />
              풀필먼트 서비스로 굿즈판매와 운영을 효율적으로 지원합니다.
            </p>
          </div>
        </div>

        {/* 이미지 */}
        <div className="p-[40px_30px_0px] flex justify-center items-center">
          <img src={'/images/solution/fulfillment01.png'} alt="" />
        </div>

        <CareMatchTablet />
        <EasyDoneTablet />
        <PartnersTablet />
        <FaqTablet />
      </div>
    </>
  );
}
