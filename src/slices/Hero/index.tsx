import { Parallax } from "@/components/Parallax"
import {
  type Content,
  type ImageField,
  isFilled,
  type LinkField,
  type RichTextField,
} from "@prismicio/client"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import type { SliceComponentProps } from "@prismicio/react"

import { Bounded } from "@/components/Bounded"
import { PrismicRichText } from "@/components/PrismicRichText"
import AuroraBackground from "@/components/aurora-background"

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
    <section className="relative overflow-hidden bg-neutral text-neutral-content">
      {isFilled.image(backgroundImage) && (
        <AuroraBackground>
          <Bounded yPadding="lg" className="relative">
            <div className="flex flex-col items-center gap-8">
              <div className="prose prose-xl prose-neutral mx-auto max-w-2xl text-balance dark:prose-invert prose-headings:text-neutral-content prose-p:text-neutral-content">
                <PrismicRichText field={text} />
              </div>
              {isFilled.link(link) && (
                <PrismicNextLink
                  field={link}
                  className="btn btn-outline btn-primary"
                >
                  {buttonText || "Learn More"}
                </PrismicNextLink>
              )}
            </div>
          </Bounded>
        </AuroraBackground>
      )}
    </section>
  )
}

export default Hero
