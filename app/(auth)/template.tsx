'use client';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(pathname);

  return (
    <div className="p-[30px]" style={{ marginTop: '90px' }}>
      {children}
    </div>
  );
}
