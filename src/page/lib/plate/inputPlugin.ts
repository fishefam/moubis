import { type PlatePlugin } from '@udecode/plate-common'

export const ELEMENT_INPUT = 'input'

export const inputPlugin: PlatePlugin = {
  isElement: true,
  isInline: true,
  isVoid: true,
  key: ELEMENT_INPUT,
}
