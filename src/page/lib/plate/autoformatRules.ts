import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes,
} from '@udecode/plate'

import { type TPlateAutoformatRule } from '@/types/plate'

import { autoformatBlocks } from './autoformatBlocks'
import { autoformatIndentLists } from './autoformatIndentLists'
import { autoformatMarks } from './autoformatMarks'

export const autoformatRules = [
  ...autoformatBlocks,
  ...autoformatIndentLists,
  ...autoformatMarks,
  ...(autoformatSmartQuotes as TPlateAutoformatRule[]),
  ...(autoformatPunctuation as TPlateAutoformatRule[]),
  ...(autoformatLegal as TPlateAutoformatRule[]),
  ...(autoformatLegalHtml as TPlateAutoformatRule[]),
  ...(autoformatArrow as TPlateAutoformatRule[]),
  ...(autoformatMath as TPlateAutoformatRule[]),
]
