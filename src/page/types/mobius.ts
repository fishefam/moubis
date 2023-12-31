export type TMobiusBaseData = {
  actionId: string
  algorithm: string
  authorNotesEditor: string
  classId: string
  commentEditor: string
  customCss: string
  editor: string
  name: string
  uid: string
}

export type TMobiusPreparedData = {
  [key in keyof TMobiusBaseData]: { css: string; html: string; script: string } | string
}
