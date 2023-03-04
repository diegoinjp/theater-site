import { children, createEffect, createSignal, JSX } from 'solid-js'
import ThemeIcon from './ThemeIcon'

export interface MenuProps {
  /** Sets the title appearning in the navbar */
  title?: string
  /** Marks in pixels the width of the screen where desktop and mobile menu change */
  breakpoint?: number
  /** Pass links of the navbar as children */
  children: number | boolean | Node | JSX.ArrayElement | JSX.FunctionElement | (string & {}) | null | undefined
}

/** Responsive Navbar: Pass links as children to the component, and title props */
const Header = ({ title, breakpoint = 768, ...props }: MenuProps) => {
  const [windowSize, setWindowSize] = createSignal(window.innerWidth)
  const [isOpen, setIsOpen] = createSignal(false)

  const widthOpen = () => (isOpen() ? 'w-full' : 'w-0')
  const menuOpen = () => (isOpen() ? 'absolute' : 'hidden')

  const slot = children(() => props.children)

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
    <header class="m-auto flex h-16 w-full max-w-layout items-center justify-between px-7">
      <a href="/" class="text-lg font-semibold">
        {title}
      </a>
      <nav class="flex items-center gap-6">
        {windowSize() > breakpoint ? (
          <div id="desktop-menu" class="hidden h-16 items-center md:flex lg:text-lg">
            {slot()}
            <ThemeIcon />
          </div>
        ) : (
          <>
            <div
              id="mobile-menu"
              class={`fixed top-0 right-0 ${widthOpen()} z-30 grid h-full place-items-center overflow-hidden bg-white/90 backdrop-blur-lg transition-all duration-300 dark:bg-black/90 md:hidden`}>
              <button aria-label="close" class={`${menuOpen()} top-4 right-4 z-30`} onClick={() => setIsOpen(false)}>
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
              <div class="flex flex-col items-center gap-12 text-3xl">{slot()}</div>
            </div>
            <ThemeIcon />
            <button aria-label="open" class="md:hidden" onClick={() => setIsOpen(true)}>
              <svg
                class="fill-back-dark dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="transform: ;msFilter:;">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </button>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
