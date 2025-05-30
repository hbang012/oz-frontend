'use client';

import ProductMenu from '@/app/componets/home/header/ProductMenu';
import Link from 'next/link';
import { useState } from 'react';

// GNB 배열
const gnb = [
  {
    label: '오즈소개',
    href: '/solution',
  },
  {
    label: '문의하기',
    href: '/contact',
  },
  {
    label: '제작소',
    href: '/product',
    sub: [
      { label: '인형/패브릭', href: '/product?category=197' },
      { label: '문구', href: '/product?category=2' },
      { label: '라이프스타일', href: '/product?category=25' },
      { label: '테크/오피스', href: '/product?category=78' },
      { label: '의류/잡화', href: '/product?category=99' },
      { label: '패키지', href: '/product?category=100' },
      { label: '브랜드 키트', href: '/product?category=207' },
      { label: '홍보물/전시', href: '/product?category=101' },
    ],
  },
  {
    label: '콘텐츠',
    sub: [
      { label: '포트폴리오', href: '/portfolio' },
      { label: '매거진', href: '/blog' },
    ],
  },
];

const productMenu = [
  // 인형/패브릭
  [
    {
      label: '인형',
      href: '/product?category=198',
    },
    {
      label: '키링',
      href: '/product?category=200',
    },
    {
      label: '쿠션&방석',
      href: '/product?category=199',
    },
    {
      label: '패브릭포스터',
      href: '/product?category=202',
    },
    {
      label: '담요',
      href: '/product?category=209',
    },
  ],
  // 문구
  [
    {
      label: '스티커',
      href: '/product?category=3',
      sub: [
        { label: '리무버블지', href: '/product?category=19' },
        { label: '아트지', href: '/product?category=18' },
        { label: '모조지', href: '/product?category=20' },
        { label: '크라프트지', href: '/product?category=21' },
        { label: '홀로그램', href: '/product?category=162' },
        { label: '투명지', href: '/product?category=24' },
        { label: '띠부띠부', href: '/product?category=22' },
        { label: '에폭시', href: '/product?category=23' },
        { label: '특수지', href: '/product?category=189' },
        { label: '타투 스티커', href: '/product?category=196' },
      ],
    },
    {
      label: '엽서/카드',
      href: '/product?category=1',
      sub: [
        { label: '엽서', href: '/product?category=15' },
        { label: '카드', href: '/product?category=16' },
      ],
    },
    {
      label: '키링',
      href: '/product?category=4',
      sub: [
        { label: '아크릴 키링', href: '/product?category=26' },
        { label: 'PVC 말랑키링', href: '/product?category=176' },
        { label: '인형/패브릭 키링', href: '/product?category=28' },
        { label: '금속 키링', href: '/product?category=29' },
      ],
    },
    {
      label: '필기구',
      href: '/product?category=6',
      sub: [
        { label: '볼펜', href: '/product?category=39' },
        { label: '필기구 세트', href: '/product?category=40' },
        { label: '기타 문구용품', href: '/product?category=168' },
      ],
    },
    {
      label: '메모지/메모패드',
      href: '/product?category=7',
      sub: [
        { label: '포스트잇', href: '/product?category=41' },
        { label: '떡메모지', href: '/product?category=42' },
        { label: '메모패드', href: '/product?category=43' },
      ],
    },
    {
      label: '틴케이스',
      href: '/product?category=8',
    },
    {
      label: '콜렉트북/앨범/액자',
      href: '/product?category=9',
      sub: [
        { label: '콜렉트북', href: '/product?category=44' },
        { label: '포토카드홀더', href: '/product?category=45' },
        { label: '액자', href: '/product?category=46' },
      ],
    },
    {
      label: '캘린더',
      href: '/product?category=11',
    },
    {
      label: '파일/L홀더',
      href: '/product?category=12',
    },
    {
      label: '스탬프',
      href: '/product?category=186',
    },
    {
      label: '뱃지/버튼',
      href: '/product?category=157',
      sub: [{ label: '뱃지', href: '/product?category=158' }],
    },
    {
      label: '클립/북마크/집게',
      href: '/product?category=13',
    },
    {
      label: '자석(마그넷)',
      href: '/product?category=187',
    },
  ],
  // 라이프스타일
  [
    {
      label: '텀블러',
      href: '/product?category=49',
    },
    {
      label: '컵',
      href: '/product?category=50',
      sub: [
        { label: '머그컵', href: '/product?category=60' },
        { label: '유리컵', href: '/product?category=61' },
        { label: '술잔', href: '/product?category=161' },
        { label: '종이컵/컵홀더', href: '/product?category=62' },
        { label: '기타 컵', href: '/product?category=167' },
      ],
    },
    {
      label: '여행',
      href: '/product?category=56',
      sub: [
        { label: '가방/파우치', href: '/product?category=79' },
        { label: '충전기/어댑터', href: '/product?category=80' },
        { label: '여권/네임택', href: '/product?category=81' },
      ],
    },
    {
      label: '캠핑',
      href: '/product?category=172',
    },
    {
      label: '악세서리',
      href: '/product?category=203',
    },
    {
      label: '계절용품',
      href: '/product?category=58',
      sub: [
        { label: '부채', href: '/product?category=83' },
        { label: '핫팩', href: '/product?category=84' },
      ],
    },
    {
      label: '매트',
      href: '/product?category=59',
    },
    {
      label: '스포츠',
      href: '/product?category=57',
      sub: [
        { label: '골프', href: '/product?category=82' },
        { label: '기타', href: '/product?category=178' },
      ],
    },
    {
      label: '반려동물',
      href: '/product?category=55',
    },
    {
      label: '차량용',
      href: '/product?category=185',
    },
  ],
  // 테크/오피스
  [
    {
      label: '모바일 악세서리',
      href: '/product?category=85',
      sub: [
        { label: '휴대폰/아이패드 케이스', href: '/product?category=92' },
        { label: '에어팟/버즈 케이스', href: '/product?category=93' },
        { label: '스마트톡', href: '/product?category=94' },
        { label: '휴대폰 카드홀더', href: '/product?category=98' },
        { label: '스트랩', href: '/product?category=180' },
      ],
    },
    {
      label: '마우스패드',
      href: '/product?category=86',
      sub: [
        { label: '일반 마우스패드', href: '/product?category=155' },
        { label: '장패드', href: '/product?category=156' },
        { label: '충전형 마우스패드', href: '/product?category=165' },
      ],
    },
    {
      label: '충전/배터리',
      href: '/product?category=88',
      sub: [
        { label: '보조배터리', href: '/product?category=95' },
        { label: '충전기', href: '/product?category=96' },
        { label: '멀티허브/케이블', href: '/product?category=97' },
      ],
    },
    {
      label: 'USB',
      href: '/product?category=89',
      sub: [
        { label: '거치대/스탠드', href: '/product?category=90' },
        { label: '마우스/키보드', href: '/product?category=91' },
      ],
    },
    {
      label: '계절용품',
      href: '/product?category=204',
      sub: [
        { label: '선풍기', href: '/product?category=205' },
        { label: '손난로', href: '/product?category=206' },
      ],
    },
    {
      label: '기타 데스크제품',
      href: '/product?category=87',
    },
  ],
  // 의류/잡화
  [
    {
      label: '상의',
      href: '/product?category=103',
      sub: [
        { label: '티셔츠', href: '/product?category=111' },
        { label: '카라티 (폴로티)', href: '/product?category=169' },
        { label: '맨투맨', href: '/product?category=179' },
        { label: '후드집업', href: '/product?category=112' },
        { label: '후드티', href: '/product?category=113' },
        { label: '자켓', href: '/product?category=114' },
      ],
    },
    {
      label: '하의',
      href: '/product?category=104',
      sub: [{ label: '바지', href: '/product?category=115' }],
    },
    {
      label: '파우치/지갑',
      href: '/product?category=107',
      sub: [
        { label: '일반 파우치', href: '/product?category=120' },
        { label: '노트북 파우치', href: '/product?category=121' },
        { label: '지갑', href: '/product?category=122' },
      ],
    },
    {
      label: '가방/에코백',
      href: '/product?category=106',
      sub: [
        { label: '에코백', href: '/product?category=117' },
        { label: '타포린/부직포백', href: '/product?category=118' },
        { label: 'PVC백', href: '/product?category=194' },
        { label: '보냉가방', href: '/product?category=170' },
        { label: '백팩&짐색', href: '/product?category=195' },
        { label: '레디백', href: '/product?category=119' },
      ],
    },
    {
      label: '모자',
      href: '/product?category=105',
    },
    {
      label: '슬리퍼',
      href: '/product?category=188',
    },
    {
      label: '홈웨어',
      href: '/product?category=184',
    },
    {
      label: '앞치마',
      href: '/product?category=181',
    },
  ],
  // 패키지
  [
    {
      label: '박스',
      href: '/product?category=124',
      sub: [{ label: '맞춤제작 박스', href: '/product?category=128' }],
    },
    {
      label: '쇼핑백',
      href: '/product?category=125',
      sub: [
        { label: '기성품 쇼핑백', href: '/product?category=129' },
        { label: '맞춤제작 쇼핑백', href: '/product?category=130' },
      ],
    },
    {
      label: '봉투/파우치',
      href: '/product?category=108',
    },
    {
      label: '파우치',
      href: '/product?category=177',
    },
    {
      label: '지퍼백',
      href: '/product?category=123',
    },
    {
      label: '포장작업',
      href: '/product?category=126',
    },
  ],
  // 브랜드 키트
  [
    {
      label: '키트 상품',
      href: '/product?category=208',
    },
  ],
  // 홍보물/전시
  [
    {
      label: '현수막',
      href: '/product?category=131',
    },
    {
      label: '시트지',
      href: '/product?category=132',
    },
    {
      label: '배너/등신대',
      href: '/product?category=133',
    },
    {
      label: '토퍼',
      href: '/product?category=134',
    },
    {
      label: '기타 홍보물',
      href: '/product?category=136',
      sub: [{ label: '문고리', href: '/product?category=137' }],
    },
  ],
];

export default function Gnb() {
  const [active, setActive] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <nav>
      <ul className="flex items-center gap-[8px] text-[18px] text-[#626262]">
        {gnb.map((item, index) => (
          <li
            key={item.label}
            className={`${
              index === 3 ? 'relative' : ''
            } flex items-center h-[85px]`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            <Link
              href={item.href || ''}
              className="p-[6px_12px_7px] hover:bg-point1 hover:rounded-[20px] hover:text-[#fff]"
            >
              {item.label}
            </Link>

            {item.sub && item.sub?.length > 0 && (
              <ul
                className={`absolute left-1/2 top-[85px] -translate-x-1/2 ${
                  index === 2
                    ? 'flex justify-between max-w-[1200px] w-full h-[52px] bg-white border-b-1 border-[#eee]'
                    : ''
                } ${
                  index === 3
                    ? 'flex gap-x-[20px] whitespace-nowrap p-[16px] border'
                    : ''
                } ${active === index ? 'block' : 'hidden'} `}
              >
                {item.sub.map((item, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => setActiveProduct(i)}
                    onMouseLeave={() => setActiveProduct(null)}
                    className="w-full p-[10px_0_0_30px]"
                  >
                    <Link
                      href={item.href}
                      className="block h-[40px] text-center "
                    >
                      {item.label}
                    </Link>
                    {i === 2 && (
                      <ProductMenu
                        className={activeProduct === i ? 'block' : 'hidden'}
                        menus={productMenu[i]}
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
