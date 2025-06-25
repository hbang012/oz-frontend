import { Product } from '@/app/_lib/types/product';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductImg() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/product/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setProduct(json))
      .catch((err) => {
        console.error('상세 조회 실패:', err);
        setError(true);
      });
  }, [id]);

  if (error) return <p>상품을 불러오지 못했습니다.</p>;
  if (!product) return <p>로딩 중...</p>;

  return (
    <div className="flex gap-[15px]">
      {/* 상세이미지 */}
      <div>
        <Image
          src={`http://localhost:3001${product.image_url}`}
          alt={product.name}
          width={135}
          height={135}
          className="rounded-[20px]"
          style={{ background: '#ba9e9e' }}
        />
      </div>

      {/*대표이미지 */}
      <div style={{}}>
        <Image
          src={`http://localhost:3001${product.image_url}`}
          alt={product.name}
          width={550}
          height={550}
          className="rounded-[20px]"
          style={{ background: '#f3efe9' }}
        />
      </div>
    </div>
  );
}
