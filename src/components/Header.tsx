import { createClient } from "@/prismicio"
import { asText } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { PrismicText } from "@prismicio/react"
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
        <nav>
          <ul className="menu menu-horizontal p-0">
            {navigation.data?.links.map((item) => (
              <li className="mr-4" key={asText(item.label)}>
                <PrismicNextLink
                  field={item.link}
                  className="text-base-content hover:text-primary"
                >
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeController />
      </div>
    </div>
  )
}

export default Header
