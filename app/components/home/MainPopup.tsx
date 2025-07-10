'use client';

import Image from 'next/image';
import React from 'react';

interface MainPopupProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    imgSrc: string;
    name: string;
    partner: string;
    tag: string[];
  } | null;
}

export default function MainPopup({ isOpen, onClose, item }: MainPopupProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.69)] z-15 px-[50px]">
      <div className="relative bg-white w-[792px] h-[auto] rounded-[12px] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[22px] bg-[rgba(0,0,0,0.74)] text-white px-[15px] py-[10px] rounded-full text-[14px] max-sm:right-[15px] max-sm:top-[18px] max-sm:py-[8px] max-sm:px-[10px] max-sm:text-[10px]"
        >
          ✖
        </button>
        <Image
          src={item.imgSrc}
          alt={item.name}
          width={792}
          height={594}
          priority
          className="w-full h-auto rounded-tr-[20px] rounded-tl-[20px]"
        />
        <div className="p-[16px_24px] max-md:p-[16px_24px] max-sm:p-[12px_20px]">
          <h2 className="text-[20px] text-[#000] font-bold max-md:text-[16px] max-sm:text-[14px]">
            [{item.partner}] {item.name}
          </h2>
          <p className="text-[18px] max-md:text-[15px] max-sm:text-[12px]">
            # {item.tag?.join(' # ')}
          </p>
        </div>
      </div>
    </div>
  );
}
