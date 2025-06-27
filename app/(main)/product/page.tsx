'use client';

import { useState, useEffect } from 'react';
import ProductDesktop from '@/app/(main)/product/ProductDesktop';
import ProductTablet from '@/app/(main)/product/ProductTablet';
import ProductMobile from '@/app/(main)/product/ProductMobile';

export default function ProductPage() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (width < 768) return <ProductMobile />;
  if (width < 1024) return <ProductTablet />;
  return <ProductDesktop />;
}
