// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | BigTextSliceSlice
  | AlternatingSliceSlice
  | CarouselSliceSlice
  | CanDiverSlice
  | HeroSlice;

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
  title: prismic.TitleField;

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
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
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
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Item in *AlternatingSlice → Default → Primary → Text Group*
 */
export interface AlternatingSliceSliceDefaultPrimaryTextGroupItem {
  /**
   * Heading field in *AlternatingSlice → Default → Primary → Text Group*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: alternating_slice.default.primary.text_group[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *AlternatingSlice → Default → Primary → Text Group*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternating_slice.default.primary.text_group[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Primary content in *AlternatingSlice → Default → Primary*
 */
export interface AlternatingSliceSliceDefaultPrimary {
  /**
   * Text Group field in *AlternatingSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: alternating_slice.default.primary.text_group[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  text_group: prismic.GroupField<
    Simplify<AlternatingSliceSliceDefaultPrimaryTextGroupItem>
  >;
}

/**
 * Default variation for AlternatingSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternatingSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AlternatingSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AlternatingSlice*
 */
type AlternatingSliceSliceVariation = AlternatingSliceSliceDefault;

/**
 * AlternatingSlice Shared Slice
 *
 * - **API ID**: `alternating_slice`
 * - **Description**: AlternatingSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternatingSliceSlice = prismic.SharedSlice<
  "alternating_slice",
  AlternatingSliceSliceVariation
>;

/**
 * Default variation for BigTextSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigTextSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *BigTextSlice*
 */
type BigTextSliceSliceVariation = BigTextSliceSliceDefault;

/**
 * BigTextSlice Shared Slice
 *
 * - **API ID**: `big_text_slice`
 * - **Description**: BigTextSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigTextSliceSlice = prismic.SharedSlice<
  "big_text_slice",
  BigTextSliceSliceVariation
>;

/**
 * Primary content in *CanDiver → Default → Primary*
 */
export interface CanDiverSliceDefaultPrimary {
  /**
   * Sentence field in *CanDiver → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: can_diver.default.primary.sentenve
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sentenve: prismic.KeyTextField;

  /**
   * Flavour field in *CanDiver → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: lemon
   * - **API ID Path**: can_diver.default.primary.flavour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  flavour: prismic.SelectField<
    "lemon" | "grape" | "cherry" | "strawberry" | "watermelon",
    "filled"
  >;
}

/**
 * Default variation for CanDiver Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CanDiverSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CanDiverSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CanDiver*
 */
type CanDiverSliceVariation = CanDiverSliceDefault;

/**
 * CanDiver Shared Slice
 *
 * - **API ID**: `can_diver`
 * - **Description**: CanDiver
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CanDiverSlice = prismic.SharedSlice<
  "can_diver",
  CanDiverSliceVariation
>;

/**
 * Primary content in *CarouselSlice → Default → Primary*
 */
export interface CarouselSliceSliceDefaultPrimary {
  /**
   * Heading field in *CarouselSlice → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * PriceCopy field in *CarouselSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel_slice.default.primary.pricecopy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  pricecopy: prismic.RichTextField;
}

/**
 * Default variation for CarouselSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarouselSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CarouselSlice*
 */
type CarouselSliceSliceVariation = CarouselSliceSliceDefault;

/**
 * CarouselSlice Shared Slice
 *
 * - **API ID**: `carousel_slice`
 * - **Description**: CarouselSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceSlice = prismic.SharedSlice<
  "carousel_slice",
  CarouselSliceSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Heading
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * SubHeading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.RichTextField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * ButtonText field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * ButtonLink field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;

  /**
   * CansImage field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cansimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cansimage: prismic.ImageField<never>;

  /**
   * SecondHeader field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.secondheader
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  secondheader: prismic.TitleField;

  /**
   * SecondBody field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.secondbody
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  secondbody: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AlternatingSliceSlice,
      AlternatingSliceSliceDefaultPrimaryTextGroupItem,
      AlternatingSliceSliceDefaultPrimary,
      AlternatingSliceSliceVariation,
      AlternatingSliceSliceDefault,
      BigTextSliceSlice,
      BigTextSliceSliceVariation,
      BigTextSliceSliceDefault,
      CanDiverSlice,
      CanDiverSliceDefaultPrimary,
      CanDiverSliceVariation,
      CanDiverSliceDefault,
      CarouselSliceSlice,
      CarouselSliceSliceDefaultPrimary,
      CarouselSliceSliceVariation,
      CarouselSliceSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}