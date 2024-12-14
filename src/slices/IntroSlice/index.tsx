import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `IntroSlice`.
 */
export type IntroSliceProps = SliceComponentProps<Content.IntroSliceSlice>

/**
 * Component for "IntroSlice" Slices.
 */
const IntroSlice = ({ slice }: IntroSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for intro_slice (variation: {slice.variation})
      Slices
    </section>
  )
}

export default IntroSlice
