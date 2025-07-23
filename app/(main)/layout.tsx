import Header from '@/app/components/home/header/Header';
import Footer from '@/app/components/home/Footer';
import ChatBot from '@/app/components/home/ChatBot/ChatBot';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ChatBot />
    </div>
  );
}
