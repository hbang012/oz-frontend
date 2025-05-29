import MainSlider from '@/app/componets/home/MainSlider';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-[30px] flex flex-col">
      <div className="max-w-[1920px]">
        <MainSlider />
      </div>
    </main>
  );
}
