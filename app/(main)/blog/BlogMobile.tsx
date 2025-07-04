'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/app/_lib/types/BlogPost';
import { useEffect, useState } from 'react';
import Pagination from '@/app/componets/Pagination';

export default function BlogMobile() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);

  // 1페이지당 글 수
  const PER_PAGE = 4;
  const totalPage = Math.ceil(posts.length / PER_PAGE);

  useEffect(() => {
    fetch('http://localhost:3001/blog')
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  const currentPosts = posts.slice(
    (page - 1) * PER_PAGE,
    (page - 1) * PER_PAGE + PER_PAGE
  );

  if (!posts.length) {
    return (
      <main className="max-w-[1200px] mx-auto" style={{ padding: '85px 0 0' }}>
        <p className="text-center">게시글이 없습니다.</p>
      </main>
    );
  }

  return (
    <main
      className="max-w-[1200px] mx-auto"
      style={{ padding: '55px 20px 0px' }}
    >
      <div style={{ padding: '30px 0px 0px' }}>
        <ul
          className="grid grid-cols-1 grid-rows-4"
          style={{ gap: '20px 10px' }}
        >
          {currentPosts.map((post) => (
            <li key={post.post_id} className="flex flex-col">
              <Link
                href={`/blog/${post.post_id}`}
                className="border rounded-[8px] border-[#d8d8d8]"
              >
                <Image
                  src={`http://localhost:3001${post.thumbnail_url}`}
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
                <h2 className="p-[16px] text-[18px] text-[#000] font-bold h-[54px]">
                  {post.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center" style={{ padding: '50px' }}>
          {posts.length > 0 && totalPage > 0 && (
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          )}
        </div>
      </div>
    </main>
  );
}
