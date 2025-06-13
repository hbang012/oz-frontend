// 문의항목
'use client';

import { useState } from 'react';

export default function ContactInfo() {
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
    <>
      <div>
        <h2 className="text-[32px] font-bold text-[#000] max-md:text-[24px]">
          문의하기
        </h2>
        <p className="mt-[5px] text-[16px] text-[#333] max-w-[747px] max-md:text-[12px]">
          지금 여러분을 도와줄 굿즈 전문가가 기다리고 있습니다.
        </p>
        <div
          className="mt-[5px] flex gap-[10px] border p-[15px] max-md:w-full max-md:p-[14px]"
          style={{
            background: '#fff4f4',
            borderRadius: '4px',
            borderColor: '#ffd9d9',
            maxWidth: '747px',
          }}
        >
          <span className="text-[14px]">⚠️</span>
          <p className="text-[14px] max-md:text-[12px]">
            여러 채널로 (문의하기, 채널톡, 이메일) 동일한 문의를 주실 경우, 확인
            과정에서 혼선이 발생해 답변이 더욱 지연될 수 있습니다. <br />
            원활한 응대를 위해 하나의 채널로 문의 주시는 것을 적극 권장드립니다.
          </p>
        </div>

        {/* 문의정보 */}
        <div className="flex" style={{ paddingTop: '30px' }}>
          <span className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-point1 text-white text-[24px] font-bold">
            1
          </span>
          <h3 className="pl-[20px] text-[24px] font-medium text-[#000] max-md:text-[20px] max-md:pl-[10px]">
            문의 정보를 입력해주세요
          </h3>
        </div>
      </div>

      <div style={{ maxWidth: '960px' }}>
        {/* 문의 항목 */}
        <div>
          <div className="flex">
            <h3
              className="text-[18px] text-[#333] font-bold"
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
          {/* 문의 옵션 */}
          <ul
            className="flex flex-wrap gap-[10px]"
            style={{
              maxWidth: '889px',
              paddingTop: '15px',
              paddingBottom: '10px',
            }}
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
                  className={`flex justify-center items-center h-[48px] border rounded-[8px] 
                ${
                  selectedOptions[option]
                    ? 'border-[3px] border-[#000] text-[#000]'
                    : 'border border-[#d8d8d8] text-[#999]'
                }`}
                  style={{ padding: '20px', cursor: 'pointer' }}
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>

          {/* 경고 */}
          {showError && (
            <p style={{ color: '#FF5630', fontSize: '14px' }}>
              문의항목을 선택해주세요.
            </p>
          )}
        </div>

        {/* 디자인 유무 */}
        <div className="flex">
          <h3
            className="text-[18px] text-[#333] font-bold"
            style={{ paddingTop: '40px' }}
          >
            디자인 유무
          </h3>
          <span
            className="text-point1"
            style={{ fontSize: '8px', paddingTop: '43px', marginLeft: '1px' }}
          >
            ●
          </span>
        </div>
        {/* 디자인 옵션 */}
        <ul
          className="flex flex-wrap gap-[10px]"
          style={{
            maxWidth: '889px',
            paddingTop: '15px',
            paddingBottom: '30px',
          }}
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
                className={`flex justify-center items-center h-[48px] border rounded-[8px] 
                ${
                  selectedRadioOption === option
                    ? 'border-[3px] border-[#000] text-[#000]'
                    : 'border border-[#d8d8d8] text-[#999]'
                }`}
                style={{ padding: '20px', cursor: 'pointer' }}
              >
                {option}
              </label>
            </li>
          ))}
        </ul>

        {/* 포장 유무 */}
        <div className="flex">
          <h3
            className="text-[18px] text-[#333] font-bold"
            style={{ paddingTop: '30px' }}
          >
            포장 유무
          </h3>
          <span
            className="text-point1"
            style={{
              fontSize: '8px',
              paddingTop: '30px',
              marginLeft: '1px',
            }}
          >
            ●
          </span>
        </div>
        {/* 포장 옵션 */}
        <ul
          className="flex flex-wrap gap-[10px]"
          style={{
            maxWidth: '889px',
            paddingTop: '15px',
            paddingBottom: '30px',
          }}
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
                className={`flex justify-center items-center h-[48px] border rounded-[8px] 
                ${
                  selectedPackagingOption === option
                    ? 'border-[3px] border-[#000] text-[#000]'
                    : 'border border-[#d8d8d8] text-[#999]'
                }`}
                style={{ padding: '20px', cursor: 'pointer' }}
              >
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/*입력필드 */}
      <div className="grid grid-cols-2 gap-4" style={{ marginTop: '10px' }}>
        {formFields.map(({ name, label, placeholder }) => (
          <div key={name}>
            <div className="flex">
              <h3
                className="text-[18px] text-[#333] font-bold"
                style={{ paddingTop: '30px' }}
              >
                {label}
              </h3>
              <span
                className="text-point1"
                style={{
                  fontSize: '8px',
                  paddingTop: '30px',
                  marginLeft: '1px',
                }}
              >
                ●
              </span>
            </div>

            <div style={{ maxWidth: '450px', paddingTop: '15px' }}>
              <form>
                <input
                  type="text"
                  name={name}
                  value={inputs[name as keyof typeof inputs]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  className={`w-full bg-[#fafafa] h-[48px] border-0 ${
                    errors[name as keyof typeof errors]
                      ? 'border-[3px] border-[#FF5630]'
                      : ''
                  }`}
                  style={{ borderRadius: '8px', padding: '12px 16px' }}
                />
                {errors[name as keyof typeof errors] && (
                  <p
                    style={{
                      color: '#FF5630',
                      fontSize: '14px',
                      marginTop: '5px',
                    }}
                  >
                    {label}을(를) 입력해 주세요
                  </p>
                )}
              </form>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-[40px] bg-black text-white text-[20px] font-bold w-[200px] h-[64px]"
        onClick={handleValidation}
        style={{ padding: '16px 48px', borderRadius: '8px' }}
      >
        다음
      </button>
    </>
  );
}
