// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { ContactProps, InstructionType, LinkType } from './utils/types'

export const SITE_TITLE = '劇団月のしずく'
export const SITE_DESCRIPTION = '舞台・殺陣・ダンスのおしゃれな小劇場'

export const date_options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  weekday: 'narrow'
}

// STYLES
export const modalBg = 'fixed w-full h-screen bg-black/50 grid place-items-center z-30 top-0 left-0'

// export const links: LinkType[] = ['home', 'news', 'info', 'members', 'schedule']
export const links: LinkType[] = [
  // { url: '/', label: 'Home' },
  { url: '/news', label: 'News' },
  { url: '/info', label: 'Info' },
  { url: '/members', label: 'Members' },
  { url: '/schedule', label: 'Schedule' },
  { url: '/access', label: 'Access' },
  { url: '/contact', label: 'Contact' }
]

export const instructions: InstructionType[] = [
  { title: '空きスケジュールのお問い合わせ' },
  { title: '劇場下見', subtitle: '事前予約が必要です' },
  { title: '仮おさえ', subtitle: '最長1週間' },
  { title: '劇場にて本契約', subtitle: 'この時点でご予約確定となります' },
  { title: 'ご利用料金（前金）のお支払い' },
  { title: 'ご利用開始' },
  { title: '退去時ご利用料金（残金他）のご精算' }
]

export const contactKeys: { [key: string]: string } = {
  theater: '劇団名',
  responsible: '担当者名',
  program: '演目',
  phone: '電話番号',
  email: 'メール',
  content: '問い合わせ'
}

export const contactForm: ContactProps[] = [
  { name: 'theater', type: 'text' },
  { name: 'responsible', type: 'text' },
  { name: 'program', type: 'text', placeholder: '演劇・ダンスなど' },
  { name: 'phone', type: 'tel', placeholder: '日中に連絡の取れる番号' },
  { name: 'email', type: 'email' },
  { name: 'content', type: 'text' }
]
