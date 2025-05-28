'use client';

import LoginPopup from '@/app/(auth)/login/LoginPopup';
import React, { createContext, ReactNode, useContext, useState } from 'react';

const LoginContext = createContext({
  openLogin: () => {},
  closeLogin: () => {},
});

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <LoginContext.Provider value={{ openLogin, closeLogin }}>
      {children} {isLoginOpen && <LoginPopup onClose={closeLogin} />}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
