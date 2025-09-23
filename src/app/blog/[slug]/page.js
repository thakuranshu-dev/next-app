import { blogPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BlogPost({params}){
  const post = blogPosts.find(p => p.slug === params.slug);

  if(!post) 
    return notFound();

  return(
    <div style={{textAlign:"center", padding:"2rem"}}>
      <h1>{post.title}</h1>
      <p style={{marginTop:"1rem"}}>{post.content}</p>
      <p style={{marginTop:"1rem"}}>
        <strong>Author: </strong>{post.author}
      </p>
      <p style={{marginBlock:"1rem"}}>
        <strong>Date: </strong>{post.date}
      </p>
      <Link href="/blog">👈 Back to Blog</Link>
    </div>
  )
}