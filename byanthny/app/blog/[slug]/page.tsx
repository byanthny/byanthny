import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts"
import Link from "next/link"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} | byanthny`,
    description: post.description,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-28 pb-20 px-[8%] md:px-[20%]">
      <Link
        href="/blog"
        className="text-neutral-500 hover:text-white text-sm mb-6 inline-block"
      >
        &larr; back to blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          {post.date && (
            <time className="text-sm text-neutral-500">{post.date}</time>
          )}
        </header>

        <div className="prose prose-invert prose-neutral max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  )
}
