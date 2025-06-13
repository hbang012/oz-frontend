'use client';

import { useEffect, useState } from 'react';
import ContactInfo from '@/app/(main)/contact/ContactInfo';
import dynamic from 'next/dynamic';

const ContactInfoMobile = dynamic(
  () => import('@/app/(main)/contact/ContactInfoMobile'),
  {
    ssr: false,
  }
);

export default function ContactInfoWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 첫 렌더링 시 체크
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <ContactInfoMobile /> : <ContactInfo />;
}
