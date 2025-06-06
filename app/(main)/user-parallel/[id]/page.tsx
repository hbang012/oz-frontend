import { resolve } from 'path';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

// 함수선언을 위에 하면 렌더링시 재선언하지않음
async function getUserPosts(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch mock data');
  }

  // 변수로 받고말고 하지말고 바로 바깥으로 보냄, 대입을 하지 않아서 Promise가 살아있는 상태로 리턴됨 , json의 리턴이 Promise 이기 때문임
  return response.json();
}

async function getUserAlbums(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch mock data');
  }

  return response.json();
}

export default async function UserParallel({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // await 사용시 관련 데이타가 순차적으로 들어오기 때문에 병렬어쩌구는 await 사용하지 않음
  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);

  // 프라미스 완료=성공=해제
  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold mb-[20px]">유저 프로필</h2>
      <div className="grid grid-cols-2 gap-x-[20px]">
        <div>
          <h3 className="text-[20px] font-medium mb-[10px]">포스트</h3>
          <ul className="space-y-[15px]">
            {posts.map((post: Post) => (
              <li key={post.id} className="bg-[#eee] p-[15px] rounded-[8px]">
                <strong className="font-bold block mb-[10px]">
                  {post.title}
                </strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[20px] font-medium mb-[10px]">앨범</h3>
          <ul className="space-y-[15px]">
            {albums.map((album: Album) => (
              <li key={album.id} className="bg-[#eee] p-[15px] rounded-[8px]">
                <strong className="font-bold">{album.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
