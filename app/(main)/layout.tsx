import Header from '@/app/componets/home/header/Header';
import Footer from '@/app/componets/home/Footer';

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
    </div>
  );
}
