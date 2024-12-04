import type { ReactNode } from "react"
import clsx from "clsx"

type BoundedProps = {
  as?: "div" | "section" | "header"
  yPadding?: "sm" | "base" | "lg"
  collapsible?: boolean
  className?: string
  children?: ReactNode
}
/**
 * A flexible component that wraps its children with configurable padding and HTML element type.
 *
 * @param {Object} props - The properties object.
 * @param {"div" | "section" | "header"} [props.as="div"] - The HTML element type to render.
 * @param {"sm" | "base" | "lg"} [props.yPadding="base"] - The vertical padding size.
 * @param {boolean} [props.collapsible=true] - Whether the component is collapsible.
 * @param {string} [props.className] - Additional class names to apply to the component.
 * @param {ReactNode} [props.children] - The content to be wrapped by the component.
 * @returns {JSX.Element} The rendered component with the specified properties.
 */
export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}: BoundedProps): JSX.Element {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-6",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-28",
        yPadding === "lg" && "py-32 md:py-48",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  )
}
