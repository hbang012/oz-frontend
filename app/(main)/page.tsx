import MainSlider from '@/app/componets/home/MainSlider';
import MainProduct from '@/app/componets/home/MainProduct';
import MainPortfolio from '@/app/componets/home/MainPortfolio';

export default function Home() {
  return (
    <main className="p-[30px_30px_0_30px] pt-[80px] h-full">
      <MainSlider />

      <MainProduct />

      <MainPortfolio />
    </main>
  );
}
