import type { TDataKeys } from '@/App'
import type { TSetState } from '@/types/app'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/util'
import * as Navbar from '@radix-ui/react-navigation-menu'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useState } from 'react'

import { Icons } from './Icons'

type TProps = { currentKey: string; setCurrentKey: TSetState<TDataKeys> }
type TButtonProps = { Icon: LucideIcon; key: TDataKeys; tooltip: string }
type TListItemProps = {
  dataKey: TDataKeys
  Icon: LucideIcon
  isSelected: boolean
  setCurrentKey: TSetState<TDataKeys>
  setTooltip: TSetState<string>
  tooltip: string
}

const buttons: TButtonProps[] = [
  { Icon: Icons.question, key: 'editor', tooltip: 'Question' },
  { Icon: Icons.info, key: 'authorNotesEditor', tooltip: 'Author Notes' },
  { Icon: Icons.code, key: 'algorithm', tooltip: 'Algorithm' },
  { Icon: Icons.book, key: 'commentEditor', tooltip: 'Feedback' },
]

export function Sidebar({ currentKey, setCurrentKey }: TProps) {
  const [tooltip, setTooltip] = useState(buttons[0].tooltip)
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
              isSelected={currentKey === key}
              key={key}
              setCurrentKey={setCurrentKey}
              setTooltip={setTooltip}
              tooltip={tooltip}
            />
          ))}
        </Tooltip.Provider>
      </Navbar.List>
    </Navbar.Root>
  )
}

function ListItem({ dataKey, Icon, isSelected, setCurrentKey, setTooltip, tooltip }: TListItemProps) {
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
              if (!isSelected) setCurrentKey(dataKey)
            }}
            onMouseOver={() => setTooltip(tooltip)}
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
