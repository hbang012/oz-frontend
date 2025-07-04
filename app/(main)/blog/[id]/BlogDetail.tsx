'use client';

import { BlogPost } from '@/app/_lib/types/BlogPost';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '@/app/_lib/api/blog';

type Form = {
  title: string;
  description: string;
  thumbnail_url: string;
};

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/blog/${id}`)
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

  return (
    <main
      className="max-w-[1200px] mx-auto"
      style={{ padding: '85px 0px 0px' }}
    >
      {/* 상단 */}
      <div
        className="flex justify-between"
        style={{ margin: '50px auto 80px', gap: '0px 50px' }}
      >
        <Image
          src={`http://localhost:3001${post.thumbnail_url}`}
          alt={post.title}
          width={600}
          height={340}
          priority
          className="rounded-[20px]"
        />

        <div className="flex flex-col justify-between ">
          <span>
            <h2 className="text-[#000] text-[24px] font-bold">{post.title}</h2>
            <p className="text-[16px]">{post.description}</p>
          </span>

          <p className="text-[14px] text-[#777]">
            {post.created_at.split('T')[0]}
          </p>
        </div>

        <div>
          <div className="flex gap-[10px]">
            <Image
              src={'/icons/D-bookmark.svg'}
              alt=""
              width={50}
              height={50}
            />
            <Image src={'/icons/D-Share.svg'} alt="" width={40} height={40} />
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
        <div className="flex justify-end gap-[10px]">
          <button
            type="button"
            className="rounded-[10px] text-[#777] text-[12px]"
            style={{ border: '1px solid #ccc', padding: '5px 10px' }}
          >
            글쓰기
          </button>

          <button
            type="button"
            className="rounded-[10px] text-[#777] text-[12px]"
            style={{ border: '1px solid #ccc', padding: '5px 10px' }}
          >
            수정
          </button>

          <button
            type="button"
            className="rounded-[10px] text-[#777] text-[12px]"
            style={{ border: '1px solid #ccc', padding: '5px 10px' }}
          >
            삭제
          </button>
        </div>

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

          <Image
            src={'/icons/logo.png'}
            alt=""
            width={195}
            height={39}
            priority
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
