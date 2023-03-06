import { createEffect, createSignal } from 'solid-js'

const Loader = () => {
  const [loading, setLoading] = createSignal(true)

  createEffect(() => setTimeout(() => setLoading(false), 2000))

  return (
    <>
      {loading() && (
        <div class="fixed top-0 left-0 z-50 grid h-screen w-full place-items-center bg-white text-6xl font-bold text-back-dark dark:bg-back-dark dark:text-white">
          月の雫
        </div>
      )}
    </>
  )
}

export default Loader
