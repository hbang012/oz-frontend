'use client';

import { Product } from '@/app/_lib/types/product';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface OptionGroup {
  group_id: number;
  name: string;
  values: string[];
}

interface ProdutOptionsProps {
  productId: string;
  onOptionsChange: Dispatch<SetStateAction<Record<number, string>>>;
  onDeliveryChange: Dispatch<SetStateAction<string>>;
}

export default function ProdutOptions({
  productId,
  onOptionsChange,
  onDeliveryChange,
}: ProdutOptionsProps) {
  // 옵션
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [options, setOptions] = useState<OptionGroup[]>([]);
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  // 배송 라디오
  const deliveryOptions: string[] = ['택배', '퀵서비스'];
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<string>(
    deliveryOptions[0]
  );

  // 2 아이템별 옵션 불러오기
  useEffect(() => {
    fetch(`http://localhost:3001/product/${productId}/options`)
      .then((r) => r.json())
      .then(setOptions)
      .catch(console.error);
  }, [productId]);

  const handleValueSelect = (gid: number, val: string) => {
    const next = { ...selected, [gid]: val };
    setSelected(next);
    onOptionsChange(next);
    setOpenGroup(null);
  };

  const handleDelivery = (opt: string) => {
    setSelectedDeliveryOption(opt);
    onDeliveryChange(opt);
  };

  if (error) return <p>불러오지 못했습니다.</p>;
  if (!options) return <p>로딩 중...</p>;

  return (
    <div>
      {/* 아이템별 옵션 */}
      {options.map((group) => (
        <div
          key={group.group_id}
          className="relative flex justify-between items-center"
          style={{ gap: '20px', margin: '35px 0px' }}
        >
          {/* 아이템별 옵션명 */}
          <p className="font-bold" style={{ width: '20%', color: '#777' }}>
            {group.name}
          </p>
          <button
            type="button"
            className="relative flex justify-between w-full rounded-[8px] border"
            style={{
              padding: '11px 16px',
              height: '46px',
              borderColor: '#d8d8d8',
            }}
            onClick={() =>
              setOpenGroup(openGroup === group.group_id ? null : group.group_id)
            }
          >
            <div className="">
              <p className=" text-[16px]" style={{ color: '#d8d8d8' }}>
                {selected[group.group_id] ?? '옵션선택'}
              </p>
              <Image
                src={'/icons/keyboard_arrow.svg'}
                width={25}
                height={25}
                alt=""
                className="absolute rotate-90"
                style={{ top: '25%', right: '5%' }}
              />
            </div>
          </button>

          {/* 옵션 선택지 */}
          {openGroup === group.group_id && (
            <ul
              className="flex flex-col absolute z-10 rounded-[10px]"
              style={{
                top: '100%',
                left: '19%',
                padding: '8px 0px',
                background: '#fff',
                boxShadow: 'rgba(0, 0, 0, 0.08)  0px 2px 12px 0px',
                width: '81%',
              }}
            >
              {group.values.map((val) => (
                <li
                  key={val}
                  onClick={() => {
                    setSelected((prev) => ({
                      ...prev,
                      [group.group_id]: val,
                    }));
                    setOpenGroup(null);
                  }}
                  className="hover:bg-[#f5f4ff]"
                  style={{ padding: '10px 16px' }}
                >
                  {val}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* 배송방법 */}
      <div>
        <div
          className="relative flex justify-between items-center"
          style={{ gap: '20px', margin: '35px 0px' }}
        >
          <p className="font-bold" style={{ width: '20%', color: '#777' }}>
            배송방법
          </p>

          <ul
            className="flex flex-wrap gap-[10px]"
            style={{
              maxWidth: '889px',
              paddingTop: '15px',
              paddingBottom: '30px',
            }}
          >
            {deliveryOptions.map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  id={option}
                  name="packaging"
                  checked={selectedDeliveryOption === option}
                  onChange={() => setSelectedDeliveryOption(option)}
                  className="hidden"
                />
                <div className="flex items-center ">
                  <label
                    htmlFor={option}
                    style={{
                      padding: '10px',
                      cursor: 'pointer',
                      border:
                        selectedDeliveryOption === option
                          ? '1px solid #6b59f6'
                          : '1px solid #d8d8d8',
                      backgroundColor:
                        selectedDeliveryOption === option
                          ? '#6b59f6'
                          : 'transparent',
                      color:
                        selectedDeliveryOption === option ? '#FF6600' : '#999',
                    }}
                    className="flex justify-center items-center rounded-full"
                  />
                  <div style={{ paddingLeft: '10px' }}>{option}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {selectedDeliveryOption === '택배' && (
          <div className="mt-2 text-[#999] text-[12px] flex justify-end ">
            무료 배송
            <span className="ml-4">제주·도서산간 추가 5,000원</span>
          </div>
        )}
      </div>
    </div>
  );
}
