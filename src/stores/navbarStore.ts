import { atom, WritableStore } from 'nanostores'

export const isMenuOpen: WritableStore<boolean> = atom(false)
