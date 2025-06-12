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
  description:
    '원하는 수량, 예산에 맞고 브랜드와 적합한 굿즈를 [추천, 디자인, 제작, 포장, 배송]까지 합니다. 1개부터 대량까지 딱맞는 굿즈를 만들어보세요.',
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
