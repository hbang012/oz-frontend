const BASE = 'http://localhost:3001/blog';

export async function getPosts() {
  const res = await fetch(BASE);
  return res.json();
}

export async function getPost(id: string) {
  const res = await fetch(`${BASE}/${id}`);
  return res.json();
}

export async function createPost(data: {
  title: string;
  description: string;
  thumbnail_url: string;
  created_at: string;
}) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updatePost(
  id: string,
  data: {
    title: string;
    description: string;
    thumbnail_url: string;
  }
) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deletePost(id: string) {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  return res.json();
}
