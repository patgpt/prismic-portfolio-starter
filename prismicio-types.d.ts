// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client"

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type BlogDocumentDataSlicesSlice = never

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<BlogDocumentData>, "blog", Lang>

type BlogPostDocumentDataSlicesSlice = TagCloudSlice

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Excerpt field in *Blog Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.excerpt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  excerpt: prismic.RichTextField

  /**
   * Content field in *Blog Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField

  /**
   * Featured Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >

type ExperienceDocumentDataSlicesSlice = TextSlice

/**
 * Content for Experience documents
 */
interface ExperienceDocumentData {
  /**
   * Title field in *Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Page Title
   * - **API ID Path**: experience.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Slice Zone field in *Experience*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ExperienceDocumentDataSlicesSlice> /**
   * Meta Title field in *Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: experience.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: experience.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Experience*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Experience document from Prismic
 *
 * - **API ID**: `experience`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExperienceDocumentData>,
    "experience",
    Lang
  >

/**
 * Item in *Experience Entry → TagCloud*
 */
export interface ExperienceEntryDocumentDataTagcloudItem {
  /**
   * Tag field in *Experience Entry → TagCloud*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.tagcloud[].tag
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tag: prismic.SelectField<
    | "Adobe Target"
    | "Adobe XD"
    | "UX"
    | "Google Tag Manager"
    | "Google Analytics"
    | "Optimizely"
    | "Javascript"
    | "Typescript"
    | "Next.js"
    | "Vue.js"
    | "React.js"
    | "Flutter"
    | "Dart"
    | "Agile"
    | "Scrum"
    | "Storybook"
    | "Contentful"
    | "Prismic"
    | "AWS"
    | "Google Cloud Platform"
    | "i18n"
    | "a11y"
    | "HTML"
    | "CSS"
    | "Docker"
    | "Jest"
    | "Playwrite"
    | "e2e Testing"
  >
}

type ExperienceEntryDocumentDataSlicesSlice = never

/**
 * Content for Experience Entry documents
 */
interface ExperienceEntryDocumentData {
  /**
   * Company Name field in *Experience Entry*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Company Name
   * - **API ID Path**: experience_entry.company_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField

  /**
   * Position Title field in *Experience Entry*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Position Title
   * - **API ID Path**: experience_entry.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Date Start field in *Experience Entry*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Employment start date
   * - **API ID Path**: experience_entry.date_start
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_start: prismic.DateField

  /**
   * Date End field in *Experience Entry*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Employment end date
   * - **API ID Path**: experience_entry.date_end
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_end: prismic.DateField

  /**
   * Company Logo field in *Experience Entry*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.company_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  company_logo: prismic.ImageField<never>

  /**
   * Parent field in *Experience Entry*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent: prismic.ContentRelationshipField<"experience">

  /**
   * Short Description field in *Experience Entry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Short Description
   * - **API ID Path**: experience_entry.short_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  short_description: prismic.RichTextField

  /**
   * Job Description field in *Experience Entry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.job_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  job_description: prismic.RichTextField

  /**
   * URL field in *Experience Entry*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField

  /**
   * TagCloud field in *Experience Entry*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.tagcloud[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tagcloud: prismic.GroupField<
    Simplify<ExperienceEntryDocumentDataTagcloudItem>
  >

  /**
   * Slice Zone field in *Experience Entry*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ExperienceEntryDocumentDataSlicesSlice> /**
   * Meta Title field in *Experience Entry*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: experience_entry.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Experience Entry*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: experience_entry.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Experience Entry*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_entry.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Experience Entry document from Prismic
 *
 * - **API ID**: `experience_entry`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceEntryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExperienceEntryDocumentData>,
    "experience_entry",
    Lang
  >

type HomeDocumentDataSlicesSlice = IntroSliceSlice

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >

type PageDocumentDataSlicesSlice =
  | HeroSlice
  | QuoteSlice
  | TextSlice
  | ImageSlice
  | ImageCardsSlice
  | TextWithImageSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent: prismic.ContentRelationshipField<"page">

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >

export type AllDocumentTypes =
  | BlogDocument
  | BlogPostDocument
  | ExperienceDocument
  | ExperienceEntryDocument
  | HomeDocument
  | NavigationDocument
  | PageDocument
  | SettingsDocument

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField

  /**
   * Button Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField

  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.backgroundImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundImage: prismic.ImageField<never>
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>

/**
 * Primary content in *Image → Banner → Primary*
 */
export interface ImageSliceBannerPrimary {
  /**
   * Image field in *Image → Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceBanner = prismic.SharedSliceVariation<
  "banner",
  Simplify<ImageSliceBannerPrimary>,
  never
>

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>

/**
 * Item in *ImageCards → Default → Primary → Cards*
 */
export interface ImageCardsSliceDefaultPrimaryCardsItem {
  /**
   * Image field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Text field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Button Link field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField

  /**
   * Button Text field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField
}

/**
 * Primary content in *ImageCards → Default → Primary*
 */
export interface ImageCardsSliceDefaultPrimary {
  /**
   * Heading field in *ImageCards → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField

  /**
   * Cards field in *ImageCards → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<ImageCardsSliceDefaultPrimaryCardsItem>>
}

/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageCardsSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *ImageCards*
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault

/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSlice = prismic.SharedSlice<
  "image_cards",
  ImageCardsSliceVariation
>

/**
 * Primary content in *IntroSlice → Default → Primary*
 */
export interface IntroSliceSliceDefaultPrimary {
  /**
   * PFP field in *IntroSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_slice.default.primary.pfp
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  pfp: prismic.ImageField<never>

  /**
   * Intro Heading Text field in *IntroSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_slice.default.primary.intro_heading_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro_heading_text: prismic.RichTextField

  /**
   * Intro Subheading Text field in *IntroSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_slice.default.primary.intro_subheading_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro_subheading_text: prismic.RichTextField
}

/**
 * Default variation for IntroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroSliceSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *IntroSlice*
 */
type IntroSliceSliceVariation = IntroSliceSliceDefault

/**
 * IntroSlice Shared Slice
 *
 * - **API ID**: `intro_slice`
 * - **Description**: IntroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroSliceSlice = prismic.SharedSlice<
  "intro_slice",
  IntroSliceSliceVariation
>

/**
 * Primary content in *ProfilePicture → Default → Primary*
 */
export interface ProfilePictureSliceDefaultPrimary {
  /**
   * Profile Picture field in *ProfilePicture → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: profile_picture.default.primary.profile_picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profile_picture: prismic.ImageField<never>
}

/**
 * Default variation for ProfilePicture Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProfilePictureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProfilePictureSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *ProfilePicture*
 */
type ProfilePictureSliceVariation = ProfilePictureSliceDefault

/**
 * ProfilePicture Shared Slice
 *
 * - **API ID**: `profile_picture`
 * - **Description**: ProfilePicture
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProfilePictureSlice = prismic.SharedSlice<
  "profile_picture",
  ProfilePictureSliceVariation
>

/**
 * Primary content in *Quote → Default → Primary*
 */
export interface QuoteSliceDefaultPrimary {
  /**
   * Quote field in *Quote → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.default.primary.quote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  quote: prismic.RichTextField

  /**
   * Source field in *Quote → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.default.primary.source
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  source: prismic.KeyTextField
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>

/**
 * Item in *TagCloud → Default → Primary → Tags*
 */
export interface TagCloudSliceDefaultPrimaryTagsItem {
  /**
   * Tag field in *TagCloud → Default → Primary → Tags*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: tag_cloud.default.primary.tags[].tag
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tag: prismic.SelectField<
    | "Adobe XD"
    | "Figma"
    | "Adobe Target"
    | "SEO"
    | "a11y"
    | "i18n"
    | "Next.js"
    | "Vue.js"
    | "Javascript"
    | "Typescript"
    | "Dart"
    | "Flutter"
    | "WordPress"
    | "Firebase"
    | "Content Management"
    | "Prismic"
    | "Contentful"
    | "React.js"
    | "Optimizely"
    | "Google Analytics"
    | "Responsive Design"
    | "Tailwind"
    | "SASS"
    | "CSS"
    | "HTML"
    | "AWS Amplify"
    | "Google Cloud Platform"
    | "Vercel"
    | "Heroku"
  >
}

/**
 * Primary content in *TagCloud → Default → Primary*
 */
export interface TagCloudSliceDefaultPrimary {
  /**
   * Title field in *TagCloud → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tag_cloud.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Tags field in *TagCloud → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tag_cloud.default.primary.tags[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tags: prismic.GroupField<Simplify<TagCloudSliceDefaultPrimaryTagsItem>>
}

/**
 * Default variation for TagCloud Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TagCloudSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TagCloudSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *TagCloud*
 */
type TagCloudSliceVariation = TagCloudSliceDefault

/**
 * TagCloud Shared Slice
 *
 * - **API ID**: `tag_cloud`
 * - **Description**: TagCloud
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TagCloudSlice = prismic.SharedSlice<
  "tag_cloud",
  TagCloudSliceVariation
>

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>

/**
 * Primary content in *Text → Two Columns → Primary*
 */
export interface TextSliceTwoColumnsPrimary {
  /**
   * Text field in *Text → Two Columns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.twoColumns.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField
}

/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTwoColumns = prismic.SharedSliceVariation<
  "twoColumns",
  Simplify<TextSliceTwoColumnsPrimary>,
  never
>

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>

/**
 * Primary content in *TextWithImage → Default → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
  /**
   * Text field in *TextWithImage → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Image field in *TextWithImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>

/**
 * Primary content in *TextWithImage → With Button → Primary*
 */
export interface TextWithImageSliceWithButtonPrimary {
  /**
   * Text field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Button Link field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField

  /**
   * Button Text field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField

  /**
   * Image field in *TextWithImage → With Button → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.withButton.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceWithButton = prismic.SharedSliceVariation<
  "withButton",
  Simplify<TextWithImageSliceWithButtonPrimary>,
  never
>

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation =
  | TextWithImageSliceDefault
  | TextWithImageSliceWithButton

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      ExperienceDocument,
      ExperienceDocumentData,
      ExperienceDocumentDataSlicesSlice,
      ExperienceEntryDocument,
      ExperienceEntryDocumentData,
      ExperienceEntryDocumentDataTagcloudItem,
      ExperienceEntryDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceBannerPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      ImageSliceBanner,
      ImageCardsSlice,
      ImageCardsSliceDefaultPrimaryCardsItem,
      ImageCardsSliceDefaultPrimary,
      ImageCardsSliceVariation,
      ImageCardsSliceDefault,
      IntroSliceSlice,
      IntroSliceSliceDefaultPrimary,
      IntroSliceSliceVariation,
      IntroSliceSliceDefault,
      ProfilePictureSlice,
      ProfilePictureSliceDefaultPrimary,
      ProfilePictureSliceVariation,
      ProfilePictureSliceDefault,
      QuoteSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceVariation,
      QuoteSliceDefault,
      TagCloudSlice,
      TagCloudSliceDefaultPrimaryTagsItem,
      TagCloudSliceDefaultPrimary,
      TagCloudSliceVariation,
      TagCloudSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceTwoColumnsPrimary,
      TextSliceVariation,
      TextSliceDefault,
      TextSliceTwoColumns,
      TextWithImageSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceWithButtonPrimary,
      TextWithImageSliceVariation,
      TextWithImageSliceDefault,
      TextWithImageSliceWithButton,
    }
  }
}
