'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import style from '@/app/componets/home/MainProductSlider.module.css';
import { Scrollbar } from 'swiper/modules';
import { useEffect, useState } from 'react';

type Product = {
  product_id: number;
  name: string;
  image_url: string;
  created_at: string;
  price?: number;
  quantity_range: string; // 최소 수량
  supply_price: string; // 최소 단가
  category_large_name: string;
  category_medium_name: string; // 중분류 "인형"
  category_small_name: string;
};

export default function MainProductSlider() {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/product')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // 4개씩그룹
  const groupedProducts: Product[][] = [];
  if (data) {
    for (let i = 0; i < data.length; i += 4) {
      groupedProducts.push(data.slice(i, i + 4));
    }
  }

  return (
    <div className="px-[25%] max-sm:px-[10px] fade-up2">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true, el: `.${style.swiperScrollbar}` }}
      >
        {groupedProducts.map((group, index) => (
          <SwiperSlide key={index}>
            <ul className="grid grid-cols-2 grid-rows-2 gap-[10px]">
              {/* 상품 */}
              {group?.map((product) => (
                <li
                  key={product.product_id}
                  className="group cursor-pointer overflow-hidden rounded-[8px] bg-[#f6f6f6] flex flex-col items-cente"
                >
                  <div className="relative w-full pt-[133%]">
                    <img
                      src={`http://localhost:3001${product.image_url}`}
                      alt={product.name}
                      className="absolute top-0 left-0 w-[80%] h-auto m-auto inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    {/* 태그 */}
                    <div className="absolute left-[10px] bottom-[10px] flex gap-[4px]">
                      <div className="w-auto h-[22px] p-[3px_6px] rounded-[5px] bg-black text-white text-[11px]">
                        {product.category_medium_name}
                      </div>
                      <div className="w-auto h-[22px] p-[3px_6px] rounded-[5px] bg-white text-[11px]">
                        최소{product.quantity_range}
                      </div>
                    </div>
                  </div>

                  {/* 설명 */}
                  <div className="p-[0_0_15px_15px] text-left">
                    <h2 className="font-bold text-[14px] text-[#000]">
                      {product.name}
                    </h2>
                    <p className="font-bold text-[13px] text-[#777]">
                      최소{' '}
                      <span>
                        {product.supply_price
                          ? `${Number(product.supply_price).toLocaleString()}`
                          : '1234원~'}
                      </span>
                      원 ~
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
}
