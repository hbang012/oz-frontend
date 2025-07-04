'use client';

import { useState, useEffect } from 'react';
import BlogMobile from '@/app/(main)/blog/BlogMobile';
import BlogTablet from '@/app/(main)/blog/BlogTablet';
import BlogPc from '@/app/(main)/blog/BlogPc';

export default function Blog() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (width < 768) return <BlogMobile />;
  if (width < 1024) return <BlogTablet />;
  return <BlogPc />;
}
