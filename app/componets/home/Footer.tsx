import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 mt-[40px] pb-[80px]">
      {/* 약관 */}
      <div className="w-[100%] border-t-1 border-b-1 border-[#eee] bg-[#fff] ">
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

      <div className="max-w-[1200px] mx-auto pt-[36px] flex justify-between">
        {/* 왼쪽 슬라이드 */}
        <div className="w-[320px] rounded-[10px] bg-[#f6f6f6] p-[20px_10px]">
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
        <div className="w-[792px]">
          {/* company-info-wrap */}
          <div>
            <span className="font-bold">법인명</span> (주)콘콘{' '}
            <span className="text-gray-500 mx-2 font-normal">|</span>
            <span className="font-bold">대표이사</span> 서소영{' '}
          </div>
        </div>
      </div>
    </footer>
  );
}
