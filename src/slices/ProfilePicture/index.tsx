import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `ProfilePicture`.
 */
export type ProfilePictureProps =
  SliceComponentProps<Content.ProfilePictureSlice>

/**
 * Component for "ProfilePicture" Slices.
 */
const ProfilePicture = ({ slice }: ProfilePictureProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for profile_picture (variation: {slice.variation})
      Slices
    </section>
  )
}

export default ProfilePicture
