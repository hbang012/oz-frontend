import Gnb from '@/app/componets/home/header/Gnb';
import Utility from '@/app/componets/home/header/Utility';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className=" border bg-[#fff] ">
      <div className="max-w-[1200px] mx-auto h-[85px] flex items-center justify-between p-[0_42px_0_42px]">
        <div className="flex items-center">
          <h1>
            <Link href={'/'}>
              <Image
                src={'/icons/logo.png'}
                alt="오즈의제작소"
                width={195}
                height={39}
                className="w-[133px] h-[25px] mb-[5px]"
              />
            </Link>
          </h1>

          <Gnb />
        </div>

        <div>
          <Utility />
        </div>
      </div>
    </header>
  );
}
