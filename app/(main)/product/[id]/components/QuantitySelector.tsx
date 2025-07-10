'use client';

import { QtyTier } from '@/app/_lib/types/QtyTier';
import { useState } from 'react';

interface Props {
  tiers: QtyTier[];
  selectedQty: number;
  onSelectQty: (qty: number) => void;
}

export default function QuantitySelector({
  tiers,
  selectedQty,
  onSelectQty,
}: Props) {
  const [showQtyOptions, setShowQtyOptions] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center" style={{ gap: '10px' }}>
        <div className="w-[100px] text-[14px] text-[#555] font-bold">수량</div>
        <div
          onClick={() => setShowQtyOptions((p) => !p)}
          className="flex justify-center items-center w-full border border-[#d8d8d8] rounded-[8px]"
          style={{ height: '46px', padding: '0 16px', background: '#fff' }}
        >
          <span>{selectedQty}개</span>
        </div>
      </div>

      {showQtyOptions && (
        <ul
          className="flex flex-col absolute z-10 rounded-[10px]"
          style={{
            top: '100%',
            left: '20%',
            padding: '8px 0',
            background: '#fff',
            boxShadow: 'rgba(0,0,0,0.08) 0px 2px 12px',
            width: '80%',
          }}
        >
          {tiers.map((t) => (
            <li
              key={t.minQty}
              onClick={() => {
                onSelectQty(t.minQty);
                setShowQtyOptions(false);
              }}
              className="hover:bg-[#f5f4ff]"
              style={{ padding: '10px 16px' }}
            >
              {t.minQty}개 이상 (개당 {t.unitPrice.toLocaleString()}원)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
