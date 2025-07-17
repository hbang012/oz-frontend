'use client';

import { useState, useEffect } from 'react';
import ProductDetailDesktop from './ProductDetailDesktop';
import ProductDetailMobile from '@/app/(main)/product/[id]/ProductDetailMobile';
import ProductDetailTablet from '@/app/(main)/product/[id]/ProductDetailTablet';

export default function ProductDetailPage() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (width < 768) return <ProductDetailMobile />;
  if (width < 1024) return <ProductDetailTablet />;
  return <ProductDetailDesktop />;
}
