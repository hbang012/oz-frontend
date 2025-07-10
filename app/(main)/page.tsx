'use client';

import { useEffect, useState } from 'react';
import MainSlider from '@/app/components/home/MainSlider';
import MainProduct from '@/app/components/home/MainProduct';
import MainPortfolio from '@/app/components/home/MainPortfolio';
import MainReview from '@/app/components/home/MainReview';
import MainBlog from '@/app/components/home/MainBlog';
import InfoConnect from '@/app/components/home/InfoConnect';
import MainPartner from '@/app/components/home/MainPartner';
import QuickConnect from '@/app/components/home/QuickConnect';
import Frame from '@/app/components/home/Frame';
import MainReviewMobile from '@/app/components/home/MainReviewMobile';
import MainReviewTablet from '@/app/components/home/MainReviewTablet';

export default function Home() {
  // 테일윈드 max-sm 안 먹힘 이슈로 분기점 처리
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1200);
    };

    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="pt-[80px] h-full">
      <div className="p-[30px_20px_0_30px]">
        <MainSlider />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <MainProduct />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <MainPortfolio />
      </div>

      <div className="p-[30px_30px_0_30px]">
        {isMobile ? (
          <MainReviewMobile />
        ) : isTablet ? (
          <MainReviewTablet />
        ) : (
          <MainReview />
        )}
      </div>

      <div className="p-[30px_30px_0_30px]">
        <InfoConnect />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <MainBlog />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <MainPartner />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <QuickConnect />
      </div>

      <Frame />
    </main>
  );
}
