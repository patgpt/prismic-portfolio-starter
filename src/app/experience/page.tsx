import { Timeline } from "@/components/ui/timeline/timeline"
import { createClient } from "@/prismicio"
import { notFound } from "next/navigation"

async function Page() {
  const client = createClient()
  const pages = await client.getAllByType("experience_entry")
  if (!pages) {
    return notFound()
  }

  const sortedData = [...pages]
    .sort(
      (a, b) =>
        new Date(b.data.date_start || "").getTime() -
        new Date(a.data.date_start || "").getTime(),
    )
    .map((page) => ({
      ...page.data,
      uid: page.uid,
    }))

  return <Timeline data={sortedData} />
}

export default Page
