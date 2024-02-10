import type { UseSeoMetaInput } from '@unhead/schema'

interface IMetaConfig
  extends Partial<
    Pick<
      UseSeoMetaInput,
      | 'ogSiteName'
      | 'ogType'
      | 'author'
      | 'ogLocale'
      | 'publisher'
      | 'ogImageType'
      | 'ogImageWidth'
      | 'ogImageHeight'
      | 'ogImageAlt'
      | 'themeColor'
    >
  > {
  title?: string
  description?: string
  creator?: string
  image?: string
}

export const useMeta = (meta: IMetaConfig) => {
  useSeoMeta({
    title: meta?.title,
    ogTitle: meta?.title,
    twitterTitle: meta?.title,
    description: meta?.description,
    ogDescription: meta?.description,
    twitterDescription: meta?.description,
    creator: meta?.creator,
    twitterCreator: meta?.creator,
    ogImage: meta?.image,
    ogImageUrl: meta?.image,
    twitterImage: meta?.image,
  })
}
