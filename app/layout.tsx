import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from '@/app/componets/fonts';
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/componets/ThemeProvider';
import { LoginProvider } from '@/app/(auth)/login/LoginContext';

export const metadata: Metadata = {
  title: {
    default: '오즈의 제작소',
    template: '%s | 오즈의 제작소',
  },
  description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={pretendard.className}>
          <LoginProvider>
            <TanStackProvider>{children}</TanStackProvider>
          </LoginProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
