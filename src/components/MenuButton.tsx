import { useStore } from '@nanostores/solid'
import type { JSX } from 'solid-js'
import { children } from 'solid-js'
import { isMenuOpen } from '../stores/navbarStore'

export interface MenuProps {
  children?:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | JSX.FunctionElement
    | (string & {})
    | null
    | undefined
}

const MenuButton = (props: MenuProps) => {
  // const $isMenuOpen = useStore(isMenuOpen)
  // const c = children(() => props.children)

  return (
    <button class="lg:hidden" onClick={() => isMenuOpen.set(true)}>
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
  )
}

export default MenuButton
