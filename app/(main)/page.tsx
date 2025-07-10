'use client';

import { useEffect, useState } from 'react';
import MainSlider from '@/app/componets/home/MainSlider';
import MainProduct from '@/app/componets/home/MainProduct';
import MainPortfolio from '@/app/componets/home/MainPortfolio';
import MainReview from '@/app/componets/home/MainReview';
import MainBlog from '@/app/componets/home/MainBlog';
import InfoConnect from '@/app/componets/home/InfoConnect';
import MainPartner from '@/app/componets/home/MainPartner';
import QuickConnect from '@/app/componets/home/QuickConnect';
import Frame from '@/app/componets/home/Frame';
import MainReviewMobile from '@/app/componets/home/MainReviewMobile';
import MainReviewTablet from '@/app/componets/home/MainReviewTablet';

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
