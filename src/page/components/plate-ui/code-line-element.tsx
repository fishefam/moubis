import type { PlateElementProps } from '@udecode/plate-common'

import { PlateElement } from '@udecode/plate-common'
import { useEffect, useRef } from 'react'

const CodeLineElement = (props: PlateElementProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const elem = ref.current
    if (elem) {
      const leftPadding = elem.innerText.match(/^ +/)
      if (leftPadding && leftPadding[0]) {
        const pad = leftPadding[0].length
        elem.style.marginLeft = `${pad * 10}px`
      }
    }
  }, [])
  return <PlateElement ref={ref} {...props} />
}

export { CodeLineElement }
