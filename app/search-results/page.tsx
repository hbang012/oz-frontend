'use client';

import { useState, useEffect } from 'react';
import SearchResultsMobile from '@/app/search-results/SearchResultsMobile';
import SearchResultsTablet from '@/app/search-results/SearchResultsTablet';
import SearchResults from './SearchResults';

export default function SearchPage() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1200 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (width < 768) return <SearchResultsMobile />;
  if (width < 1024) return <SearchResultsTablet />;
  return <SearchResults />;
}
