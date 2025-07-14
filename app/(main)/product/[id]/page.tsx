'use client';

import { useState, useEffect } from 'react';
import ProductDetailDesktop from './ProductDetailDesktop';
import ProductDetailTablet from './ProductDetailTablet';
import ProductDetailMobile from '@/app/(main)/product/[id]/ProductDetailMobile';

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
