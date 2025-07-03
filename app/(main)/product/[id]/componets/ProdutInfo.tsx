'use client';

import { Product } from '@/app/_lib/types/product';
import { Stick } from 'next/font/google';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const TABS = ['상품소개', '작업가이드', '교환/반품'] as const;
type Tab = (typeof TABS)[number];

export default function ProdutInfo() {
  // 상품별 선택
  const [activeTab, setActiveTab] = useState<Tab>('상품소개');

  const params = useParams();
  const rawId = params.id!;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);
  const productId: string = Array.isArray(rawId) ? rawId[0] : rawId;

  // 스티키 처리 상태
  const [isSticky, setIsSticky] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);
  const stickyThresh = useRef<number>(0);

  // 헤더 높이 만큼 오프셋
  const HEADER_HEIGHT = 86;

  // 섹션별 ref
  const sectionRefs = {
    상품소개: useRef<HTMLDivElement>(null),
    작업가이드: useRef<HTMLDivElement>(null),
    '교환/반품': useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    if (!productId) return;

    fetch(`http://localhost:3001/product/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setProduct(json))
      .catch((err) => {
        console.error('상세 조회 실패:', err);
        setError(true);
      });
  }, [productId]);

  // 초기 위치 계산
  useEffect(() => {
    if (!product) return;
    const el = tabRef.current;
    if (!el) return;
    stickyThresh.current = el.offsetTop - HEADER_HEIGHT;
  }, [product]);

  // 스크롤 핸들러
  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > stickyThresh.current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (error) return <p>상품을 불러오지 못했습니다.</p>;
  if (!product) return <p>로딩 중...</p>;

  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
    sectionRefs[tab].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div style={{ padding: ' 120px 0px 20px 0px' }}>
      <div
        ref={tabRef}
        className="flex"
        style={{
          position: isSticky ? 'fixed' : 'static',
          top: isSticky ? HEADER_HEIGHT : undefined,
          left: '0',
          right: '0',
          backgroundColor: isSticky ? '#fff' : 'transparent',
          zIndex: isSticky ? 20 : 'auto',
          boxShadow: isSticky ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => handleClick(tab)}
              className="flex items-center justify-center text-[17px]"
              style={{
                height: '50px',
                width: '100%',
                backgroundColor: isActive ? '#6b59f6' : 'transparent',
                color: isActive ? '#fff' : '#777',
                fontWeight: isActive ? 'bold' : 'normal',
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* 아이템별 상품소개 */}
      <div
        ref={sectionRefs.상품소개}
        className="flex justify-between"
        style={{ padding: '80px 30px 0px 30px' }}
      >
        <div style={{ paddingRight: '30px' }}>
          <h3
            className="font-bold text-[30px] border-b-1"
            style={{ paddingBottom: '15px' }}
          >
            {product.name}
          </h3>
          <p className="text-[16px] text-[#555]" style={{ paddingTop: '15px' }}>
            {product.description}
          </p>
        </div>

        {/* 여기에 아이템별 이미지 */}
        <Image
          src={`http://localhost:3001${product.image_url}`}
          alt={product.name}
          width={800}
          height={600}
          priority
          className="rounded-[20px]"
          style={{ background: '#f3efe9' }}
        />
      </div>

      {/* 작업 가이드 */}
      <div ref={sectionRefs.작업가이드} style={{ paddingTop: '20px' }}>
        <Image
          src={'/images/info/more.png'}
          width={1200}
          height={3257}
          priority
          alt=""
        />
      </div>

      {/* 환불/반품 */}
      <div
        ref={sectionRefs['교환/반품']}
        style={{ padding: '0px 30px 0px 30px' }}
      >
        <div
          style={{
            paddingTop: '40px',
            paddingBottom: '50px',
            borderBottom: '0.5px dashed rgb(203, 203, 203)',
          }}
        >
          <div style={{ marginBottom: '14px' }}>
            <h3 className="text-[14px] font-bold text-[#000]">
              반품/교환 안내
            </h3>
            <p className="text-[12px] text-[#626262]">
              반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지
              주소 등을 협의하신 후 반품상품을 발송해 주시기 바랍니다.
            </p>
          </div>

          <div
            className="flex flex-col"
            style={{ border: '0.5px solid rgb(203, 203, 203)' }}
          >
            {/* 판매자 지정 택배사 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                판매자 지정 택배사
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                CJ대한통운
              </p>
            </div>

            {/* 반품 배송비 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                반품 배송비
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                4,000원
              </p>
            </div>

            {/* 교환 배송비 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                교환 배송비
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                8,000원
              </p>
            </div>

            {/* 보내실 곳 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                보내실 곳
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                서울특별시 마포구 성미산로80 4,5층 (주)콘콘
              </p>
            </div>

            {/* 요청 가능 기간 */}
            <div
              className="flex items-center"
              style={{
                borderBottom: '0.5px solid rgb(203, 203, 203)',
              }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '30px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                  height: '100%',
                }}
              >
                반품/교환 사유에 따른 요청 가능 기간
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                구매자 단순 변심은 상품 수령 후 7일 이내 (구매자 반품배송비
                부담) 표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내
                혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내 (판매자 반품
                배송비 부담) 둘 중 하나 경과 시 반품/교환 불가
              </p>
            </div>

            {/* 반품/교환 불가능 사유 */}
            <div className="flex items-center">
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '60px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                  height: '100%',
                }}
              >
                반품/교환 불가능 사유
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                1.반품요청기간이 지난 경우 <br /> 2.구매자의 책임있는 사유로
                상품 등이 멸실 또는 훼손된 경우 (단, 상품의 내용을 확인하기
                위하여 포장 등을 훼손한 경우는 제외) <br /> 3.구매자가 상품을
                사용 혹은 소비를 한 경우 <br />
                4.고객의 요청사항에 맞춰 제작에 들어가는 맞춤제작상품의 경우
                (판매자에게 회복불가능한 손해가 예상되고, 그러한 예정으로
                청약철회권 행사가 불가하다는 사실을 서면 동의 받은 경우)
              </p>
            </div>
          </div>
        </div>

        {/* 주의사항 */}
        <div
          style={{
            padding: '40px 0px',
            borderBottom: '0.5px dashed rgb(203, 203, 203)',
          }}
        >
          <h3
            className="text-[14px] text-[#000]"
            style={{ paddingBottom: '15px' }}
          >
            주의사항
          </h3>
          <p className="text-[12px]">
            전자상거래 등에서의 소비자보호에 관한 법률에 의한 반품규정이
            판매자가 지정한 반품 조건보다 우선합니다. <br />
            전자상거래 등에서의 소비자보호에 관한 법률에 의거하여 미성년자가
            물품을 구매하는 경우, 법정대리인이 동의하지 않으면 미성년자 본인
            또는 법정대리인이 구매취소할 수 있습니다.
          </p>
        </div>

        {/* 상품정보 제공고시 */}
        <div
          style={{
            padding: '0px 0px 50px 0px',
            borderBottom: '0.5px dashed rgb(203, 203, 203)',
          }}
        >
          <div style={{ margin: '50px 0px 14px 0px' }}>
            <h3 className="text-[14px] font-bold text-[#000]">
              상품정보 제공고시
            </h3>
          </div>

          <div
            className="flex flex-col"
            style={{ border: '0.5px solid rgb(203, 203, 203)' }}
          >
            {/* 품명 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                품명
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                상품 상세 참조
              </p>
            </div>

            {/* 반품 배송비 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                모델명
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                상품 상세 참조
              </p>
            </div>

            {/* 법 사항 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                법에 의한 인증, 허가 등을 받았음을 확인할 수 있는 경우 그에 대한
                사항
              </h3>
              <p
                className="flex items-center text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                상품 상세 참조
              </p>
            </div>

            {/* 제조사 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                제조사
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                상품 상세 참조
              </p>
            </div>

            {/* as */}
            <div className="flex h-[38px]">
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                AS 책임자와 전화번호
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                상품 상세 참조
              </p>
            </div>
          </div>
        </div>

        {/* 거래조건에 관한 정보 */}
        <div>
          <div style={{ margin: '50px 0px 14px 0px' }}>
            <h3 className="text-[14px] font-bold text-[#000]">
              거래조건에 관한 정보
            </h3>
          </div>

          <div
            className="flex flex-col"
            style={{ border: '0.5px solid rgb(203, 203, 203)' }}
          >
            {/* 예상 배송 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                주문 이후 예상되는 배송기간
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                주문 시안 확정 후 15 ~ 55일 이내 발송
              </p>
            </div>

            {/* 거래 약관 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                거래에 관한 약관의 내용 또는 확인할 수 있는 방법
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                상품상세 페이지 및 페이지 하단의 이용약관 링크를 통해 확인할 수
                있습니다.
              </p>
            </div>

            {/* 제품 하자 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '25px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                제품하자·오배송 등에 따른 청약철회 등의 경우 청약철회 등을 할 수
                있는 기간 및 통신판매업자가 부담하는 반품비용 등에 관한 정보
              </h3>
              <p
                className="flex items-center text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                전자상거래등에서의소비자보호에관한법률 등에 의한 제품의 하자
                또는 오배송 등으로 인한 청약철회의 경우에는 상품 수령 후 3개월
                이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에
                청약철회를 할 수 있으며, 반품 비용은 통신판매업자가 부담합니다.
              </p>
            </div>

            {/* 단순변심 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '20px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                제품하자가 아닌 소비자의 단순변심, 착오구매에 따른 청약철회등이
                불가능한 경우 그 구체적 사유와 근거
              </h3>
              <p
                className="flex items-center text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 청약철회
                제한 사유에 해당하는 경우 및 기타 객관적으로 이에 준하는 것으로
                인정되는 경우 청약철회가 제한될 수 있습니다.
              </p>
            </div>

            {/* 재화 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                재화등의 교환·반품·보증 조건 및 품질보증기준
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.
              </p>
            </div>

            {/* 대금 환불 */}
            <div
              className="flex h-[38px]"
              style={{ borderBottom: '0.5px solid rgb(203, 203, 203)' }}
            >
              <h3
                className="flex items-center text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                대금을 환불받기 위한 방법과 환불이 지연될 경우 지연에 따른
                배상금을 지급받을 수 있다는 사실 및 배상금 지급의 구체적 조건 및
                절차
              </h3>
              <p
                className=" text-[#4f4f4f] text-[12px] flex items-center"
                style={{ padding: '20px 20px', width: '596px' }}
              >
                주문취소 및 대금의 환불은 주문 내역 페이지에서 신청할 수 있으며,
                전자상거래 등에서의 소비자보호에 관한 법률에 따라 소비자의
                청약철회 후 판매자가 재화 등을 반환 받은 날로부터 3영업일 이내에
                지급받은 대금의 환급을 정당한 사유 없이 지연하는 때에는 소비자는
                지연기간에 대해서 연 15%의 지연배상금을 판매자에게 청구할 수
                있습니다.
              </p>
            </div>

            {/* 소비자피해보상 */}
            <div className="flex h-[38px]">
              <h3
                className="flex text-[12px]"
                style={{
                  padding: '10px 20px',
                  borderRight: '0.4px solid rgb(203, 203, 203)',
                  background: 'rgb(248, 248, 248)',
                  width: '300px',
                }}
              >
                소비자피해보상의 처리, 재화등에 대한 불만 처리 및 소비자와
                사업자 사이의 분쟁처리에 관한 사항
              </h3>
              <p
                className="flex items-center text-[#4f4f4f] text-[12px]"
                style={{ padding: '10px 20px', width: '596px' }}
              >
                소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
