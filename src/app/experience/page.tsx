import { ExperienceCard } from "@/components/ExperienceCard"
import { createClient } from "@/prismicio"
import { notFound } from "next/navigation"
import clsx from "clsx"

async function Page() {
  const client = createClient()
  const pages = await client.getAllByType("experience_entry")
  if (!pages) {
    return notFound()
  }

  return (
    <div className={clsx("container", "mx-auto", "max-w-6xl", "p-8")}>
      <div className="relative">
        <div
          className={clsx(
            "absolute h-full w-0.5 bg-primary/30",
            "left-0",
            "sm:left-1/2",
          )}
        ></div>
        <ul className="relative z-10 flex flex-col gap-12">
          {pages.map((page, index) => (
            <li key={page.id}>
              <ExperienceCard data={page.data} uid={page.uid} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Page
