import { useRef } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

import type { TContextData } from './contexts/Editor'

import { CodeEditor } from './components/CodeEditor'
import { Icons } from './components/Icons'
import { PlateEditor } from './components/PlateEditor'
import EditorContext from './contexts/Editor'
import { getMobiusData, nanoid, processData } from './lib/util'

export type TDataKeys = 'algorithm' | 'authorNotesEditor' | 'commentEditor' | 'customCss' | 'editor'
export type TData = { [key in TDataKeys]: TContextData }
const MOBIUS_DATA_KEYS: TDataKeys[] = ['algorithm', 'authorNotesEditor', 'commentEditor', 'customCss', 'editor']
const MOBIUS_DATA = getData(MOBIUS_DATA_KEYS)

export default function App() {
  const { current: data } = useRef<TData>(makeContextData(MOBIUS_DATA))
  const codePanelId1 = nanoid()
  const codePanelId2 = nanoid()
  const codePanelId3 = nanoid()
  const codePanelId4 = nanoid()

  return (
    <EditorContext data={data.editor}>
      <div className='p-5 md:p-10 md:flex bg-[#f6f8fa]'>
        <PanelGroup direction='horizontal'>
          <Panel defaultSize={35}>
            <PanelGroup direction='vertical'>
              <Panel
                className={`editor-panel editor-panel--${codePanelId1} m-1 hover:ring-1 rounded-lg`}
                minSize={10}
                onFocus={() => editorPanelFocusHandler(codePanelId1)}
              >
                <div className='rounded-lg shadow-lg h-full w-full'>
                  <CodeEditor lang='html' />
                </div>
              </Panel>
              <PanelResizeHandle className='w-full h-2 hover:bg-gray-400 hover:text-white rounded-sm focus:outline-none transition-colors flex justify-center items-center'>
                <Icons.dragHandleHorizontal className='h-2 w-2' />
              </PanelResizeHandle>
              <Panel
                className={`editor-panel editor-panel--${codePanelId2} m-1 hover:ring-1 rounded-lg`}
                minSize={10}
                onFocus={() => editorPanelFocusHandler(codePanelId2)}
              >
                <div className='rounded-lg shadow-lg h-full w-full'>
                  <CodeEditor lang='css' />
                </div>
              </Panel>
              <PanelResizeHandle className='w-full h-2 hover:bg-gray-400 hover:text-white rounded-sm focus:outline-none transition-colors flex justify-center items-center'>
                <Icons.dragHandleHorizontal className='h-2 w-2' />
              </PanelResizeHandle>
              <Panel
                className={`editor-panel editor-panel--${codePanelId3} m-1 hover:ring-1 rounded-lg`}
                minSize={10}
                onFocus={() => editorPanelFocusHandler(codePanelId3)}
              >
                <div className='rounded-lg shadow-lg h-full w-full'>
                  <CodeEditor lang='js' />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className='w-2 hover:bg-gray-400 hover:text-white focus:bg-gray-400 rounded-sm focus:outline-none transition-colors flex justify-center items-center'>
            <Icons.dragHandle className='h-2 w-2' />
          </PanelResizeHandle>
          <Panel
            className={`editor-panel editor-panel--${codePanelId4} m-1 hover:ring-1 rounded-lg`}
            defaultSize={65}
            onFocus={() => editorPanelFocusHandler(codePanelId4)}
          >
            <div className='rounded-lg shadow-lg h-full w-full'>
              <PlateEditor />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </EditorContext>
  )
}

function getData(keys: TDataKeys[]) {
  return Object.fromEntries(keys.map((key) => [key, getMobiusData(key)])) as { [key in TDataKeys]: string }
}

function makeContextData(data: { [key in TDataKeys]: string }) {
  const keys = Object.keys(data) as TDataKeys[]
  const values = Object.values(data).map<TContextData>((v) => processData(v))
  return Object.fromEntries(keys.map((k, i) => [k, values[i]])) as TData
}

function editorPanelFocusHandler(id: string, prefixClassname = 'editor-panel') {
  const otherPanels = Array.from(document.querySelectorAll(`.${prefixClassname}`)).filter(
    ({ classList }) => !classList.contains(id),
  )
  const thisPanel = document.querySelector(`.${prefixClassname}--${id}`)
  otherPanels.forEach((el) => ((el as HTMLElement).style.boxShadow = ''))
  ;(thisPanel as HTMLElement).style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'
}
