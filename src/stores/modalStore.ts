import { atom, WritableStore } from 'nanostores'
import type { MemberType } from '../utils/types'

export const isModalOpen = atom(false)
export const modalContent: WritableStore<MemberType> = atom(null)
