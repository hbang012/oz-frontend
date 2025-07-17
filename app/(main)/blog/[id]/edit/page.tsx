'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogEditPage() {
  const router = useRouter();
  const { id } = useParams();

  // 기본 썸네일 경로 (필요시 변경)
  const DEFAULT_THUMBNAIL = '/images/focus-00.png';

  // 폼 상태: title, description, thumbnail_url
  const [form, setForm] = useState({
    title: '',
    description: '',
    thumbnail_url: DEFAULT_THUMBNAIL,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    // fetch(`http://localhost:3001/blog/${id}`)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title,
          description: data.description,
          thumbnail_url: data.thumbnail_url || DEFAULT_THUMBNAIL,
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  // 수정 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.title,
        description: form.description,
        thumbnail_url: form.thumbnail_url,
      }),
    });

    if (res.ok) {
      alert('수정이 완료되었습니다.');
      router.push(`/blog/${id}`);
    } else {
      const err = await res.json();
      alert(`수정 실패: ${err.error || '알 수 없는 오류'}`);
    }
  };

  if (loading) {
    return (
      <main className="max-w-[800px] mx-auto py-20 text-center">로딩 중…</main>
    );
  }

  return (
    <main
      className="max-w-[1200px] mx-auto"
      style={{ padding: '185px 50px 80px' }}
    >
      <div className="flex flex-col" style={{ gap: '20px' }}>
        <h1 className="font-bold text-[18px] text-[#000]">글 수정</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col"
          style={{ gap: '20px' }}
        >
          <div>
            <label className="block" style={{ marginBottom: '5px' }}>
              제목
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              className="w-full p-2 border rounded-[8px] text-[14px]"
              style={{ borderColor: '#ddd' }}
              required
            />
          </div>

          <div>
            <label className="block" style={{ marginBottom: '5px' }}>
              부제목
            </label>
            <input
              type="text"
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              className="w-full p-2 border  rounded-[8px] text-[14px]"
              style={{ borderColor: '#ddd' }}
              required
            />
          </div>

          {/* 썸네일 URL을 숨기거나, 외부 수정이 필요하다면 입력 필드 추가 */}
          <input type="hidden" value={form.thumbnail_url} readOnly />

          <div>
            <label
              className="block "
              style={{ marginBottom: '5px', color: '#d8d8d8' }}
            >
              썸네일 미리보기
            </label>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${form.thumbnail_url}`}
              alt="썸네일"
              width={300}
              height={160}
              className="object-cover rounded border"
              style={{ borderColor: '#ddd' }}
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

          <div className="flex justify-end" style={{ gap: '10px' }}>
            <button
              type="button"
              onClick={() => router.back()}
              className="border rounded-[8px] text-[14px]"
              style={{
                borderColor: '#ddd',
                padding: '8px',
                width: '60px',
                height: '40px',
              }}
            >
              취소
            </button>
            <button
              type="button"
              className="rounded-[8px] text-[14px] text-[#fff]"
              style={{
                background: '#6b59f6',
                padding: '8px',
                width: '80px',
                height: '40px',
              }}
            >
              수정 완료
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
