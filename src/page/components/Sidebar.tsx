import type { TSetState } from '@/types/app'
import type { TCodeData, TTextData } from '@/types/data'
import type { LucideIcon } from 'lucide-react'

import { useRootContext } from '@/contexts/Root'
import { cn } from '@/lib/util'
import * as Navbar from '@radix-ui/react-navigation-menu'
import * as Tooltip from '@radix-ui/react-tooltip'

import { Icons } from './Icons'

type TButtonProps = { Icon: LucideIcon; key: keyof TCodeData | keyof TTextData; tooltip: string }
type TListItemProps = {
  dataKey: keyof TCodeData | keyof TTextData
  Icon: LucideIcon
  isSelected: boolean
  setEditorType: TSetState<keyof TCodeData | keyof TTextData>
  tooltip: string
}

const buttons: TButtonProps[] = [
  { Icon: Icons.question, key: 'question', tooltip: 'Question' },
  { Icon: Icons.info, key: 'authorNotes', tooltip: 'Author Notes' },
  { Icon: Icons.code, key: 'algorithm', tooltip: 'Algorithm' },
  { Icon: Icons.book, key: 'feedback', tooltip: 'Feedback' },
]

export function Sidebar() {
  const { editorType, setEditorType } = useRootContext()

  return (
    <Navbar.Root
      delayDuration={0}
      orientation='vertical'
    >
      <Navbar.List className=''>
        <Tooltip.Provider>
          {buttons.map(({ Icon, key, tooltip }) => (
            <ListItem
              dataKey={key}
              Icon={Icon}
              isSelected={editorType === key}
              key={key}
              setEditorType={setEditorType}
              tooltip={tooltip}
            />
          ))}
        </Tooltip.Provider>
      </Navbar.List>
    </Navbar.Root>
  )
}

function ListItem({ dataKey, Icon, isSelected, setEditorType, tooltip }: TListItemProps) {
  return (
    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger asChild>
        <Navbar.Item>
          <Navbar.Link
            asChild
            className={cn(
              isSelected && 'bg-slate-100',
              'hover:bg-slate-100 p-2 rounded transition-colors duration-75 mx-auto block mb-2',
            )}
            onClick={() => {
              if (!isSelected) setEditorType(dataKey)
            }}
          >
            <button>
              <Icon
                className='w-5 h-5'
                color='black'
              />
            </button>
          </Navbar.Link>
        </Navbar.Item>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className='bg-slate-800 py-1 px-2 text-white text-sm rounded'
          side='right'
          sideOffset={5}
        >
          {tooltip}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
