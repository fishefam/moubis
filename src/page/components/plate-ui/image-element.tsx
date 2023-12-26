import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TImageElement } from '@udecode/plate-media'

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
      <PlateElement className={className} style={{ padding: '0.625rem 0' }} {...props}>
        <figure className='group' contentEditable={false} style={{ margin: '0', position: 'relative' }}>
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
              className={focused && selected ? 'ring-2 ring-ring ring-offset-2' : ''}
              style={{
                borderRadius: 'calc(0.5rem - 4px)',
                cursor: 'pointer',
                display: 'block',
                maxWidth: '100%',
                objectFit: 'cover',
                padding: 0,
                width: '100%',
              }}
              {...nodeProps}
            />
            <ResizeHandle
              className={mediaResizeHandleVariants({ direction: 'right' })}
              options={{ direction: 'right' }}
            />
          </Resizable>

          <Caption
            style={{
              textAlign: 'center',
              width,
              ...(align === 'center'
                ? { marginLeft: 'auto', marginRight: 'auto' }
                : align === 'left'
                  ? { marginLeft: 'auto' }
                  : { marginRight: 'auto' }),
            }}
          >
            <CaptionTextarea placeholder='Write a caption...' readOnly={readOnly} />
          </Caption>
        </figure>

        {children}
      </PlateElement>
    </MediaPopover>
  )
}
