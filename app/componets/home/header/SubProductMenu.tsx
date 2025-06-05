'use client';

import { useState } from 'react';
import Link from 'next/link';
import { productMenu } from '@/app/componets/home/header/Gnb';
import Image from 'next/image';

interface MenuItem {
  label: string;
  href: string;
  sub?: MenuItem[];
}

export default function SubProductMenu({
  items,
  activeIndex,
}: {
  items: MenuItem[];
  activeIndex: number;
}) {
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null);

  const toggleDepth3 = (index: number) => {
    setActiveSubItem(index === activeSubItem ? null : index);
  };

  return (
    <div className="p-[25px] rounded bg-[#eee] w-[80%]">
      {productMenu[activeIndex] ? (
        <ul>
          {productMenu[activeIndex].map((item, index) => (
            <li key={index} className="mb-2">
              {item.sub ? (
                <>
                  <button
                    onClick={() => toggleDepth3(index)}
                    className="hover:font-bold"
                  >
                    {item.label}
                    <Image
                      src={'/icons/gray_arrow.svg'}
                      width={6}
                      height={6}
                      alt=""
                      className={`ml-[10px] mt-[5px] ${
                        activeSubItem === index ? 'rotate-270' : 'rotate-90'
                      } mb-[10px]`}
                    />
                  </button>
                  {activeSubItem === index && (
                    <ul className="ml-4 mt-2">
                      {item.sub.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="hover:text-point1"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} className="hover:text-point1">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">해당 카테고리에는 하위 메뉴가 없습니다.</p>
      )}
    </div>
  );
}
