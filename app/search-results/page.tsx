'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import MainLayout from '@/app/(main)/layout';
import type { BlogPost } from '@/app/_lib/types/BlogPost';
import type { Product } from '@/app/_lib/types/product';
import { useEffect, useState } from 'react';

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // 키워드
  const keyword = searchParams.get('keyword') || '';
  const type = searchParams.get('type') || 'all';

  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // url변경
  const handleTabClick = (newType: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('keyword', keyword);
    if (newType !== 'all') {
      params.set('type', newType);
    } else {
      params.delete('type');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  // 데이터 가져오기
  useEffect(() => {
    setLoading(true);

    if (type === 'blog') {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`)
        .then((res) => res.json())
        .then((data: BlogPost[]) => {
          const filtered = data.filter((post) =>
            post.title.toLowerCase().includes(keyword.toLowerCase())
          );
          setBlogs(filtered);
          setProducts([]);
        })
        .finally(() => setLoading(false));
    } else {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`)
        .then((res) => res.json())
        .then((data: Product[]) => {
          const filtered =
            type === 'goods'
              ? data.filter((item) =>
                  item.name.toLowerCase().includes(keyword.toLowerCase())
                )
              : data;
          setProducts(filtered);
          setBlogs([]);
        })
        .finally(() => setLoading(false));
    }
  }, [keyword, type]);

  return (
    <MainLayout>
      <main className="max-w-[1200px] mx-auto" style={{ padding: '50px 20px' }}>
        {/* 제목 */}
        <div className="">
          <h1 className="text-[24px] p-[50px_0px_35px] font-bold leading-[36px]">
            <span className="text-point1">&quot;{keyword}&quot;</span> 에 대한
            총 검색 결과 ( {type === 'blog' ? blogs.length : products.length} )
          </h1>

          {/* 탭 */}
          <ul className="flex justify-center items-center text-center">
            {['all', 'goods', 'blog'].map((tab) => (
              <li
                key={tab}
                className="cursor-pointer"
                onClick={() => handleTabClick(tab)}
                style={{
                  padding: '9px',
                  width: '100%',
                  border: '1px solid rgb(216, 216, 216)',
                  backgroundColor: type === tab ? '#6b59f6' : 'transparent',
                }}
              >
                <button
                  type="button"
                  style={{ color: type === tab ? '#ffffff' : '#777' }}
                >
                  {tab === 'all' ? '전체' : tab === 'goods' ? '굿즈' : '블로그'}
                </button>
              </li>
            ))}
          </ul>

          {/* 결과 ui */}
          {loading ? (
            <p>로딩 중...</p>
          ) : type === 'blog' ? (
            blogs.length > 0 ? (
              // 블로그 ui
              <ul
                className="grid grid-cols-4"
                style={{ gap: '30px 16px', paddingTop: '60px' }}
              >
                {blogs.map((post) => (
                  <li
                    key={post.post_id}
                    className="flex flex-col border rounded-[8px] border-[#d8d8d8]"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${post.thumbnail_url}`}
                      alt={post.title}
                      width={285}
                      height={161}
                      className="bg-amber-200 "
                      style={{
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        width: '100%',
                      }}
                    />
                    <h3 className="p-[16px] text-[18px] text-[#000] font-bold">
                      {post.title}
                    </h3>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-[#999] mt-[90px]">
                검색 결과가 없어요.
              </p>
            )
          ) : products.length > 0 ? (
            // 프로덕트 ui
            <ul
              className="grid grid-cols-4 grid-rows-4"
              style={{ paddingTop: '60px', gap: '20px' }}
            >
              {products.map((item) => (
                <li key={item.product_id} className="relative">
                  <div
                    className="rounded-[16px] overflow-hidden"
                    style={{
                      height: '80%',
                      width: '100%',
                      background: '#f3efe9',
                    }}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${item.image_url}`}
                      alt={item.name}
                      width={291}
                      height={291}
                      sizes="291px"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <span
                      className="absolute"
                      style={{ top: '6%', right: '7%' }}
                    >
                      <img
                        src={'/icons/Bookmark.svg'}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="font-bold text-[18px]">{item.name}</h3>
                  <p className="text-[14px] text-[#666]">
                    최소 {Number(item.supply_price).toLocaleString()}원~
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-[#999] mt-[90px]">
              검색 결과가 없어요.
            </p>
          )}
        </div>
      </main>
    </MainLayout>
  );
}
