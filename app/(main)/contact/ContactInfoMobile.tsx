'use client';
import { useState } from 'react';

export default function ContactInfoMobile() {
  const toggleOption = (option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const options = [
    '가격',
    '최소수량',
    '예상출고일',
    '예산에 맞는 굿즈',
    '납기일에 맞는 굿즈',
    '컨셉에 맞는 굿즈',
    '디자인 서비스',
    '포장 서비스',
    '배송 서비스',
  ];

  // 체크박스
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, boolean>
  >({});

  // 디자인 라디오
  const radioOptions: string[] = ['디자인 작업 필요', '디자인 파일 있음'];
  const [selectedRadioOption, setSelectedRadioOption] = useState<string>(
    radioOptions[0]
  );

  // 포장 라디오
  const packagingOptions: string[] = ['포장 필요', '포장 필요 없음'];
  const [selectedPackagingOption, setSelectedPackagingOption] =
    useState<string>(packagingOptions[0]);

  // 문의항목 경고
  const [showError, setShowError] = useState(false);

  // 입력 필드
  const [inputs, setInputs] = useState({
    item: '',
    quantity: '',
    budget: '',
    deadline: '',
  });

  // 입력 필드 오류 상태
  const [errors, setErrors] = useState({
    item: false,
    quantity: false,
    budget: false,
    deadline: false,
  });

  // 입력 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleValidation = () => {
    const hasSelection = Object.values(selectedOptions).some(Boolean);
    setShowError(!hasSelection);

    // 입력 필드
    const newErrors = {
      item: inputs.item.trim() === '',
      quantity: inputs.quantity.trim() === '',
      budget: inputs.budget.trim() === '',
      deadline: inputs.deadline.trim() === '',
    };
    setErrors(newErrors);

    if (!hasSelection || Object.values(newErrors).some(Boolean)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formFields = [
    {
      name: 'item',
      label: '품목',
      placeholder: 'ex) 텀블러 / 우산 / 뱃지 / 미정 / 굿즈 추천 필요',
    },
    { name: 'quantity', label: '수량', placeholder: '수량을 입력해주세요.' },
    { name: 'budget', label: '예산', placeholder: '예산을 입력해주세요.' },
    {
      name: 'deadline',
      label: '납기일',
      placeholder: 'ex) 12월 초 / 3월 15일까지 납품 가능할까요?',
    },
  ];

  return (
    <div style={{ maxWidth: '960px' }} className="flex flex-col gap-y-8">
      <div>
        <h2 className="text-[32px] font-bold text-[#000] max-md:text-[24px]">
          문의하기
        </h2>
        <p className="mt-[5px] text-[16px] text-[#333] max-w-[747px] max-md:text-[12px]">
          지금 여러분을 도와줄 굿즈 전문가가 기다리고 있습니다.
        </p>
        <div
          className="mt-[5px] flex gap-[10px] border w-full"
          style={{
            background: '#fff4f4',
            borderRadius: '4px',
            borderColor: '#ffd9d9',
            padding: '14px',
          }}
        >
          <span className="text-[14px]">⚠️</span>
          <p className="text-[14px] max-md:text-[12px]">
            여러 채널로 (문의하기, 채널톡, 이메일) 동일한 문의를 주실 경우, 확인
            과정에서 혼선이 발생해 답변이 더욱 지연될 수 있습니다. <br />
            원활한 응대를 위해 하나의 채널로 문의 주시는 것을 적극 권장드립니다.
          </p>
        </div>
      </div>

      {/* 문의정보 */}
      <div className="flex" style={{ paddingTop: '30px' }}>
        <span
          className="flex justify-center items-center rounded-[50%] bg-point1 text-white text-[24px] font-bold"
          style={{ width: '25px', height: '25px', fontSize: '14px' }}
        >
          1
        </span>
        <h3
          className="text-[24px] font-medium text-[#000] max-md:text-[20px] max-md:pl-[10px]"
          style={{ paddingLeft: '10px' }}
        >
          문의 정보를 입력해주세요
        </h3>
      </div>

      {/* 문의 항목 */}
      <div className="flex flex-col ">
        <div
          className="flex items-center"
          style={{ paddingTop: '15px', paddingBottom: '15px' }}
        >
          <h3 className="text-[13px] text-[#333] font-bold">
            문의항목 (중복 가능)
          </h3>
          <span
            className="text-point1"
            style={{
              fontSize: '5px',
              paddingBottom: '7px',
              paddingLeft: '2px',
            }}
          >
            ●
          </span>
        </div>
        <ul
          className="grid grid-cols-2 w-full"
          style={{ gap: '10px', paddingBottom: '20px' }}
        >
          {options.map((option) => (
            <li key={option}>
              <input
                type="checkbox"
                id={option}
                checked={!!selectedOptions[option]}
                onChange={() => toggleOption(option)}
                className="hidden"
              />
              <label
                htmlFor={option}
                className={`flex justify-center items-center h-[48px] border rounded-[8px] px-5 cursor-pointer ${
                  selectedOptions[option]
                    ? 'border-[3px] border-[#000] text-[#000]'
                    : 'border border-[#d8d8d8] text-[#999]'
                }`}
              >
                {option}
              </label>
            </li>
          ))}
        </ul>
        {showError && (
          <p className="text-[#FF5630] text-[14px]">문의항목을 선택해주세요.</p>
        )}
      </div>

      {/* 디자인 유무 */}
      <div className="flex flex-col gap-y-2">
        <div
          className="flex items-center gap-x-1"
          style={{ paddingBottom: '10px' }}
        >
          <h3 className="text-[13px] text-[#333] font-bold">디자인 유무</h3>
          <span
            className="text-point1 "
            style={{
              fontSize: '5px',
              paddingBottom: '7px',
              paddingLeft: '2px',
            }}
          >
            ●
          </span>
        </div>
        <ul
          className="grid grid-cols-2"
          style={{ gap: '10px', paddingBottom: '20px' }}
        >
          {radioOptions.map((option) => (
            <li key={option}>
              <input
                type="radio"
                id={option}
                name="design"
                checked={selectedRadioOption === option}
                onChange={() => setSelectedRadioOption(option)}
                className="hidden"
              />
              <label
                htmlFor={option}
                className={`flex justify-center items-center border rounded-[8px] cursor-pointer ${
                  selectedRadioOption === option
                    ? 'border-[3px] border-[#000] text-[#000]'
                    : 'border border-[#d8d8d8] text-[#999]'
                }`}
                style={{ height: '50px' }}
              >
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* 포장 유무 */}
      <div className="flex flex-col gap-y-2">
        <div
          className="flex items-center gap-x-1 "
          style={{ paddingBottom: '10px' }}
        >
          <h3 className="text-[13px] text-[#333] font-bold">포장 유무</h3>
          <span
            className="text-point1 "
            style={{
              fontSize: '5px',
              paddingBottom: '7px',
              paddingLeft: '2px',
            }}
          >
            ●
          </span>
        </div>
        <ul
          className="grid grid-cols-2"
          style={{ gap: '10px', paddingBottom: '20px' }}
        >
          {packagingOptions.map((option) => (
            <li key={option}>
              <input
                type="radio"
                id={option}
                name="packaging"
                checked={selectedPackagingOption === option}
                onChange={() => setSelectedPackagingOption(option)}
                className="hidden"
              />
              <label
                htmlFor={option}
                className={`flex justify-center items-center h-[48px] border rounded-[8px] cursor-pointer ${
                  selectedPackagingOption === option
                    ? 'border-[3px] border-[#000] text-[#000]'
                    : 'border border-[#d8d8d8] text-[#999]'
                }`}
              >
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* 입력 필드 */}
      <div className="flex flex-col gap-y-6">
        {formFields.map(({ name, label, placeholder }) => (
          <div key={name} className="flex flex-col gap-y-2">
            <div
              className="flex items-center gap-x-1 pt-[30px]"
              style={{ paddingBottom: '5px', paddingTop: '15px' }}
            >
              <h3 className="text-[14px] text-[#333] font-bold">{label}</h3>
              <span
                className="text-point1"
                style={{
                  fontSize: '5px',
                  paddingBottom: '7px',
                  paddingLeft: '2px',
                }}
              >
                ●
              </span>
            </div>
            <input
              type="text"
              name={name}
              value={inputs[name as keyof typeof inputs]}
              placeholder={placeholder}
              onChange={handleChange}
              className={`w-full bg-[#fafafa] h-[48px] border-0 rounded-[8px] px-[16px] ${
                errors[name as keyof typeof errors]
                  ? 'border-[3px] border-[#FF5630]'
                  : ''
              }`}
            />
            {errors[name as keyof typeof errors] && (
              <p className="text-[#FF5630] text-[14px] mt-[5px]">
                {label}을(를) 입력해 주세요
              </p>
            )}
          </div>
        ))}
      </div>

      {/* 버튼 */}
      <button
        type="button"
        className="mt-[40px] bg-black text-white text-[18px] font-bold rounded-[8px] px-[48px]"
        onClick={handleValidation}
        style={{ height: '50px' }}
      >
        다음
      </button>
    </div>
  );
}
