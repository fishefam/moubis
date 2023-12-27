import type { PlateContentProps } from '@udecode/plate-common'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { deserializeHtml, parseHtmlDocument, PlateContent, useEditorRef } from '@udecode/plate-common'
import { cva } from 'class-variance-authority'
import React, { useEffect } from 'react'

const editorVariants = cva(
  cn(
    'relative overflow-x-auto whitespace-pre-wrap break-words',
    'min-h-[80px] w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none',
    '[&_[data-slate-placeholder]]:text-muted-foreground [&_[data-slate-placeholder]]:!opacity-100',
    '[&_[data-slate-placeholder]]:top-[auto_!important]',
    '[&_strong]:font-bold',
  ),
  {
    defaultVariants: {
      focusRing: true,
      size: 'sm',
      variant: 'outline',
    },
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      focused: {
        true: 'ring-2 ring-ring ring-offset-2',
      },
      focusRing: {
        false: '',
        true: 'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      },
      size: {
        md: 'text-base',
        sm: 'text-sm',
      },
      variant: {
        ghost: '',
        outline: 'border border-input',
      },
    },
  },
)

export type EditorProps = PlateContentProps & VariantProps<typeof editorVariants>

const html = `<p>&nbsp;</p>

<p><span style="font-family:Verdana,Geneva,sans-serif;"><span style="font-size:16px;">An extremely large population has a mean of $Mean and a standard deviation of $SD. Consider all possible samples of size $SS. </span></span></p>

<p><span style="font-family:Verdana,Geneva,sans-serif;"><span style="font-size:16px;">What would be the value of the mean and&nbsp;standard deviation of the sample means?</span></span></p>

<hr />
<p style="margin-left: 40px;"><span style="font-family:Verdana,Geneva,sans-serif;"><span style="font-size:16px;">a) The mean is:&nbsp;&nbsp;<span class="inline numeric" contenteditable="false" data-questiontext="%3Cinput%20type%3D%22text%22%20size%3D%2220%22%20value%3D%22Numeric%22%20class%3D%22blankdisabled%20form-control%22%20readonly%3D%22readonly%22%3E" data-source="mode%3DNumeric%40negStyle%3Dminus%40grading%3Dexact_value%40name%3DresponseNaN%40answer.num%3D%24Mean%40numStyle%3Dthousands%20scientific%20%20arithmetic%40comment%3D%3Cp%3E%26nbsp%3B%3C%2Fp%3E%40weighting%3D1%40answer.units%3D%40showUnits%3Dfalse%40" id="sro_id_1" style="{background:#eee; display:inline;}" title="Double-click the response area to edit">&zwnj;</span>&nbsp;</span></span></p>

<p style="margin-left: 40px;"><span style="font-family:Verdana,Geneva,sans-serif;"><span style="font-size:16px;">b) The standard deviation is:&nbsp;&nbsp;<span class="inline numeric" contenteditable="false" data-questiontext="%3Cinput%20type%3D%22text%22%20size%3D%2220%22%20value%3D%22Numeric%22%20class%3D%22blankdisabled%20form-control%22%20readonly%3D%22readonly%22%3E" data-source="mode%3DNumeric%40negStyle%3Dminus%40grading%3Dtoler_abs%40err%3D0.01%40name%3DresponseNaN%40answer.num%3D%24AnsSD%40numStyle%3Dthousands%20scientific%20%20arithmetic%40comment%3D%3Cp%3E%26nbsp%3B%3C%2Fp%3E%40weighting%3D1%40answer.units%3D%40showUnits%3Dfalse%40" id="sro_id_2" style="{background:#eee; display:inline;}" title="Double-click the response area to edit">&zwnj;</span>&nbsp;</span></span></p>

<p style="margin-left: 40px;"><span style="font-size:12px;"><span style="font-family:Verdana,Geneva,sans-serif;"><em>(Round your answer&nbsp;to 2 decimal places)</em></span></span></p>
`
const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ className, disabled, focused, focusRing, readOnly, size, variant, ...props }, ref) => {
    const editor = useEditorRef()
    useEffect(() => {
      const data = deserializeHtml(editor, { element: parseHtmlDocument(html).body })
      console.log(data)
    }, [editor])

    return (
      <div ref={ref}>
        <PlateContent
          aria-disabled={disabled}
          className={cn(
            editorVariants({
              disabled,
              focused,
              focusRing,
              size,
              variant,
            }),
            className,
          )}
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          style={{
            color: '#737373',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '12px',
            lineHeight: '17.15px',
            position: 'relative',
            width: '100%',
          }}
          {...props}
        />
      </div>
    )
  },
)
Editor.displayName = 'Editor'

export { Editor }
