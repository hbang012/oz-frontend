'use client';

import { useState } from 'react';
import { MenuItem, gnb } from '@/app/componets/home/header/Gnb';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <button
        className="absolute top-4 right-4 text-gray-500"
        onClick={onClose}
      >
        닫기 ✖
      </button>

      <ul className="flex flex-col gap-4 p-6">
        {gnb.map((item, index) => (
          <li key={index}>
            {item.sub ? (
              <button
                className="w-full text-left"
                onClick={() =>
                  setActiveSubMenu(activeSubMenu === index ? null : index)
                }
              >
                {item.label} ▼
              </button>
            ) : (
              <a href={item.href} className="block">
                {item.label}
              </a>
            )}

            {activeSubMenu === index && item.sub && (
              <ul className="ml-4 mt-2">
                {item.sub.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.href}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
