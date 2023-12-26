import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TExcalidrawElement } from '@udecode/plate-excalidraw'

import { PlateElement } from '@udecode/plate-common'
import { useExcalidrawElement } from '@udecode/plate-excalidraw'

export function ExcalidrawElement({ nodeProps, ...props }: PlateElementProps<Value, TExcalidrawElement>) {
  const { children, element } = props

  const { Excalidraw, excalidrawProps } = useExcalidrawElement({
    element,
  })

  return (
    <PlateElement
      {...props}
      style={{
        imageRendering: 'pixelated',
        touchAction: 'none',
        zIndex: 50,
      }}
    >
      <div contentEditable={false}>
        <div style={{ height: '600px' }}>{Excalidraw && <Excalidraw {...nodeProps} {...excalidrawProps} />}</div>
      </div>
      {children}
    </PlateElement>
  )
}
