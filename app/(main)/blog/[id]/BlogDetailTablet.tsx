'use client';

import { BlogPost } from '@/app/_lib/types/BlogPost';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function BlogDetailTablet() {
  const router = useRouter();
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!id) return;
    // fetch(`http://localhost:3001/blog/${id}`)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`)
      .then((res) => res.json())
      .then((data: BlogPost) => setPost(data))
      .catch(console.error);
  }, [id]);

  if (!post) {
    return (
      <main className="max-w-[1200px] mx-auto" style={{ padding: '85px 0 0' }}>
        <p className="text-center">로딩 중…</p>
      </main>
    );
  }

  // 삭제 핸들러
  const handleDelete = async () => {
    if (!id) return;

    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const error = await res.json();
        alert(`삭제 실패: ${error.error || '알 수 없는 오류'}`);
        return;
      }

      alert('삭제가 완료되었습니다.');
      router.push('/blog');
    } catch (err) {
      console.error('삭제 중 오류:', err);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <main
      className="max-w-[1200px] mx-auto"
      style={{ padding: '85px 0px 0px' }}
    >
      {/* 상단 */}
      <div
        className="flex flex-col"
        style={{
          margin: '50px auto 80px',
          gap: '0px 30px',
          padding: '0px 20px',
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${post.thumbnail_url}`}
          alt={post.title}
          width={600}
          height={340}
          className="rounded-[20px] w-full"
        />

        <div className="flex flex-col">
          <span>
            <h2
              className="text-[#000] text-[24px] font-bold"
              style={{ marginTop: '30px' }}
            >
              {post.title}
            </h2>
            <p className="text-[16px]">{post.description}</p>
          </span>

          <p className="text-[14px] text-[#777]">
            {post.created_at.split('T')[0]}
          </p>
        </div>

        {/* 버튼 */}
        <div
          className="flex flex-col items-start"
          style={{ gap: '70%', marginTop: '50px' }}
        >
          <div className="flex" style={{ gap: '10px' }}>
            <img src={'/icons/D-bookmark.svg'} alt="" width={40} height={40} />
            <img src={'/icons/D-Share.svg'} alt="" width={40} height={40} />
          </div>

          <div className="flex" style={{ gap: '10px', margin: '10px 0px' }}>
            <button
              type="button"
              className="rounded-[10px] text-[#777] text-[12px]"
              style={{
                border: '1px solid #ccc',
                padding: '5px 12px',
                width: '60px',
                height: '30px',
              }}
              onClick={() => router.push(`/blog/${id}/edit`)}
            >
              수정
            </button>
            <button
              type="button"
              className="rounded-[10px] text-[#777] text-[12px]"
              style={{
                border: '1px solid #ccc',
                padding: '5px 12px',
                width: '60px',
                height: '30px',
              }}
              onClick={handleDelete}
            >
              삭제
            </button>
          </div>
        </div>
      </div>

      {/* 내용 */}
      <div
        style={{
          padding: '60px 104px 0px 79px',
          borderTop: '5px solid rgb(238, 238, 238)',
        }}
      >
        <div>
          <p className="text-[16px]">
            어떤 굿즈를 만들면 좋을지, <br />
            디자인은 어떻게 하는게 좋을지,
            <br />
            어디서 제작하고 어떤 옵션을 선택하는 게 좋을지,
            <br />
            어떻게 포장하면 좋을지
            <br />
            고민이라면?!
            <br />
          </p>

          <img
            src={'/icons/logo.png'}
            alt=""
            width={195}
            height={39}
            className="w-[100px] h-[20px]"
            style={{ padding: '20px 0px' }}
          />
          <p>
            굿즈 제작 올인원 전문가들이 있는 오즈의제작소에 연락주세요!
            <br />
            cs@ozjejakso.com
          </p>
        </div>
      </div>
    </main>
  );
}
