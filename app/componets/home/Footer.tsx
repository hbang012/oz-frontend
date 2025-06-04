import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] mt-[40px] pb-[80px]">
      {/* 약관 */}
      <div className="w-[100%] border-t-1 border-b-1 border-[#eee] bg-[#fff] max-md:hidden">
        <ul className="max-w-[1200px] mx-auto flex justify-between text-[16px] text-[#333] p-[20px_0px]">
          <li>
            <Link href={'/'}>회사소개</Link>
          </li>
          <li>
            <Link href={'/'}>이용약관</Link>
          </li>
          <li>
            <Link href={'/'}>전자금융거래약관</Link>
          </li>
          <li>
            <Link href={'/'}>개인정보처리방침</Link>
          </li>
          <li>
            <Link href={'/'}>사업자등록증 다운로드</Link>
          </li>
          <li>
            <Link href={'/'}>통장사본 다운로드</Link>
          </li>
        </ul>
      </div>

      <div className="max-w-[1200px] mx-auto pt-[36px] pl-[20px] pr-[20px] flex justify-between">
        {/* 왼쪽 슬라이드 */}
        <div className="w-[320px] rounded-[10px] bg-[#f6f6f6] p-[20px_10px] max-md:hidden">
          <div className="flex gap-[20px] pb-[14px] border-b-1 border-[#d8d8d8]">
            <Image src={'/icons/ozicon.svg'} width={28} height={43} alt="" />
            <div className="">
              <p className="text-[12px] text-[#555] mb-[20px]">
                운영시간 | 평일 09:00 ~ 18:00
              </p>
              <p className="text-[12px] text-[#555]">협업 제휴 문의</p>
              <strong className="text-[16px] text-[#555] font-bold">
                contact@ozjejakso.com
              </strong>
            </div>
          </div>
          <p className="text-[10px] text-[#777] p-[14px_12px_0px]">
            본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
            밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를
            위반시 정보통신망법에 의해 형사 처벌 됨을 유념하시기 바랍니다.
          </p>
        </div>

        {/* 오른쪽 슬라이드 */}
        <div className="w-[792px] text-[14px]">
          {/* company-info-wrap */}
          <div>
            {/* 모바일 약관 */}
            <div className="hidden max-md:block">
              <ul className="flex flex-wrap gap-x-[10px] font-bold text-[13px] text-[#333] p-[20px_0px]">
                <li>
                  <Link href={'/'}>회사소개</Link>
                </li>
                <li>
                  <Link href={'/'}>이용약관</Link>
                </li>
                <li>
                  <Link href={'/'}>전자금융거래약관</Link>
                </li>
                <li>
                  <Link href={'/'}>개인정보처리방침</Link>
                </li>
                <li>
                  <Link href={'/'}>사업자등록증 다운로드</Link>
                </li>
                <li>
                  <Link href={'/'}>통장사본 다운로드</Link>
                </li>
              </ul>
            </div>
            <span className="font-bold">법인명</span> (주)콘콘{' '}
            <span className="text-gray-500 mx-2 font-normal">|</span>
            <span className="font-bold">대표이사</span> 서소영{' '}
          </div>
          <div>
            <span className="font-bold">사업자등록번호</span> 772-87-02399
            <span className="text-gray-500 mx-2 font-normal">|</span>
            <span className="font-bold">통신판매번호</span> 2022-서울송파-1404
            <div>
              <span className="font-bold">본점</span> 인천광역시 연수구
              송도문화로 119, B1006호
            </div>
            <div>
              <span className="font-bold">지점</span> 서울시 마포구 성미산로80
              4층 (주)콘콘
            </div>
            <span className="font-bold">운영시간</span> 평일 09:00 ~ 18:00
          </div>
          <p className="text-[11px] text-[#777] pt-[24px]">
            해당 사이트에서 판매되는 서비스에 대한 환불 시스템 및 민원의 책임은
            (주)콘콘에 있습니다. 민원담당자: 서소영 | 연락처: 070-4138-2111{' '}
            <br /> 본 사이트의 모든 정보, 콘텐츠, UI 등에 대한 무단 복제, 전송,
            배포, 스크래핑 등의 행위는 관련 법령에 의하여 엄격히 금지됩니다.
          </p>

          <div className="flex">
            <Image src={'/icons/inipay.svg'} width={40} height={40} alt="" />
            <p className="text-[12px] text-[#999] mt-[14px] ml-[10px]">
              고객님의 안전거래를 위해 결제 시 <br />
              KG이니시스 구매안전(에스크로)서비스를 이용하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
