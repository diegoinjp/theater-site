import { useStore } from '@nanostores/solid'
import { isModalOpen, modalContent } from '../stores/modalStore'
import { modalBg } from '../config'
import { createEffect } from 'solid-js'

export interface ModalProps {
  id: number
  title: string
}

const Modal = (props) => {
  const $isModalOpen = useStore(isModalOpen)
  const $modalContent = useStore(modalContent)

  createEffect(() => {
    console.log('$modalContent', $modalContent(), props)
  })

  return (
    <>
      {$isModalOpen() && (
        <div class={modalBg} onClick={() => isModalOpen.set(false)}>
          <div
            class="relative h-5/6 w-5/6 gap-3 bg-white p-2 text-left md:p-4 lg:w-[50rem]"
            onClick={(e) => e.stopPropagation()}>
            <div class="flex h-full bg-violet-300 dark:bg-violet-800">
              <img
                src={$modalContent().frontmatter.imgUrl}
                alt={$modalContent().frontmatter.nameReading}
                class="h-2/5 w-full object-cover lg:h-full lg:w-96"
              />
              <div class="flex h-full w-full flex-col p-3">
                <div class="flex items-end">
                  <h1 class="text-3xl font-semibold uppercase">{$modalContent().frontmatter.name}</h1>
                  <p>{$modalContent().frontmatter.nameReading}</p>
                </div>
                <div>
                  <p>役職：{$modalContent().frontmatter.role}</p>
                  <p>出身地：{$modalContent().frontmatter.birthplace}</p>
                  <p>新調：{$modalContent().frontmatter.height}</p>
                  <p>血液型：{$modalContent().frontmatter.bloodType}</p>
                  <p>趣味：{$modalContent().frontmatter.hobby}</p>
                  <p>{props.children}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
