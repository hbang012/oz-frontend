'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const tabs = [
  { label: '굿즈 추천', type: 'consulting' },
  { label: '굿즈 제작', type: 'production' },
  { label: '디자인 솔루션', type: 'design' },
  { label: '패키징', type: 'packaging' },
  { label: '풀필먼트', type: 'fulfillment' },
];

export default function NavMobile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentType = searchParams.get('type') || 'default';

  const onClick = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', type);
    router.replace(`/solution?${params.toString()}`);
  };

  return (
    <nav className="pt-[10px] overflow-x-auto">
      <ul className="flex flex-nowrap items-center gap-[25px]">
        {tabs.map(({ label, type }) => {
          const isActive = currentType === type;
          return (
            <li key={type} className="flex-none w-[100px]">
              <button
                type="button"
                onClick={() => onClick(type)}
                className={`
              block             
              w-full
              text-[15px]        
              text-center
              whitespace-nowrap   
              pb-[10px]
              ${
                isActive
                  ? 'text-[#000] font-bold border-b-4 border-point1'
                  : 'text-[#777] border-transparent'
              }
            `}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
