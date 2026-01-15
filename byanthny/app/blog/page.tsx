import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export const metadata = {
  title: "blog | byanthny",
  description: "thoughts and notes",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="pt-28 pb-20 px-[8%] md:px-[20%]">
      <h1 className="text-2xl font-bold mb-6">blog</h1>

      {posts.length === 0 ? (
        <p className="text-neutral-400">no posts yet.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-neutral-800 pb-4">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                {post.date && (
                  <time className="text-sm text-neutral-500">{post.date}</time>
                )}
                {post.description && (
                  <p className="text-neutral-400 mt-1">{post.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
