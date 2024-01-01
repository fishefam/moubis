import type { TCodeData, TFinalTextDataProps, TTextData } from '@/types/data'
import type { ImperativePanelHandle } from 'react-resizable-panels'

import { EditorContextProvider } from '@/contexts/Editor'
import { useRootContext } from '@/contexts/Root'
import { cn } from '@/lib/util'
import { Fragment, type RefObject } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

import { CodeEditor } from './CodeEditor'
import { Icons } from './Icons'
import { PlateEditor } from './PlateEditor'

type TProps = { codeData: TCodeData; textData: TTextData }

const codeDataKeys: (keyof TCodeData)[] = ['algorithm']
const textDataKeys: (keyof TTextData)[] = ['authorNotes', 'feedback', 'question']

const langs: (keyof TFinalTextDataProps['code'])[] = ['html', 'css', 'javascript']

export function MainArea({ codeData, textData }: TProps) {
  const { editorType } = useRootContext()

  console.log('Main Area Render')
  return (
    <div className='h-full shadow'>
      <EditorContextProvider
        codeData={codeData}
        textData={textData}
      >
        <div className={cn('h-full', !codeDataKeys.includes(editorType as keyof TCodeData) && '!hidden')}>
          <CodeEditor
            isCodeData
            lang='html'
          />
        </div>
        <PanelGroup
          className={cn(!textDataKeys.includes(editorType as keyof TTextData) && '!hidden')}
          direction='horizontal'
        >
          <Panel defaultSize={30}>
            <PanelGroup direction='vertical'>
              {langs.map((lang, i) => {
                return (
                  <Fragment key={lang}>
                    <Panel
                      className='rounded bg-white grid grid-rows-[1.8rem_auto] overflow-hidden'
                      defaultSize={33}
                      minSize={4.7}
                    >
                      <div className='border-b mb-0 sticky'>
                        <div className='w-fit h-full'>
                          <h4 className='text-black px-2 w-12'>
                            {lang === 'html' ? (
                              <Icons.html className='w-7 h-7' />
                            ) : lang === 'css' ? (
                              <Icons.css className='w-7 h-7' />
                            ) : (
                              <Icons.javascript className='w-7 h-7' />
                            )}
                          </h4>
                        </div>
                      </div>
                      <div className='overflow-scroll h-full'>
                        <CodeEditor lang={lang} />
                      </div>
                    </Panel>
                    {i < langs.length - 1 && (
                      <PanelResizeHandle className='h-2 bg-slate-200 hover:bg-slate-400 transition rounded flex justify-center items-center hover:text-white'>
                        <Icons.dragHandleHorizontal className='w-2 h-2' />
                      </PanelResizeHandle>
                    )}
                  </Fragment>
                )
              })}
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className='w-2 bg-slate-200 hover:bg-slate-400 transition rounded flex justify-center items-center hover:text-white'>
            <Icons.dragHandle className='w-2 h-2' />
          </PanelResizeHandle>
          <Panel className='rounded bg-white overflow-scroll'>
            <PlateEditor />
          </Panel>
        </PanelGroup>
      </EditorContextProvider>
    </div>
  )
}

function handleFocus(currentPanel: RefObject<ImperativePanelHandle>, otherPanels: RefObject<ImperativePanelHandle>[]) {
  console.log(currentPanel.current)
}
