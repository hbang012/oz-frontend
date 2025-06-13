'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Solution() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'default';

  return <div></div>;
}
