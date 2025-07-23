'use client';

import { ChatMessage } from '@/app/_lib/types/ChatMessage';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

interface DialogProps {
  setActiveTab: (tab: 'home' | 'dialog' | 'settings') => void;
}

export default function Dialog({ setActiveTab }: DialogProps) {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  // useMutation 선언
  const mutation = useMutation({
    mutationFn: async (message: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
        }
      );
      if (!res.ok) throw new Error('Chat API 에러');
      return res.json() as Promise<{ response: string }>;
    },
    onSuccess: (data, variables) => {
      // 성공 시 채팅 히스토리에 사용자+봇 메시지 추가
      setChatHistory((prev) => [
        ...prev,
        { sender: 'user', text: variables },
        { sender: 'bot', text: data.response },
      ]);
    },
  });

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    mutation.mutate(input.trim());
    setInput('');
  };

  return (
    <div className="flex flex-col mb-[10px]">
      {/* 제목 */}
      <div className="flex gap-[20%] pb-[20px] cursor-default">
        <button type="button" onClick={() => setActiveTab('home')} className="">
          <img src={'/icons/back.png'} alt="" className="w-[20px] h-[20px]" />
        </button>
        <div className="flex items-center">
          <img
            src={'/icons/tmp.png'}
            alt=""
            className="w-[36px] h-[36px] rounded-[14px] border border-[#ddd] mr-[8px]"
          />
          <div>
            <h2 className="text-[16px] mt-[10px] text-[#000]">오즈의 제작소</h2>
            <p className="text-[12px] text-[#ddd]">
              몇 분 내 답변 받으실 수 있어요
            </p>
          </div>
        </div>
      </div>

      {/* 공지 */}
      <div className="p-[12px] h-[60px] bg-[#eee] rounded-[10px] flex items-center cursor-default">
        <img
          src={'/icons/volume.png'}
          alt=""
          className="w-[25px] h-[25px] mb-[20px]"
        />
        <p className="text-[13px]">
          굿즈 제작은 오즈에서 ! <br /> 마법같은 굿즈 제작소 🔮
        </p>
      </div>

      {/* 오즈제작소에 문의하기 */}
      <div className="flex flex-col items-center space-y-[10px] my-[30px] cursor-default">
        <img
          src="/icons/tmp.png"
          className="w-[56px] h-[56px] rounded-[24px] border border-[#ddd]"
        />
        <h2 className="text-[16px] font-bold">오즈의제작소에 문의하기</h2>
        <button type="button" className="flex items-center">
          <p className="text-[12px] text-[#666]">운영시간 보기</p>
          <img
            src="/icons/gray_arrow.svg"
            className="w-[10px] h-[10px] ml-[6px]"
          />
        </button>
      </div>

      {/* 쳇봇 대화 구현 */}
      <div className="p-[10px] flex-1 overflow-y-auto space-y-[10px]">
        {chatHistory.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`px-[12px] py-[8px] rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-[#6b59f6] text-white'
                  : 'bg-[#eee] text-[#333]'
              }`}
              style={{ maxWidth: '70%' }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 대화 입력 창 */}
      <form
        onSubmit={handleSubmit}
        className="pt-[5px] absolute left-0 bottom-[10px] flex gap-[10px] items-center w-full h-[60px] bg-[#f5f5f5] px-[20px] "
      >
        <input
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          placeholder="메세지를 입력하세요"
          type="text"
          className="flex-1 h-[40px] rounded-[20px] px-[20px] border-[#ddd] max-sm:w-[90%]"
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-[#fff] w-[35px] h-[38px] rounded-[20px]"
        >
          <img
            src={'/icons/gray_arrow.svg'}
            alt="전송"
            className="w-[13px] h-[13px]"
          />
        </button>
      </form>
    </div>
  );
}
