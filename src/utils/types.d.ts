export type PostProps = {
  children?: unknown
  href?: string
  p?: number
  title?: string
  badge?: string
  tags?: string[]
  imgUrl?: string
}

export type BlogProps = {
  frontmatter: {
    title: string
    description: string
    pubDate: string
    updatedDate?: string
    heroImage?: string
  }
  url: string
}
