'use client';

import { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  iconSrc: string;
  initial?: boolean;
}

export default function ToggleSwitch({
  label,
  iconSrc,
  initial = false,
}: ToggleSwitchProps) {
  const [enabled, setEnabled] = useState(initial);
  const [showToast, setShowToast] = useState(false);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <>
      {/* 토스트 메시지 */}
      {showToast && (
        <div className="absolute top-[0%] left-[50%] translate-x-[-50%] z-[60]">
          <div className="bg-[#00000052] rounded-[30px] px-[18px] py-[12px] shadow-xl text-[#fff] text-[14px] w-[223px] h-[46px]">
            성공적으로 업데이트 되었습니다!
          </div>
        </div>
      )}

      {/* 항목 */}
      <li className="flex justify-between items-center p-[8px_0px]">
        <div className="flex items-center">
          <img
            src={iconSrc}
            alt={`${label} 아이콘`}
            className="w-[19px] h-[19px] mr-[8px]"
          />
          <p className="text-[15px] text-[#333]">{label}</p>
        </div>

        <button
          type="button"
          onClick={handleToggle}
          className={`w-[36px] h-[25px] rounded-[12px] flex items-center transition-colors duration-300 ${
            enabled ? 'bg-[#31a551]' : 'bg-[#ccc]'
          }`}
        >
          <div
            className={`w-[17px] h-[17px] bg-white rounded-full transition-all duration-300 ${
              enabled ? 'translate-x-[14px]' : 'translate-x-[5px]'
            }`}
          />
        </button>
      </li>
    </>
  );
}
