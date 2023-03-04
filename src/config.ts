// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { LinkType } from './utils/types'

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
  { url: '/', label: 'home' },
  { url: '/news', label: 'news' },
  { url: '/info', label: 'info' },
  { url: '/members', label: 'members' },
  { url: '/schedule', label: 'schedule' }
]
