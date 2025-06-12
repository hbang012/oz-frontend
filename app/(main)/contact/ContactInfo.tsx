// 문의항목
'use client';

import { useState } from 'react';

export default function ContactInfo() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="flex">
        <h3
          className="text-[18px] text-[#333] font-medium"
          style={{ paddingTop: '40px' }}
        >
          문의항목 (중복 가능)
        </h3>
        <span
          className="text-point1"
          style={{ fontSize: '8px', paddingTop: '43px', marginLeft: '1px' }}
        >
          ●
        </span>
      </div>
      <ul
        className="flex flex-wrap gap-[10px]"
        style={{
          maxWidth: '889px',
        }}
      >
        <li>
          <button
            type="button"
            className={`flex justify-center items-center h-[48px] border rounded-[8px] 
        ${
          clicked
            ? 'border-[3px] border-[#000] text-[#000]'
            : 'border border-[#d8d8d8] text-[#999]'
        }
      `}
            style={{ padding: '20px' }}
            onClick={() => setClicked(!clicked)}
          >
            가격
          </button>
        </li>
      </ul>
    </div>
  );
}
