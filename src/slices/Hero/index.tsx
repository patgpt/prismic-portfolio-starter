import { type AnySlicePrimaryField, type Content, type ImageField, isFilled, type LinkField, type RichTextField } from "@prismicio/client"
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next"
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react"
import { Parallax } from "@/components/Parallax"
import { ReactNode } from 'react'

import { Bounded } from "@/components/Bounded"
import { Heading } from "@/components/Heading"
import { PrismicRichText } from "@/components/PrismicRichText"

const components: JSXMapSerializer = {
  heading1: ({ children }: { children: ReactNode }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
}

type HeroProps = SliceComponentProps<Content.HeroSlice>

const Hero = ({ slice }: HeroProps) => {
  const backgroundImage = slice.primary.backgroundImage as
    | ImageField<never>
    | null
    | undefined

  const text = slice.primary.text as RichTextField | null | undefined
  const link = slice.primary.buttonLink as
    | LinkField<string, string, unknown>
    | null
    | undefined
  const buttonText = slice.primary.buttonText as string | null | undefined

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {isFilled.image(backgroundImage) && (
        <Parallax>
          <PrismicNextImage
            field={backgroundImage}
            alt=""
            fill={true}
            className="pointer-events-none h-full w-full select-none object-cover opacity-50"
          />
        </Parallax>
      )}
      <Bounded yPadding="lg" className="relative">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText field={text} components={components} />
          </div>
          {isFilled.link(link) && (
            <PrismicNextLink
              field={link}
              className="rounded bg-white px-5 py-3 font-medium text-slate-800"
            >
              {buttonText || "Learn More"}
            </PrismicNextLink>
          )}
        </div>
      </Bounded>
    </section>
  )
}

export default Hero
