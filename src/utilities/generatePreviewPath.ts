import { CollectionSlug, TypedLocale } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  locale?: string
}

export const generatePreviewPath = ({ collection, slug, locale = 'de' }: Props) => {
  const path = `/${locale}/${collectionPrefixMap[collection]}/${slug}`

  const params = {
    slug,
    collection,
    path,
    locale,
  }

  const encodedParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  return `/${locale}/next/preview?${encodedParams.toString()}`
}
