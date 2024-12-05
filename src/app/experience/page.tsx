import { ExperienceCard } from "@/components/ExperienceCard";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";


async function Page() {
    const client = createClient();
    const pages = await client.getAllByType("experience_entry");
    if (!pages) {
        return notFound();
    }

    return (
        <div className="grid gap-6 p-4">
            {pages.map((page) => (
                <ExperienceCard key={page.id} data={page.data} />
            ))}
        </div>
    );
}

export default Page