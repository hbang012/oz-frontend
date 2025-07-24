'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const tabs = [
  { label: '굿즈 추천', type: 'consulting' },
  { label: '굿즈 제작', type: 'production' },
  { label: '디자인 솔루션', type: 'design' },
  { label: '패키징', type: 'packaging' },
  { label: '풀필먼트', type: 'fulfillment' },
];

export default function NavDesktop() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentType = searchParams.get('type') || 'default';

  const onClick = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', type);
    router.replace(`/solution?${params.toString()}`);
  };

  return (
    <nav className="pt-[40px]">
      <ul className="flex justify-center items-center gap-[25px] border-b border-[#eee]">
        {tabs.map(({ label, type }) => {
          const isActive = currentType === type;
          return (
            <li key={type} className="w-[240px] text-center pb-[15px]">
              <button
                type="button"
                onClick={() => onClick(type)}
                className={`text-[20px] ${
                  isActive
                    ? 'text-[#000] font-bold border-point1'
                    : 'text-[#777] border-transparent'
                }`}
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
