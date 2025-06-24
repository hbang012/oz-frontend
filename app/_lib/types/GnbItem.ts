export type GnbItem = {
  id: number; // 메뉴 ID
  label: string; // 표시 이름 (예: 제작소, 문구, 스티커 등)
  href: string | null; // 링크 주소 (없을 수도 있음)
  parent_id: number | null; // 상위 메뉴 ID (null이면 루트)
  depth: number; // 계층 깊이 (0 = 상위, 1 = 중, 2 = 하위 등)
  sort_order: number; // 출력 순서
  created_at: string; // 생성일 (MySQL DATETIME → ISO 문자열)
  sub?: GnbItem[]; // 하위 메뉴 배열 (있을 경우)
};
