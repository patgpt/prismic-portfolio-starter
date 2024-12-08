import { Metadata } from "next"
import { notFound } from "next/navigation"
import { PrismicImage, SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { PrismicRichText } from "@/components/PrismicRichText"

type Params = { uid: string }

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params
  const client = createClient()
  const page = await client
    .getByUID("experience_entry", uid)
    .catch(() => notFound())

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-sm sm:prose-base lg:prose-xl prose-headings:text-primary">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-primary">{page.data.title}</h1>
      <PrismicImage
        className="rounded-lg shadow-md w-full max-w-sm mx-auto"
        field={page.data.company_logo}
      />
      <h3 className="text-xl sm:text-2xl mt-4 text-secondary"> {page.data.company_name}</h3>
      <span className="text-pretty font-thin text-neutral-content text-sm sm:text-base block mb-4">
        From: {page.data.date_start} To: {page.data.date_end}
      </span>
      <div className="mt-6 prose-p:text-neutral-content">
        <PrismicRichText field={page.data.job_description} />
      </div>
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
  const page = await client
    .getByUID("experience_entry", uid)
    .catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType("experience_entry")

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
