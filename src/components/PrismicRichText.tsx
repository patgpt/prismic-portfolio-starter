import {
  PrismicRichText as BasePrismicRichText,
  type PrismicRichTextProps,
  type JSXMapSerializer,
} from "@prismicio/react"
import { PrismicNextLink } from "@prismicio/next"

import { Heading } from "./Heading"
/**
 * A custom wrapper component for rendering Prismic rich text content with predefined styles and components.
 *
 * This component extends the `PrismicRichText` component from `@prismicio/react` and provides default
 * styling and components for various rich text elements such as headings, paragraphs, lists, and more.
 *
 * @param {PrismicRichTextProps} props - The props for the PrismicRichText component.
 * @param {JSXMapSerializer} [props.components] - Optional custom components to override the default components.
 *
 * @returns {JSX.Element} The rendered Prismic rich text content with applied styles and components.
 *
 * @example
 * ```tsx
 * import { PrismicRichText } from './PrismicRichText';
 *
 * const myRichText = [
 *   {
 *     type: 'heading1',
 *     text: 'Hello World',
 *     spans: [],
 *   },
 *   {
 *     type: 'paragraph',
 *     text: 'This is a paragraph.',
 *     spans: [],
 *   },
 * ];
 *
 * <PrismicRichText field={myRichText} />
 * ```
 */
const defaultComponents: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
}

export function PrismicRichText({
  components,
  ...props
}: PrismicRichTextProps) {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  )
}
