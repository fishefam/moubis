import type {
  PlateEditor,
  TDescendant,
  TElement,
  Value,
} from '@udecode/plate-common'
import type { Path } from 'slate'

export type TablePlugin<V extends Value = Value> = {
  /**
   * Disable expanding the table when inserting cells.
   */
  disableExpandOnInsert?: boolean;

  // Disable first column left resizer.
  disableMarginLeft?: boolean;

  /**
   * Disable unsetting the first column width when the table has one column.
   * Set it to true if you want to resize the table width when there is only one column.
   * Keep it false if you have a full-width table.
   */
  enableUnsetSingleColSize?: boolean;

  /**
   * @default empty paragraph
   */
  newCellChildren?: TDescendant[];

  /**
   * @default insertTableColumn
   */
  insertColumn?: (
    editor: PlateEditor<V>,
    options: {
      fromCell: Path;
    }
  ) => void;

  /**
   * @default insertTableRow
   */
  insertRow?: (
    editor: PlateEditor<V>,
    options: {
      fromRow: Path;
    }
  ) => void;

  /**
   * If defined, a normalizer will set each undefined table `colSizes` to this value divided by the number of columns.
   * Merged cells not supported.
   */
  initialTableWidth?: number;

  /**
   * The minimum width of a column.
   * @default 48
   */
  minColumnWidth?: number;

  /**
   * Enable cells merging functionality.
   * @default false
   */
  enableMerging?: boolean;

  /**
   * For internal use. Keeps track of cell indices. Used only when enableMerging is true.
   */
  _cellIndices?: TableStoreCellAttributes;
}

export type TableStoreCellAttributes = WeakMap<
  TTableCellElement,
  { row: number; col: number }
>;

export type BorderStyle = {
  // https://docx.js.org/api/enums/BorderStyle.html
  style?: string;
  size?: number;
  color?: string;
}

export type TTableElement = {
  colSizes?: number[];
  marginLeft?: number;
} & TElement

export type TTableRowElement = {
  size?: number;
} & TElement

export type TTableCellElement = {
  colSpan?: number;
  rowSpan?: number;
  size?: number;
  background?: string;
  borders?: {
    top?: BorderStyle;
    left?: BorderStyle;

    /**
     * Only the last row cells have a bottom border.
     */
    bottom?: BorderStyle;

    /**
     * Only the last column cells have a right border.
     */
    right?: BorderStyle;
  };
  attributes?: {
    colspan?: string;
    rowspan?: string;
  };
} & TElement

export type BorderDirection = 'top' | 'left' | 'bottom' | 'right';
