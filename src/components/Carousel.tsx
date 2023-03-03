import { createEffect, createSignal } from 'solid-js'
import type { PostProps } from '../utils/types'

export type CarouselProps = {
  /** Content of the carousel */
  posts: PostProps[]
  /** Height of the carousel, default height is 20rem */
  height?: string
  /** Duration in seconds of the loop, default duration is 7 seconds */
  duration?: number
  /** Auto play of the slider, the carousel with autoplay by default */
  autoPlay?: boolean //TODO: add autoPlay
  /** Select how many slides will display, default number is 5 */
  slideNumber?: number
  /** Select if bullets will display, default number is true */
  bullets?: boolean
}

// TODO: onMouseEnter and onMouseLeave should stop the carousel
// TODO: create arrows

const sArrows =
  'w-10 h-10 rounded-full absolute bg-white/40 hover:bg-white/60 grid place-items-center top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'

const Carousel = ({
  posts,
  height = '20rem',
  duration = 7,
  autoPlay = true,
  slideNumber = 4
}: // bullets = true,
CarouselProps) => {
  const [currentIndex, setCurrentIndex] = createSignal(0)

  const infiniteScroll = () => {
    if (currentIndex() === slideNumber - 1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex() + 1)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slideNumber) % slideNumber)
  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideNumber)
  }

  createEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      infiniteScroll()
    }, duration * 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div class="group relative flex flex-nowrap overflow-hidden">
      <span onClick={handlePrevious} class={`${sArrows} left-5`}>
        ◀
      </span>
      <span onClick={handleNext} class={`${sArrows} right-5`}>
        ▶
      </span>
      {/* <span class="w-3 h-3 absolute rounded-full bg-black/90 grid place-items-center right-1/2 top-3 transform -translate--1/2 z-10 cursor-pointer"></span> */}
      {posts.map((post) => {
        return (
          <div
            style={{
              transform: `translate(-${currentIndex() * 100}%)`,
              height: `${height}`
            }}
            class="relative min-w-full items-center justify-center transition duration-300">
            <div
              class={`"dark:bg group-hover:bg-yellow-300" absolute bottom-0 left-0 rounded-tr-lg bg-gray-100 py-2 px-4 text-lg font-semibold uppercase text-zinc-900`}>
              {post.title}
            </div>
            <img
              src={post.imgUrl}
              alt={post.title}
              style={{ height: `${height}` }}
              class="w-full object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}

export default Carousel
