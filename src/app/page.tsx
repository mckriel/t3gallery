import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}

