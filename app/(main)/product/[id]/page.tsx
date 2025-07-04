'use client';

import { useState, useEffect } from 'react';
import ProductDetailDesktop from './ProductDetailDesktop';
import ProductDetailTablet from './ProductDetailTablet';

export default function ProductDetailPage() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (width < 768) return <ProductDetailTablet />;
  if (width < 1024) return <ProductDetailTablet />;
  return <ProductDetailDesktop />;
}
