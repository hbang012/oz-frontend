export interface BlogPost {
  post_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
  created_at: string;
  updated_at: string | null;
}
