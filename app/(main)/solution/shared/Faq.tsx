'use client';

import { useState } from 'react';

const items = [
  {
    title: '진행 절차가 어떻게 되나요?',
    content: [
      {
        type: 'boldText',
        content: '1. 문의 신청 → 담당자 매칭',
      },
      {
        type: 'text',
        content: '문의 신청을 해주시면 1:1로 전문 담당자가 매칭됩니다.',
      },
      {
        type: 'boldText',
        content: '2. 추천서/견적서 전달',
      },
      {
        type: 'text',
        content:
          '요청주신 내용을 기반으로 굿즈 추천서 혹은 견적서를 전달드립니다.',
      },
      {
        type: 'boldText',
        content: '3. 추가 서비스 가능',
      },
      {
        type: 'text',
        content:
          '제작 진행 외에 디자인, 검수 및 포장, 개별 배송까지 가능합니다.',
      },
      {
        type: 'boldText',
        content: '4. 문의 후 연락',
      },
      {
        type: 'text',
        content:
          '문의하기 페이지에서 문의를 남겨주시면 영업일 1~3일 내로 연락드리겠습니다.',
      },
      {
        type: 'button',
        content: '문의하기',
      },
    ],
  },
  {
    title: '결제 방법 및 입금 안내',
    content: [
      {
        type: 'boldText',
        content: '결제 방식',
      },
      {
        type: 'text',
        content:
          '계좌이체 (세금계산서, 현금영수증 발급) 또는 카드결제로 진행됩니다.',
      },
      {
        type: 'text',
        content:
          '별도 결제 시스템을 통해 진행이 가능한 경우에는 별도로 말씀해주세요.',
      },
      {
        type: 'boldText',
        content: '입금 방식',
      },
      {
        type: 'text',
        content:
          '선급금은 주문일에 진행해주시고, 완수금은 상품 출고일로부터 14일 내로 입금해주세요.',
      },
      {
        type: 'text',
        content:
          '지출 가능하신 날짜가 고정된 경우, 입금 예상일을 미리 말씀 부탁드립니다.',
      },
    ],
  },
  {
    title: '웹사이트에 없는 굿즈제작도 가능할까요?',
    content: [
      {
        type: 'boldText',
        content: '네 가능합니다.',
      },
      {
        type: 'text',
        content:
          '다만 희망하시는 굿즈의 형태, 최소수량, 납기일 등의 이슈로 제작이 불가능할 수도 있습니다.',
      },
      {
        type: 'text',
        content: '상담을 주시면 가능여부를 파악한 후 회신 드리겠습니다.',
      },
      {
        type: 'button',
        content: '문의하기',
      },
    ],
  },

  {
    title: '배송대행은 어떻게 진행되나요?',
    content: [
      {
        type: 'boldText',
        content: '배송대행은 개별 주소지로 배송을 진행해드리는 서비스입니다.',
      },
      {
        type: 'text',
        content:
          '주로 판매, 크라우드펀딩, 웰컴키트 전달 등을 하실때 많이 사용하십니다.',
      },
      {
        type: 'text',
        content:
          '사전에 출고일, 출고수량을 말씀해주시면 배송을 위한 준비를 진행해 둡니다.',
      },
      {
        type: 'text',
        content:
          '발송인 및 수취인 정보, 수량 정보를 전달주시면 출고 전 송장번호를 공유드립니다.',
      },
    ],
  },
  {
    title: '굿즈를 오즈의제작소에 보관할 수 있나요?',
    content: [
      {
        type: 'boldText',
        content: '네 가능합니다.',
      },
      {
        type: 'text',
        content: '보관 비용은 1팔레트당 월 5만원(vat별도)의 비용이 발생합니다.',
      },
      {
        type: 'text',
        content: '제품 사이즈와 수량에 따라 팔레트 수는 달라집니다.',
      },
      {
        type: 'text',
        content:
          '보관을 희망하신다면 보관 기간, 출고 횟수, 보관 형태를 전달 담당자에게 말씀해주시면 회신 드리겠습니다.',
      },
    ],
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div>
      <h2 className="flex justify-center items-center font-bold text-[24px] text-[#000] mb-[30px]">
        FAQ
      </h2>

      <ul className="flex flex-col ">
        {items.map(({ title, content }, idx) => (
          <li key={idx} className="border-t">
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex justify-between w-full text-left text-[18px] text-[#000] pt-[25px]"
            >
              {title}
              <img
                src="/icons/up.svg"
                alt=""
                className={`transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <div className="mb-[30px]">
              {openIndex === idx &&
                (Array.isArray(content) ? (
                  content.map((block, bIdx) => {
                    if (block.type === 'boldText') {
                      return (
                        <p
                          key={`bold-${bIdx}`}
                          className="text-[14px] font-bold text-[#222] leading-[1.6] mt-[8px] mb-[4px]"
                        >
                          {block.content}
                        </p>
                      );
                    }
                    if (block.type === 'text') {
                      return (
                        <p
                          key={`text-${bIdx}`}
                          className="text-[14px] text-[#555] leading-[1.6] mb-[6px]"
                        >
                          {block.content}
                        </p>
                      );
                    }
                    if (block.type === 'button') {
                      return (
                        <button
                          key={`btn-${bIdx}`}
                          type="button"
                          className="text-point1 bg-[#eae8fc] px-[14px] py-[10px] text-[13px] rounded-[6px] w-fit mt-[4px] "
                        >
                          {block.content}
                        </button>
                      );
                    }
                  })
                ) : (
                  <p className="text-[14px] text-[#555] leading-[1.6] mb-[6px] ">
                    {content}
                  </p>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
