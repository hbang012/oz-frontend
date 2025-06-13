'use client';

import ContactInfoWrapper from '@/app/(main)/contact/ContactInfoWrapper';
import Details from '@/app/(main)/contact/Details';

export default function Contact() {
  return (
    <main
      className="max-w-[1200px] mx-auto"
      style={{ paddingTop: '180px', paddingLeft: '15px', paddingRight: '15px' }}
    >
      {/* 문의 */}
      <ContactInfoWrapper />

      {/* 상세정보 */}
      <Details />
    </main>
  );
}
