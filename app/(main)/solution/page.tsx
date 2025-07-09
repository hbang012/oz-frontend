'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Solution() {
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const type = searchParams.get('type') || 'default';

  return <div></div>;
}
