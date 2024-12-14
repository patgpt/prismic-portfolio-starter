import { Metadata } from "next"
import { notFound } from "next/navigation"
import { PrismicImage, SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { PrismicRichText } from "@/components/PrismicRichText"
import { isFilled } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"

type Params = { uid: string }

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params
  const client = createClient()
  const page = await client
    .getByUID("experience_entry", uid)
    .catch(() => notFound())

  return (
    <div className="container prose prose-sm mx-auto my-8 max-w-4xl p-4 sm:prose-base lg:prose-xl prose-headings:text-primary sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl text-primary sm:mb-6 sm:text-4xl lg:text-5xl">
        {page.data.title}
      </h1>
      {isFilled.image(page.data.company_logo) && (
        <PrismicNextImage
          className="mx-auto w-full max-w-sm rounded-lg shadow-md"
          field={page.data.company_logo}
        />
      )}
      <h3 className="mt-4 text-xl text-secondary sm:text-2xl">
        {page.data.company_name}
      </h3>
      <span className="mb-4 block text-pretty text-sm font-thin text-base-content/80 sm:text-base">
        From: {page.data.date_start} To: {page.data.date_end}
      </span>
      <div className="mt-6 prose-p:text-base-content prose-strong:text-base-content prose-em:text-base-content/90">
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
