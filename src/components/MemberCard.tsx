import { createEffect } from 'solid-js'
import { isModalOpen, modalContent } from '../stores/modalStore'
import type { MemberType } from '../utils/types'

const MemberCard = ({ members }: { members: MemberType[] }) => {
  function handleMenu(e: MouseEvent, index: number) {
    e.preventDefault()
    modalContent.set(members[index])
    isModalOpen.set(true)
  }

  createEffect(() => {
    console.log(members)
  })

  return (
    <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member, i) => {
        return (
          <div
            onClick={(e) => handleMenu(e, i)}
            class="group relative cursor-pointer overflow-hidden opacity-90 transition-all hover:opacity-100">
            <img
              src={member.frontmatter.imgUrl}
              alt={member.frontmatter.nameRomaji}
              class="scale-110 transform transition-all group-hover:scale-100"
            />
            <div class="absolute bottom-0 left-0 transform rounded-tr-lg bg-black/40 p-3 text-center text-sm text-white transition-all group-hover:w-full group-hover:text-xl">
              {member.frontmatter.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MemberCard
