import Link from "next/link"
import { getPostsByProject } from "@/lib/posts"

interface Props {
  project: string
  limit?: number
}

export default function RelatedPosts({ project, limit = 3 }: Props) {
  const posts = getPostsByProject(project, limit)

  if (posts.length === 0) {
    return null
  }

  return (
    <ul>
      <li className="text-neutral-500 text-sm">related posts:</li>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="text-sm">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            {post.date && (
              <span className="text-neutral-500 ml-2">({post.date})</span>
            )}
          </li>
        ))}
      </ul>
    </ul>
  )
}
