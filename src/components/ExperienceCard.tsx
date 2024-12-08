import Link from "next/link"
import { PrismicRichText } from "@/components/PrismicRichText"
import { PrismicImage } from "@prismicio/react"
import { asDate, Content, type ImageFieldImage } from "@prismicio/client"
import clsx from "clsx"
import { PrismicNextLink } from "@prismicio/next"

interface ExperienceCardProps {
  data: Content.ExperienceEntryDocument["data"]
  uid: string
  index: number
}

const TimelineDot = () => (
  <div
    className={clsx(
      "absolute -translate-x-1/2",
      "left-0 top-[2.5rem]",
      "sm:left-1/2 sm:top-auto",
    )}
  >
    <div className="h-4 w-4 rounded-full bg-primary" />
  </div>
)
// TODO: Implement CompanyLogo component with proper typings from Prismic

const CompanyLogo = ({
  logo,
}: {
  logo: ImageFieldImage | null | undefined
}) => (
  <figure className="absolute right-4 top-4 h-16 w-16 rounded-xl bg-base-100">
    <PrismicImage field={logo} className="h-full w-full object-contain p-2" />
  </figure>
)

export function ExperienceCard({ data, uid, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0
  const linkHref = `/experience/${uid}`

  const titleClasses = clsx(
    // Mobile styles
    "relative w-full pl-8",
    // Desktop styles
    "sm:absolute sm:w-[calc(50%-2rem)]",
    isEven
      ? "sm:left-[50%] sm:pl-8 sm:text-left"
      : "sm:right-[50%] sm:pr-8 sm:text-right",
  )

  const cardWrapperClasses = clsx(
    // Mobile styles
    "w-full pl-8",
    // Desktop styles
    "relative sm:w-[calc(50%-2rem)]",
    isEven ? "sm:mr-[50%] sm:pr-8" : "sm:ml-[50%] sm:pl-8",
  )

  return (
    <div className="relative flex flex-col gap-4 sm:block sm:min-h-[200px]">
      {/* Title and date */}
      <PrismicNextLink href={linkHref} className={clsx(titleClasses, "group")}>
        <h3 className="text-xl font-bold text-primary group-hover:underline">
          {data.title}
        </h3>
        <p className="text-sm text-base-content/70">
          {asDate(data.date_start)?.toLocaleDateString()} -{" "}
          {asDate(data.date_end)?.toLocaleDateString() ?? "Present"}
        </p>
      </PrismicNextLink>

      <TimelineDot />

      {/* Card content */}
      <div className={cardWrapperClasses}>
        <Link href={linkHref} className="group block">
          <div className="card relative bg-base-200 shadow-xl transition-all group-hover:scale-[1.02] group-hover:shadow-2xl">
            <CompanyLogo logo={data.company_logo} />
            <div className="card-body pt-24">
              <h3 className="text-xl text-secondary">{data.company_name}</h3>
              <div className="card-actions text-base-content">
                <PrismicRichText field={data.short_description} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
