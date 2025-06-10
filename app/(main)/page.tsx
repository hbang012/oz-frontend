import MainSlider from '@/app/componets/home/MainSlider';
import Suggestion from '@/app/componets/home/Suggestion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-[30px_30px_0_30px] pt-[80px] h-full">
      <MainSlider />

      <div>
        <Suggestion />
      </div>
    </main>
  );
}
