import type { ElementType, ReactNode } from "react"

type ConditionalWrapProps = {
  condition: boolean
  wrap: ElementType
  children: ReactNode
}

/**
 * A component that conditionally wraps its children with a specified wrapper component.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.condition - The condition to determine whether to wrap the children.
 * @param {ElementType} props.wrap - The wrapper component to use if the condition is true.
 * @param {ReactNode} props.children - The children to be conditionally wrapped.
 * @returns {ReactNode} - The wrapped or unwrapped children based on the condition.
 */
export function ConditionalWrap({
  condition,
  wrap: Wrap,
  children,
}: ConditionalWrapProps): ReactNode {
  return condition ? <Wrap>{children}</Wrap> : children
}
