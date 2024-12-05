import type { ReactNode } from "react"
import clsx from "clsx"

type HeadingProps = {
  as?: "h1" | "h2" | "h3"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  children?: ReactNode
}
/**
 * A versatile Heading component that renders different heading levels (h1, h2, h3)
 * with customizable sizes and additional class names.
 *
 * @param {Object} props - The properties object.
 * @param {"h1" | "h2" | "h3"} [props.as="h1"] - The HTML heading element to render.
 * @param {"sm" | "md" | "lg" | "xl"} [props.size="lg"] - The size of the heading.
 * @param {string} [props.className] - Additional class names to apply to the heading.
 * @param {ReactNode} [props.children] - The content to be displayed within the heading.
 *
 * @returns {JSX.Element} The rendered heading element.
 */
export function Heading({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-semibold leading-tight tracking-tight md:leading-tight",
        size === "xl" && "text-5xl md:text-7xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "sm" && "text-xl md:text-2xl",
        className,
      )}
    >
      {children}
    </Comp>
  )
}
