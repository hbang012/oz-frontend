'use client';

import { useState } from 'react';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-500 ease-in-out  ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      zz
    </div>
  );
}
