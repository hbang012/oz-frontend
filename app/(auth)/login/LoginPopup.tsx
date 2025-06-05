'use client';

import { useLogin } from '@/app/(auth)/login/LoginContext';
import Image from 'next/image';
import { useState } from 'react';

type LoginPopupProps = {
  onClose: () => void;
};

const LoginPopup: React.FC<LoginPopupProps> = () => {
  const { closeLogin } = useLogin();

  // 이메일 검증
  const [email, setEmail] = useState('');
  const [mailerror, setMailError] = useState('');
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

  // 비밀번호
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowIcon(e.target.value.length > 0);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,.6)] z-15">
      <div className="bg-[#fff] rounded-[16px] w-[360px]">
        {/* 닫기 */}
        <div className="flex justify-between items-center p-[20px_20px_24px]">
          <h2 className="text-[18px] font-bold text-[#000]">로그인</h2>
          <button type="button" onClick={closeLogin}>
            <Image
              src={'/icons/plus-svgrepo-com.svg'}
              alt=""
              width={26}
              height={26}
              className="w-[30px] h-[30px] rotate-45"
            />
          </button>
        </div>

        <Image
          src={'/icons/logo.png'}
          alt=""
          width={195}
          height={39}
          className="m-[30px_80px]"
        />

        <div className=" p-[20px_20px]">
          <form className="relative">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              onKeyDown={handleKeyDown}
              className={`w-[100%] h-[60px] p-[13px_16px] rounded-[8px_8px_0px_0px] border peer ${
                mailerror ? 'border-[#FF5630]' : 'border-[#000]'
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
          <form className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChange}
              placeholder=""
              onKeyDown={handleKeyDown}
              className={`w-[100%] h-[60px] p-[13px_16px] border-t-0 rounded-[0px_0px_8px_8px] border peer ${
                mailerror ? 'border-[#FF5630]' : 'border-[#000]'
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
          {mailerror && (
            <p className="text-[#FF5630] text-[12px] mt-[5px]">{mailerror}</p>
          )}

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
          <div className="mt-[47px]">
            <div className="flex items-center gap-[20px]">
              <span className="border-t-1 border-[#d8d8d8] w-[100%]"></span>
              <p className="text-[14px] w-[200px] text-[#999]">간편 로그인</p>
              <span className="border-t-1 border-[#d8d8d8] w-[100%]"></span>
            </div>
            <button
              type="button"
              className="relative w-[100%] h-[56px] bg-[#fee500] rounded-[8px] text-[#000] text-[16px] leading-[35px] mt-[16px]"
            >
              <Image
                src={'/icons/kakao.svg'}
                width={24}
                height={24}
                alt=""
                className="absolute left-[16px] top-[14px]"
              />
              카카오 로그인
            </button>
            <button
              type="button"
              className="relative w-[100%] h-[56px] bg-[#03c75a] rounded-[8px] text-[#fff] text-[16px] leading-[35px] mt-[13px]"
            >
              <Image
                src={'/icons/naver.svg'}
                width={22}
                height={24}
                alt=""
                className="absolute left-[18px] top-[16px]"
              />
              네이버 로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
