export type Product = {
  product_id: number;
  name: string;
  image_url: string;
  created_at: string;

  price?: number; // 선택값 - 공급가 + 배송비 등 계산될 수 있음
  quantity_range: string; // 최소 수량 (예: "1개 이상")

  supply_price: string; // 숫자 → 문자열 변환
  shipping_fee: string; // 숫자 → 문자열 변환

  description: string;

  delivery_method_id: number;
  custom_note_id: number;
  product_attachment_id: number | null;
  packaging_type_id: number;
  product_pricing_id: number;

  category_large_id: number;
  category_medium_id: number;
  category_small_id: number;

  category_large_name: string;
  category_medium_name: string;
  category_small_name: string;
};
