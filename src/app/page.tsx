import Link from "next/link";
import Image from "next/image";
import { posts } from "./data/posts";

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold text-pink-400">Welcome to {"Samra's"} Blog</h1>
      <p className="mt-2 text-gray-300">Explore the latest articles on web development.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image src={`https://loremflickr.com/500/300?random=${post.id}`} alt={post.title} width={500} height={300} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.description}</p>
              <Link href={`/blog/${post.id}`} className="text-pink-300 hover:underline mt-4 inline-block">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
