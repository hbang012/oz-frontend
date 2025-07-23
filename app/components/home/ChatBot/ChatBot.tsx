'use client';

import { useState } from 'react';
import HomeScreen from './tabs/HomeScreen';
import Dialog from './tabs/Dialog';
import Settings from './tabs/Settings';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'dialog' | 'settings'>(
    'home'
  );

  return (
    <>
      {/* 챗봇 창 */}
      {open && (
        <div className="fixed bottom-[100px] right-[30px] z-50 w-[390px] h-[690px] bg-[#ffffff] rounded-[35px] shadow-xl overflow-hidden border border-[#ddd] flex flex-col">
          {/* 콘텐츠 영역 */}
          <div
            className={`p-4 flex-1 overflow-y-auto text-sm text-[#333] ${
              activeTab === 'home' ? 'bg-[#F7F7F8]' : 'bg-[#ffffff]'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {activeTab === 'home' && <HomeScreen />}
            {activeTab === 'dialog' && <Dialog setActiveTab={setActiveTab} />}
            {activeTab === 'settings' && <Settings />}
          </div>

          {/* 탭 메뉴 - 콘텐츠 아래 */}
          <nav className="flex text-center pt-[10px] text-[13px] font-bold bg-[#f5f5f5]">
            {[
              {
                key: 'home',
                label: '홈',
                icon: '/icons/home2.png',
                iconActive: '/icons/home.png',
              },
              {
                key: 'dialog',
                label: '대화',
                icon: '/icons/bubble2.png',
                iconActive: '/icons/bubble.png',
              },
              {
                key: 'settings',
                label: '설정',
                icon: '/icons/settings2.png',
                iconActive: '/icons/settings.png',
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className="w-full py-2 flex flex-col items-center justify-center gap-1"
              >
                <img
                  src={activeTab === tab.key ? tab.iconActive : tab.icon}
                  alt={`${tab.label} 아이콘`}
                  className="w-[24px] h-[24px]"
                />
                <span
                  className={`text-[13px] font-bold ${
                    activeTab === tab.key ? 'text-[#000]' : 'text-[#aaa]'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* 열기/닫기 버튼 */}
      <div className="fixed bottom-[30px] right-[30px] z-50">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="w-[60px] h-[60px] rounded-[24px] flex items-center justify-center"
          style={{
            boxShadow:
              '0 20px 25px -5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.3)',
          }}
        >
          <img
            src={open ? '/icons/clode.png' : '/icons/chat.png'}
            alt="챗봇 버튼"
            className={
              open
                ? 'w-[28px] h-[28px] object-contain'
                : 'w-full h-full object-cover rounded-[24px]'
            }
          />
        </button>
      </div>
    </>
  );
}
