import MainSlider from '@/app/componets/home/MainSlider';
import MainProduct from '@/app/componets/home/MainProduct';
import MainPortfolio from '@/app/componets/home/MainPortfolio';
import MainReview from '@/app/componets/home/MainReview';
import MainBlog from '@/app/componets/home/MainBlog';
import InfoConnect from '@/app/componets/home/InfoConnect';
import MainPartner from '@/app/componets/home/MainPartner';
import QuickConnect from '@/app/componets/home/QuickConnect';
import Frame from '@/app/componets/home/Frame';

export default function Home() {
  return (
    <main className="pt-[80px] h-full">
      <div className="p-[30px_30px_0_30px]">
        <MainSlider />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <MainProduct />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <MainPortfolio />
      </div>

      <div className="p-[30px_30px_0_30px]">
        <MainReview />
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
