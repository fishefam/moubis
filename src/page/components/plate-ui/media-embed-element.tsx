import { PlateElement, type PlateElementProps, type Value, withHOC } from '@udecode/plate'
import {
  ELEMENT_MEDIA_EMBED,
  parseTwitterUrl,
  parseVideoUrl,
  type TMediaEmbedElement,
  useMediaState,
} from '@udecode/plate-media'
import { ResizableProvider, useResizableStore } from '@udecode/plate-resizable'
import { type ElementRef, forwardRef, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import { Caption, CaptionTextarea } from './caption'
import { MediaPopover } from './media-popover'
import { mediaResizeHandleVariants, Resizable, ResizeHandle } from './resizable'

const MediaEmbedElement = withHOC(
  ResizableProvider,
  // eslint-disable-next-line react/display-name
  forwardRef<ElementRef<typeof PlateElement>, PlateElementProps<Value, TMediaEmbedElement>>(
    ({ className, children, ...props }, ref) => {
      const {
        align = 'center',
        focused,
        selected,
        embed,
        isVideo,
      } = useMediaState({
        urlParsers: [parseTwitterUrl, parseVideoUrl],
      })
      const width = useResizableStore().get.width()
      const resizableRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
        if (resizableRef.current && align === 'left') resizableRef.current.style.marginLeft = 'auto'
        if (resizableRef.current && align === 'right') resizableRef.current.style.marginRight = 'auto'
        if (resizableRef.current && align === 'center') {
          resizableRef.current.style.marginLeft = 'auto'
          resizableRef.current.style.marginRight = 'auto'
        }
      }, [align])

      return (
        <MediaPopover pluginKey={ELEMENT_MEDIA_EMBED}>
          <PlateElement ref={ref} className={cn('relative py-2.5', className)} {...props}>
            <figure className='group relative m-0 w-full' contentEditable={false}>
              <Resizable
                ref={resizableRef}
                options={{
                  align,
                  maxWidth: '100%',
                  minWidth: 100,
                }}
              >
                <ResizeHandle
                  options={{ direction: 'left' }}
                  className={mediaResizeHandleVariants({ direction: 'left' })}
                />

                {isVideo ? (
                  <iframe
                    src={embed?.url}
                    width={width}
                    className={cn(
                      'rounded-sm h-96',
                      focused && selected && 'ring-2 ring-slate-950 ring-offset-2 dark:ring-slate-300',
                    )}
                    style={{ width: '100%' }}
                  />
                ) : null}

                <ResizeHandle
                  options={{ direction: 'right' }}
                  className={mediaResizeHandleVariants({ direction: 'right' })}
                />
              </Resizable>

              <Caption
                style={{
                  ...(align === 'left'
                    ? { marginLeft: 'auto' }
                    : align === 'right'
                      ? { marginRight: 'auto' }
                      : { margin: 'auto' }),
                  ...{ display: 'grid', placeContent: 'center', width },
                }}
              >
                <CaptionTextarea placeholder='Write a caption...' />
              </Caption>
            </figure>

            {children}
          </PlateElement>
        </MediaPopover>
      )
    },
  ),
)
MediaEmbedElement.displayName = 'MediaEmbedElement'

export { MediaEmbedElement }
