import type { TData } from '@/types/data'

import { EditorContextProvider } from '@/contexts/Editor'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

import { Icons } from './Icons'

type TProps = { editorData: TData }

export function MainArea({ editorData }: TProps) {
  return (
    <div className='h-full'>
      <EditorContextProvider data={editorData}>
        <PanelGroup direction='horizontal'>
          <Panel defaultSize={30}>
            <PanelGroup direction='vertical'>
              <Panel
                className='rounded bg-white grid grid-rows-[1fr_5fr]'
                defaultSize={33}
              >
                <div>bar</div>
                <div>content</div>
              </Panel>
              <PanelResizeHandle className='h-2 bg-slate-200 hover:bg-slate-400 transition rounded flex justify-center items-center hover:text-white'>
                <Icons.dragHandleHorizontal className='w-2 h-2' />
              </PanelResizeHandle>
              <Panel
                className='rounded bg-white'
                defaultSize={33}
              >
                l-mid
              </Panel>
              <PanelResizeHandle className='h-2 bg-slate-200 hover:bg-slate-400 transition rounded flex justify-center items-center hover:text-white'>
                <Icons.dragHandleHorizontal className='w-2 h-2' />
              </PanelResizeHandle>
              <Panel
                className='rounded bg-white'
                defaultSize={33}
              >
                l-bottom
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className='w-2 bg-slate-200 hover:bg-slate-400 transition rounded flex justify-center items-center hover:text-white'>
            <Icons.dragHandle className='w-2 h-2' />
          </PanelResizeHandle>
          <Panel className='rounded bg-white'>Right</Panel>
        </PanelGroup>
      </EditorContextProvider>
    </div>
  )
}
