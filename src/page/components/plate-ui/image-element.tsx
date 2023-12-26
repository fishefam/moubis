import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TImageElement } from '@udecode/plate-media'

import { cn } from '@/lib/utils'
import { PlateElement } from '@udecode/plate-common'
import { ELEMENT_IMAGE, Image, useMediaState } from '@udecode/plate-media'
import { useResizableStore } from '@udecode/plate-resizable'

import { Caption, CaptionTextarea } from './caption'
import { MediaPopover } from './media-popover'
import { mediaResizeHandleVariants, Resizable, ResizeHandle } from './resizable'

export function ImageElement({ children, className, nodeProps, ...props }: PlateElementProps<Value, TImageElement>) {
  const { align = 'center', focused, readOnly, selected } = useMediaState()
  const width = useResizableStore().get.width()

  return (
    <MediaPopover pluginKey={ELEMENT_IMAGE}>
      <PlateElement className={cn('py-2.5', className)} {...props}>
        <figure className='group relative m-0' contentEditable={false}>
          <Resizable
            align={align}
            options={{
              align,
              readOnly,
            }}
          >
            <ResizeHandle
              className={mediaResizeHandleVariants({ direction: 'left' })}
              options={{ direction: 'left' }}
            />
            <Image
              alt=''
              className={cn(
                'block w-full max-w-full cursor-pointer object-cover px-0',
                'rounded-sm',
                focused && selected && 'ring-2 ring-ring ring-offset-2',
              )}
              {...nodeProps}
            />
            <ResizeHandle
              className={mediaResizeHandleVariants({ direction: 'right' })}
              options={{ direction: 'right' }}
            />
          </Resizable>

          <Caption align={align} style={{ width }}>
            <CaptionTextarea placeholder='Write a caption...' readOnly={readOnly} />
          </Caption>
        </figure>

        {children}
      </PlateElement>
    </MediaPopover>
  )
}
