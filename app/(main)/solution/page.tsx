'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import DefaultDesktop from '@/app/(main)/solution/Default';
import DefaultTablet from '@/app/(main)/solution/DefaultTablet';
import DefaultMobile from '@/app/(main)/solution/DefaultMobile';
import ConsultingDesktop from '@/app/(main)/solution/type/consulting/Desktop';
import ConsultingTablet from '@/app/(main)/solution/type/consulting/Tablet';
import ConsultingMobile from '@/app/(main)/solution/type/consulting/Mobile';
import DesignDesktop from '@/app/(main)/solution/type/design/Desktop';
import DesignTablet from '@/app/(main)/solution/type/design/Tablet';
import DesignMobile from '@/app/(main)/solution/type/design/Mobile';
import FulfillmentDesktop from '@/app/(main)/solution/type/fulfillment/Desktop';
import FulfillmentTablet from '@/app/(main)/solution/type/fulfillment/Tablet';
import FulfillmentMobile from '@/app/(main)/solution/type/fulfillment/Mobile';
import PackagingDesktop from '@/app/(main)/solution/type/packaging/Desktop';
import PackagingTablet from '@/app/(main)/solution/type/packaging/Tablet';
import PackagingMobile from '@/app/(main)/solution/type/packaging/Mobile';
import ProductionDesktop from '@/app/(main)/solution/type/production/Desktop';
import ProductionMobile from '@/app/(main)/solution/type/production/Mobile';
import ProductionTablet from '@/app/(main)/solution/type/production/Tablet';

export default function Solution() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type')?.toLowerCase() || 'default';

  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  type ViewEntry = {
    mobile: () => React.ReactNode;
    tablet: () => React.ReactNode;
    desktop: () => React.ReactNode;
  };

  // 타입별 디바이스 대응 테이블
  const componentMap: Record<string, ViewEntry> = {
    consulting: {
      mobile: ConsultingMobile,
      tablet: ConsultingTablet,
      desktop: ConsultingDesktop,
    },
    design: {
      mobile: DesignMobile,
      tablet: DesignTablet,
      desktop: DesignDesktop,
    },
    default: {
      mobile: DefaultMobile,
      tablet: DefaultTablet,
      desktop: DefaultDesktop,
    },
    fulfillment: {
      mobile: FulfillmentMobile,
      tablet: FulfillmentTablet,
      desktop: FulfillmentDesktop,
    },
    packaging: {
      mobile: PackagingMobile,
      tablet: PackagingTablet,
      desktop: PackagingDesktop,
    },
    production: {
      mobile: ProductionMobile,
      tablet: ProductionTablet,
      desktop: ProductionDesktop,
    },
  };

  const ViewSet = componentMap[type] || componentMap.default;
  const ViewComponent = isMobile
    ? ViewSet.mobile
    : isTablet
    ? ViewSet.tablet
    : ViewSet.desktop;

  return <ViewComponent />;
}
