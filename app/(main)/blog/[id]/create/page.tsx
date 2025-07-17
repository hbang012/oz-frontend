'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BlogCreatePage() {
  const router = useRouter();
  const DEFAULT_THUMBNAIL = '/images/focus-00.png';
  const [form, setForm] = useState({
    title: '',
    description: '',
    thumbnail_url: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // fetch('http://localhost:3001/blog'
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.title,
        description: form.description,
        thumbnail_url: form.thumbnail_url,
      }),
    });

    if (res.ok) {
      alert('글이 등록되었습니다.');
      router.push('/blog');
    } else {
      const error = await res.json();
      alert(`등록 실패: ${error.error || '알 수 없는 오류'}`);
    }
  };

  return (
    <main
      className="max-w-[1200px] mx-auto"
      style={{ padding: '150px 50px 90px' }}
    >
      <div>
        {/* 제목 */}
        <h2 className="font-bold text-[18px] text-[#000]">새글작성</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col"
          style={{ gap: '20px' }}
        >
          <input
            type="text"
            placeholder="제목"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border rounded-[8px] text-[14px]"
            style={{ margin: '20px 0px 0px 0px', borderColor: '#ddd' }}
            required
          />

          {/* 부제목 */}
          <input
            type="text"
            placeholder="부제목"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-2 border rounded-[8px] text-[14px]"
            style={{ borderColor: '#ddd' }}
            required
          />

          {/* 썸네일 이미지 */}
          <input type="hidden" value={form.thumbnail_url} readOnly />

          {/* 기본 썸네일 미리보기 */}
          <div className="flex flex-col" style={{ gap: '10px' }}>
            <label style={{ color: '#d8d8d8' }}>썸네일 (기본)</label>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${DEFAULT_THUMBNAIL}`}
              width={200}
              height={100}
              alt="기본 썸네일"
              className="w-40 h-24 object-cover rounded"
            />
          </div>

          {/* 본문 */}
          {/* <textarea
            placeholder="본문"
            rows={6}
            value={form.description}
            // onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-2 border rounded-[8px] text-[14px]"
            style={{ borderColor: '#ddd' }}
            required
          /> */}

          {/* 등록버튼 */}
          <div className="flex justify-end items-end " style={{ gap: '10px' }}>
            <button
              type="submit"
              className="border  rounded-[8px] text-[14px]"
              style={{ borderColor: '#ddd', padding: '8px', width: '60px' }}
            >
              등록
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="border  rounded-[8px] text-[14px]"
              style={{ borderColor: '#ddd', padding: '8px', width: '60px' }}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
