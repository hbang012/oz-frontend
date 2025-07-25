import CareMatchMobile from '@/app/(main)/solution/shared/CareMatchMobile';
import EasyDoneMobile from '@/app/(main)/solution/shared/EasyDoneMobile';
import FaqTablet from '@/app/(main)/solution/shared/FaqTablet';
import NavMobile from '@/app/(main)/solution/shared/NavMobile';
import PartnersMobile from '@/app/(main)/solution/shared/PartnersMobile';

export default function ConsultingMobile() {
  return (
    <>
      <div className=" pt-[60px]">
        {/* 탭 */}
        <NavMobile />

        {/* 배너 */}
        <div className="relative top-[0px] w-full overflow-hidden">
          <img
            src={'/images/solution/consultingT.png'}
            alt=""
            className="min-w-[1200px] h-[160px] mx-auto object-cover"
          />
          <div className="absolute top-[30px] left-[30px]">
            <h2 className="font-bold text-[#000] text-[18px] mb-[6px]">
              1:1 큐레이션 덕분에, <br /> 굿즈제작이 쉬워진다
            </h2>
            <p className="text-[12px]">
              어떤 굿즈를 만들면 좋을지 고민하지 않아도 돼요!
            </p>
          </div>
        </div>

        {/* 텍스트 */}
        <div className=" pt-[40px] mx-auto">
          <div className="text-[#000] flex flex-col gap-[15px] justify-center items-center text-center">
            <strong className="font-bold text-[16px]">
              굿즈 고민은 이제 그만
            </strong>
            <p className="text-[12px]">
              1:1 전담 매니저가 매칭되어 <br />
              예산, 납기일, 수량, 컨셉, 사용 고객 특징에 맞는 굿즈를
              추천드립니다.
            </p>
          </div>
        </div>

        {/* 과정 인트로 */}
        <div className="flex justify-center p-[44px_20px_0]">
          <div className="relative w-[950px] border rounded-[15px] border-[#d8d8d8] p-[28px_41px_28px_32px]">
            <img
              src={'/images/solution/PcRest.png'}
              alt=""
              className="absolute top-[-21px] right-[37px] w-[79px] h-[51px]"
            />
            <h3 className="text-[16px] font-bold text-[#000] pb-[20px]">
              이런 분에게 추천해요
            </h3>
            <ul className="flex gap-[40px]">
              <li className="flex flex-col gap-[16px]">
                <p className="text-[#000] text-[14px]">
                  굿즈 제작이 처음이라 어떤걸 만들지{' '}
                  <span className="text-[#6b59f6] font-bold">막막해요</span>
                </p>
                <p className="text-[#000] text-[14px]">
                  N만원{' '}
                  <span className="text-[#6b59f6] font-bold">예산 내에서</span>{' '}
                  500명에게 전할 웰컴키트를 제작하고 싶어요
                </p>
                <p className="text-[#000] text-[14px]">
                  <span className="text-[#6b59f6] font-bold"> N월까지 </span>
                  제작가능한 굿즈가 무엇이 있을지 모르겠어요
                </p>
                <p className="text-[#000] text-[14px]">
                  흔하지 않는
                  <span className="text-[#6b59f6] font-bold">특색있는</span>
                  굿즈를 만들고 싶어요
                </p>
                <p className="text-[#000] text-[14px]">
                  여름 캠핑
                  <span className="text-[#6b59f6] font-bold">컨셉</span>의
                  굿즈를 제작하고 싶은데 무엇이 좋을지 모르겠어요
                </p>
                <p className="text-[#000] text-[14px]">
                  <span className="text-[#6b59f6] font-bold">
                    개당 1~2만원대
                  </span>
                  굿즈는 무엇이 있는지 궁금해요
                </p>
              </li>
            </ul>
          </div>
        </div>

        <CareMatchMobile />
        <EasyDoneMobile />
        <PartnersMobile />
        <FaqTablet />
      </div>
    </>
  );
}
