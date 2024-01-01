import { useRootContext } from '@/contexts/Root'

export function Navbar() {
  const { setTitle, title } = useRootContext()

  return (
    <div className='h-full w-full flex items-center justify-between gap-10'>
      <div className='text-lg font-semibold flex-grow'>
        <input
          className='whitespace-nowrap text-sm p-2 w-full text-gray-900 rounded border-none hover:border border-gray-300 hover:bg-gray-50 focus:bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
          maxLength={100}
          onChange={(e) => {
            setTitle(e.currentTarget.value)
          }}
          type='text'
          value={title}
        />
      </div>
      <div className='flex-grow-[3]'></div>
    </div>
  )
}
