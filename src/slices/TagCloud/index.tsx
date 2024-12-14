import { asText, Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import type { JSX } from "react"

type TagCloudProps = SliceComponentProps<Content.TagCloudSlice>
const TagCloud = ({ slice }: TagCloudProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-bold text-primary">
          {slice.primary.title}
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {slice.primary.tags.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-800"
            >
              {item.tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TagCloud
