'use client';

import BlogDetail from '@/app/(main)/blog/[id]/BlogDetail';
import BlogDetailMobile from '@/app/(main)/blog/[id]/BlogDetailMobile';
import BlogDetailTablet from '@/app/(main)/blog/[id]/BlogDetailTablet';
import { useState, useEffect } from 'react';

export default function page() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (width < 768) return <BlogDetailMobile />;
  if (width < 1024) return <BlogDetailTablet />;
  return <BlogDetail />;
}
