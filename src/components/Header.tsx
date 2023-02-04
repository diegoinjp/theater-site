import { SITE_TITLE } from '../config'
import { isMenuOpen } from '../stores/navbarStore'
import { useStore } from '@nanostores/solid'
import { children, createEffect, createSignal, JSX } from 'solid-js'

export interface MenuProps {
  children:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | JSX.FunctionElement
    | (string & {})
    | null
    | undefined
  themeIcon?: JSX.Element
}

const Header = ({ themeIcon, ...props }: MenuProps) => {
  const [windowSize, setWindowSize] = createSignal(window.innerWidth)

  const $isMenuOpen = useStore(isMenuOpen)
  const c = children(() => props.children)

  createEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  return (
    <header class="flex w-full items-center justify-between p-5">
      <h2>{SITE_TITLE}</h2>
      <nav class="flex items-center gap-6">
        <button class="md:hidden" onClick={() => isMenuOpen.set(true)}>
          <svg
            class="fill-zinc-900 dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="transform: ;msFilter:;">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </button>
        {windowSize() > 768 ? (
          <div id="desktop-menu" class="hidden gap-6 md:flex">
            {c()}

            {themeIcon}
          </div>
        ) : (
          <div
            id="mobile-menu"
            class={`fixed top-0 right-0 ${
              $isMenuOpen() ? 'w-full' : 'w-0'
            } z-30 grid h-full place-items-center bg-white/80 backdrop-blur transition-all duration-300 dark:bg-black/80 md:hidden`}>
            <button
              class={`${
                $isMenuOpen() ? 'absolute' : 'hidden'
              } top-4 right-4 z-30`}
              onClick={() => isMenuOpen.set(false)}>
              <svg
                class="h-10 w-10 fill-red-400 dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="transform: ;msFilter:;">
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            </button>
            <div class="flex flex-col gap-16 text-center text-4xl">{c()}</div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
