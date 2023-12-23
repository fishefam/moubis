import { PlateElement, type PlateElementProps, type Value, withHOC } from '@udecode/plate'
import { ELEMENT_IMAGE, Image, type TImageElement, useMediaState } from '@udecode/plate-media'
import { ResizableProvider, useResizableStore } from '@udecode/plate-resizable'
import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import { Caption, CaptionTextarea } from './caption'
import { MediaPopover } from './media-popover'
import { mediaResizeHandleVariants, Resizable, ResizeHandle } from './resizable'

const ImageElement = withHOC(
  ResizableProvider,
  ({ className, children, nodeProps, ...props }: PlateElementProps<Value, TImageElement>) => {
    const { readOnly, focused, selected, align = 'center' } = useMediaState()
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
      <MediaPopover pluginKey={ELEMENT_IMAGE}>
        <PlateElement className={cn('py-2.5', className)} {...props}>
          <figure className='group relative m-0' contentEditable={false}>
            <Resizable
              ref={resizableRef}
              options={{
                align,
                readOnly,
              }}
            >
              <ResizeHandle
                options={{ direction: 'left' }}
                className={mediaResizeHandleVariants({ direction: 'left' })}
              />
              <Image
                className={cn(
                  'block w-full max-w-full cursor-pointer object-cover px-0',
                  'rounded-sm',
                  focused && selected && 'ring-2 ring-slate-950 ring-offset-2 dark:ring-slate-300',
                )}
                width={width}
                alt={(props.element.alt as string) ?? ''}
                src={props.element.url}
                {...nodeProps}
              />
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
              <CaptionTextarea placeholder='Write a caption...' readOnly={readOnly} />
            </Caption>
          </figure>

          {children}
        </PlateElement>
      </MediaPopover>
    )
  },
)
ImageElement.displayName = 'ImageElement'

export { ImageElement }
