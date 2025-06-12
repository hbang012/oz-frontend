import MainSlider from '@/app/componets/home/MainSlider';
import MainProduct from '@/app/componets/home/MainProduct';
import MainPortfolio from '@/app/componets/home/MainPortfolio';
import MainReview from '@/app/componets/home/MainReview';
import MainBlog from '@/app/componets/home/MainBlog';
import InfoConnect from '@/app/componets/home/InfoConnect';
import MainPartner from '@/app/componets/home/MainPartner';
import QuickConnect from '@/app/componets/home/QuickConnect';

export default function Home() {
  return (
    <main className="p-[30px_30px_0_30px] pt-[80px] h-full">
      <MainSlider />

      <MainProduct />

      <MainPortfolio />

      <MainReview />

      <InfoConnect />

      <MainBlog />

      <MainPartner />

      <QuickConnect />
    </main>
  );
}
