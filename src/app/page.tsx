import { db } from "../server/db"

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/3Swo5j9vraijApgovuH4r1bLBjGDIapcvYKtNm3yUnWOCPe2",
  "https://utfs.io/f/3Swo5j9vraijRbTZmHxj7fqtQnhI0mJcDsab139HeAGk5p2g",
  "https://utfs.io/f/3Swo5j9vraijbXa9H5TJ8OvTWwk2FXR46shYe7KfQajZMn03",
  "https://utfs.io/f/3Swo5j9vraijH8youFIn40QxWvpeasjbMXhIGUdCDztuo8FO",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}

