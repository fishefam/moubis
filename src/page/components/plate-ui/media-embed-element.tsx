import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TMediaEmbedElement } from '@udecode/plate-media'

import { cn } from '@/lib/utils'
import { PlateElement } from '@udecode/plate-common'
import { ELEMENT_MEDIA_EMBED, parseTwitterUrl, parseVideoUrl, useMediaState } from '@udecode/plate-media'
import React from 'react'

import { MediaPopover } from './media-popover'
import { mediaResizeHandleVariants, Resizable, ResizeHandle } from './resizable'

const MediaEmbedElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps<Value, TMediaEmbedElement>
>(({ children, className, ...props }, ref) => {
  const {
    align = 'center',
    embed,
    focused,
    isTweet,
    isVideo,
    selected,
  } = useMediaState({
    urlParsers: [parseTwitterUrl, parseVideoUrl],
  })

  return (
    <MediaPopover pluginKey={ELEMENT_MEDIA_EMBED}>
      <PlateElement className={cn('relative py-2.5', className)} ref={ref} {...props}>
        <figure className='group relative m-0 w-full' contentEditable={false}>
          <Resizable
            align={align}
            options={{
              align,
              maxWidth: isTweet ? 550 : '100%',
              minWidth: isTweet ? 300 : 100,
            }}
          >
            <ResizeHandle
              className={mediaResizeHandleVariants({ direction: 'left' })}
              options={{ direction: 'left' }}
            />

            <iframe
              allowFullScreen
              className={cn(isVideo && 'border-0', focused && selected && 'ring-2 ring-ring ring-offset-2')}
              src={embed!.url}
              style={{
                borderRadius: 'calc(0.5rem - 4px)',
                minHeight: '400px',
                width: '100%',
              }}
              title='embed'
            />

            <ResizeHandle
              className={mediaResizeHandleVariants({ direction: 'right' })}
              options={{ direction: 'right' }}
            />
          </Resizable>
        </figure>

        {children}
      </PlateElement>
    </MediaPopover>
  )
})
MediaEmbedElement.displayName = 'MediaEmbedElement'

export { MediaEmbedElement }
