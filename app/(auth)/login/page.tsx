'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [mailError, setMailError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (!validateEmail(email)) {
        setMailError('이메일 형식에 맞지 않습니다.');
      } else {
        setMailError('');
        setEmail('');
      }
    }
  };

  // 비밀번호 상태 관리
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowIcon(e.target.value.length > 0);
  };

  return (
    <main className="flex justify-center items-center mx-auto bg-[#fff]">
      <div className="p-[20px_20px]">
        {/* 로고 */}
        <div className="flex justify-center my-[20px]">
          <Image src="/icons/logo.png" alt="Logo" width={195} height={39} />
        </div>

        {/* 이메일 입력 */}
        <form className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            onKeyDown={handleKeyDown}
            className={`w-[100%] h-[60px] p-[13px_16px] rounded-[8px_8px_0px_0px] border peer ${
              mailError ? 'border-[#FF5630]' : 'border-[#000]'
            } text-[14px]`}
          />
          <label
            className="absolute left-[16px] top-[50%] translate-y-[-50%] text-[#999] text-[14px] 
            peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-[14px] 
            peer-focus:top-[10px] peer-focus:text-[11px] peer-focus:text-[#999]
            peer-not-placeholder-shown:top-[13px] transition-all duration-[0.3s] 
            ease-[cubic-bezier(0.5,0,0.1,1)]"
          >
            이메일
          </label>
        </form>

        {/* 비밀번호 입력 */}
        <form className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            placeholder=""
            onKeyDown={handleKeyDown}
            className={`w-[100%] h-[60px] p-[13px_16px] border-t-0 rounded-[0px_0px_8px_8px] border peer ${
              mailError ? 'border-[#FF5630]' : 'border-[#000]'
            } leading-[40px] text-[14px]`}
          />
          {showIcon && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-[16px] ${
                showPassword ? 'top-[34px]' : 'top-[35px]'
              } translate-y-[-50%]`}
            >
              <Image
                src={showPassword ? '/icons/eye2.svg' : '/icons/eye.svg'}
                width={24}
                height={24}
                alt="비밀번호 표시/숨기기"
              />
            </button>
          )}
          <label
            className="absolute left-[16px] top-[50%] translate-y-[-50%] text-[#999] text-[14px] 
            peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-[14px] 
            peer-focus:top-[10px] peer-focus:text-[11px] peer-focus:text-[#999]
            peer-not-placeholder-shown:top-[13px] transition-all duration-[0.3s] 
            ease-[cubic-bezier(0.5,0,0.1,1)]"
          >
            비밀번호
          </label>
        </form>

        {mailError && (
          <p className="text-[#FF5630] text-[12px] mt-[5px]">{mailError}</p>
        )}

        {/* 로그인 버튼 */}
        <button
          type="button"
          className="w-[100%] h-[56px] bg-[#000] mt-[16px] rounded-[8px] text-[#fff] text-[16px] font-bold"
        >
          로그인
        </button>

        {/* 옵션 */}
        <div className="flex justify-center gap-[15px] mt-[20px]">
          <button type="button" className="text-[13px] text-[#777]">
            이메일 찾기
          </button>
          <span className="text-[13px] text-[#d9d9d9]">|</span>
          <button type="button" className="text-[13px] text-[#777]">
            비밀번호 재설정
          </button>
          <span className="text-[13px] text-[#d9d9d9]">|</span>
          <button type="button" className="text-[13px] text-[#777]">
            회원가입
          </button>
        </div>

        {/* 간편 로그인 */}
        <div className="relative mt-[30px] flex flex-col items-center gap-[10px]">
          <button
            type="button"
            className="w-[100%] h-[56px] bg-[#fee500] rounded-[8px] text-[#000] text-[16px]"
          >
            <Image
              src="/icons/kakao.svg"
              width={24}
              height={24}
              alt=""
              className="absolute left-[16px] top-[14px]"
            />
            카카오 로그인
          </button>
          <button
            type="button"
            className="relative w-[100%] h-[56px] bg-[#03c75a] rounded-[8px] text-[#fff] text-[16px]"
          >
            <Image
              src="/icons/naver.svg"
              width={22}
              height={24}
              alt=""
              className="absolute left-[18px] top-[16px]"
            />
            네이버 로그인
          </button>
        </div>
      </div>
    </main>
  );
}
