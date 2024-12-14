import React from "react"
import { createClient } from "@/prismicio"
import { PrismicRichText } from "@/components/PrismicRichText"
import { SliceZone } from "@prismicio/react"
import { PrismicNextLink } from "@prismicio/next"
import type { BlogPostDocument } from "../../../prismicio-types"
async function Page() {
  const client = createClient()
  const blogPosts = await client.getAllByType("blog_post")

  return (
    <ul>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.data.title}</h2>
          <PrismicRichText field={post.data.excerpt} />
        </div>
      ))}
    </ul>
  )
}

export default Page
