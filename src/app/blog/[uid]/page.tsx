import { Metadata } from "next"
import { notFound } from "next/navigation"
import { SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { PrismicRichText } from "@/components/PrismicRichText"
import { PrismicNextImage } from "@prismicio/next"

type Params = { uid: string }

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params
  const client = createClient()
  const page = await client.getByUID("blog_post", uid).catch(() => notFound())

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>{page.data.title}</h1>
      <PrismicNextImage field={page.data.featured_image} />
      <PrismicRichText field={page.data.content} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { uid } = await params
  const client = createClient()
  const page = await client.getByUID("blog_post", uid).catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType("blog_post")

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
