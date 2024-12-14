import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import { PrismicText } from "@prismicio/react"
import { NavigationMenu } from "./NavigationMenu"
import { ThemeController } from "./ThemeController"

async function Header() {
  const client = createClient()
  const settings = await client.getSingle("settings")
  const navigation = await client.getSingle("navigation")

  return (
    <div className="navbar sticky left-0 top-0 z-50 bg-base-100 shadow-2xl">
      <div className="navbar-start">
        <PrismicNextLink
          href="/"
          className="ml-4 text-xl font-semibold tracking-tight text-base-content"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
      </div>
      <div className="navbar-end">
        {navigation.data?.links && <NavigationMenu links={navigation.data.links} />}
        <ThemeController />
      </div>
    </div>
  )
}

export default Header
