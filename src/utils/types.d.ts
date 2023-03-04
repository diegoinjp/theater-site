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

export type MemberType = {
  frontmatter: {
    name: string
    nameReading: string
    nameRomaji: string
    order: number
    role: string
    height: string
    birthplace: string
    bloodType: string
    hobby: string
    skill: string
    twitter: string
    instagram: string
    otherSns: string
    imgUrl: string
    description: string
  }
  description: string
  url: string
}

export interface LinkType {
  url: string
  label: string
}
export interface InstructionType {
  title: string
  subtitle?: string
}

export interface ContactType {
  theater: string
  responsible: string
  program: string
  phone: string
  email: string
  content: string
}

export type ContactProps = {
  name: string
  placeholder?: string
  type: 'email' | 'text' | 'tel'
}
