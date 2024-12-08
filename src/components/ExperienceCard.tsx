import { PrismicRichText } from "@/components/PrismicRichText"
import { PrismicImage } from "@prismicio/react"
import { asDate, Content } from "@prismicio/client"
import { Bounded } from "@/components/Bounded"

interface ExperienceCardProps {
  data: Content.ExperienceEntryDocument["data"]
}

export function ExperienceCard({ data }: ExperienceCardProps) {
  return (
    <Bounded
      as="div"
      className="card border border-white/20 bg-white/30 shadow-xl backdrop-blur-md dark:bg-black/30"
    >
      <figure className="px-10 pt-10">
        <PrismicImage field={data.company_logo} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{data.title}</h2>
        <h3 className="text-xl">{data.company_name}</h3>
        <p className="text-sm opacity-70">
          {asDate(data.date_start)?.toLocaleDateString()} -{" "}
          {asDate(data.date_end)?.toLocaleDateString() ?? "Present"}
        </p>
        <div className="card-actions">
          <PrismicRichText field={data.short_description} />
        </div>
      </div>
    </Bounded>
  )
}
