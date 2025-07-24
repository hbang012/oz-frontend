'use client';

import { useState } from 'react';

const items = [
  {
    title: '진행 절차가 어떻게 되나요?',
    content:
      '문의 신청을 해주시면 1:1로 전문 담당자가 매칭됩니다.\n 요청주신 내용을 기반으로 굿즈 추천서 혹은 견적서를 전달드립니다.\n제작 진행외에 디자인, 검수 및 포장, 개별 배송까지 가능합니다.\n 문의하기 페이지에서 문의를 남겨주시면 영업일 1-3일 내로 연락드리겠습니다.',
  },
  { title: '결제방법이 어떻게 될까요?', content: '텍스트.' },
  { title: '웹사이트에 없는 굿즈제작도 가능할까요?', content: '텍스트.' },
  { title: '배송대행은 어떻게 진행되나요?', content: '텍스트.' },
  { title: '굿즈를 오즈의제작소에 보관할 수 있나요?', content: '텍스트.' },
];

export default function AccordionList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <ul className="flex flex-col ">
      {items.map(({ title, content }, idx) => (
        <li key={idx} className="border-t">
          <button
            type="button"
            onClick={() => toggle(idx)}
            className="w-full text-left text-[18px] text-[#000] py-[25px]"
          >
            {title}
          </button>

          {openIndex === idx && (
            <div className="text-[14px] text-[#555] mt-[4px] px-[2px] py-[15px]">
              {content}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
