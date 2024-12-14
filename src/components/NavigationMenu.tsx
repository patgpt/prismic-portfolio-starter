"use client"

import SquigglyUnderline from "@/components/squiggly-underline"



type NavigationMenuProps = {
  links: Array<{
    label: any
    link: any
  }>
}

export function NavigationMenu({ links }: NavigationMenuProps) {
  return (
    <nav>
      <SquigglyUnderline links={links} />
    </nav>
  )
}
