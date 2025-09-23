import Link from "next/Link";
import { blogPosts } from "@/lib/blogs";

export default function BlogPage(){
  return(
    <div style={{textAlign:"center", padding:"2rem"}}>
      <h1>Blogs</h1>
      <ul style={{padding:"1rem", listStyle:"none"}}>
        {blogPosts.map(post =>(
          <li key={post.slug}
          style={{paddingBlock:"0.5rem", color:"blue"}}
          >
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}