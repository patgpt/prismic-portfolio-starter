"use client"
import { PrismicRichText } from "@/components/PrismicRichText"
import { isFilled, type DateField } from "@prismicio/client"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import type { ExperienceEntryDocument } from "../../../../prismicio-types"
import TimelineIntro from "@/components/ui/timeline/timeline-intro"

type TimelineEntry = ExperienceEntryDocument<string>["data"] & {
  uid: string
}

const TimelineDate = ({ logo, date }: { logo: any; date: DateField }) => (
  <div className="sticky top-20 z-40 flex w-24 max-w-xs flex-col items-center self-start md:top-40 md:w-full md:flex-row lg:max-w-sm">
    <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-base-200 bg-base-100 shadow-md md:left-3 md:h-10 md:w-10">
      {isFilled.image(logo) && (
        <PrismicNextImage
          field={logo}
          className="h-5 w-5 rounded-full bg-base-100/50 md:h-6 md:w-6"
          fallbackAlt=""
        />
      )}
    </div>
    <p className="hidden text-sm font-bold text-base-content/40 md:block md:pl-20 md:text-5xl md:text-base">
      {date}
    </p>
  </div>
)

const TimelineItem = ({ item }: { item: TimelineEntry }) => (
  <div className="flex justify-start pt-6 md:gap-10 md:pt-40">
    <TimelineDate logo={item.company_logo} date={item.date_start} />
    <div className="card flex-1 bg-base-100 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="card-body relative p-4 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            {/* COMPANY NAME */}
            {item.company_name && (
              <h4 className="card-title text-sm text-primary md:text-base">
                {item.company_name}
              </h4>
            )}
            {/* JOB TITLE */}
            {isFilled.keyText(item.title) && (
              <p className="text-base font-bold text-base-content/70 md:text-lg">
                {item.title}
              </p>
            )}
            {/* SHORT DESCRIPTION */}
            {isFilled.richText(item.short_description) && (
              <div className="prose-base-content hover:prose-primary prose prose-sm mt-2 transition-colors md:prose-base md:mt-4">
                <PrismicRichText field={item.short_description} />
              </div>
            )}
            {/* TAGS */}
            <div className="flex flex-wrap gap-1 md:gap-2">
              {item.tagcloud?.map((tag, i) => (
                <span
                  key={i}
                  className="badge badge-outline badge-sm mt-2 p-2 text-xs text-base-content md:badge-md md:mt-4 md:p-4 md:text-sm"
                >
                  {tag.tag}
                </span>
              ))}
            </div>
            {/* LEARN MORE */}
            <PrismicNextLink
              href={`/experience/${item.uid}`}
              className="btn btn-ghost btn-sm absolute bottom-2 right-2 mt-4 md:btn-md md:bottom-5 md:right-5"
            >
              Learn more &rarr;
            </PrismicNextLink>
          </div>
          <div className="h-16 w-16 shrink-0 rounded-xl bg-base-100/50 p-2 backdrop-blur-sm md:h-20 md:w-20 md:rounded-2xl md:p-3">
            {/* Company Logo */}
            {isFilled.image(item.company_logo) && (
              <PrismicNextImage
                field={item.company_logo}
                className="h-full w-full object-contain drop-shadow-md"
                fallbackAlt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const TimelineLine = ({
  height,
  heightTransform,
  opacityTransform,
}: {
  height: number
  heightTransform: any
  opacityTransform: any
}) => (
  <div
    style={{ height: height + "px" }}
    className="absolute left-0 top-0 w-[1px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-base-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 md:w-[2px]"
  >
    <motion.div
      style={{
        height: heightTransform,
        opacity: opacityTransform,
      }}
      className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary from-[0%] via-accent via-[10%] to-transparent"
    />
  </div>
)

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className="w-full bg-base-100 px-4 font-sans md:px-10"
      ref={containerRef}
    >
      <TimelineIntro />
      <div ref={ref} className="relative mx-auto max-w-7xl pb-10 md:pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
        <TimelineLine
          height={height}
          heightTransform={heightTransform}
          opacityTransform={opacityTransform}
        />
      </div>
    </div>
  )
}
