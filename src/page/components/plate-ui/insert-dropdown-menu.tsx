import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_PARAGRAPH,
  focusEditor,
  insertEmptyElement,
  useEditorState,
} from '@udecode/plate'
import { Fragment } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icons,
  ToolbarButton,
  useOpenState,
} from '@/components'

const items = [
  {
    items: [
      {
        description: 'Paragraph',
        icon: Icons.paragraph,
        label: 'Paragraph',
        value: ELEMENT_PARAGRAPH,
      },
      {
        description: 'Heading 1',
        icon: Icons.h1,
        label: 'Heading 1',
        value: ELEMENT_H1,
      },
      {
        description: 'Heading 2',
        icon: Icons.h2,
        label: 'Heading 2',
        value: ELEMENT_H2,
      },
      {
        description: 'Heading 3',
        icon: Icons.h3,
        label: 'Heading 3',
        value: ELEMENT_H3,
      },
      {
        description: 'Heading 4',
        icon: Icons.h4,
        label: 'Heading 4',
        value: ELEMENT_H4,
      },
      {
        description: 'Heading 5',
        icon: Icons.h5,
        label: 'Heading 5',
        value: ELEMENT_H5,
      },
      {
        description: 'Heading 6',
        icon: Icons.h6,
        label: 'Heading 6',
        value: ELEMENT_H6,
      },
      {
        description: 'Quote (⌘+⇧+.)',
        icon: Icons.blockquote,
        label: 'Quote',
        value: ELEMENT_BLOCKQUOTE,
      },
      // {
      //   value: ELEMENT_TABLE,
      //   label: 'Table',
      //   description: 'Table',
      //   icon: Icons.table,
      // },
      {
        description: 'Bulleted list',
        icon: Icons.ul,
        label: 'Bulleted list',
        value: 'ul',
      },
      {
        description: 'Numbered list',
        icon: Icons.ol,
        label: 'Numbered list',
        value: 'ol',
      },
      {
        description: 'Divider (---)',
        icon: Icons.hr,
        label: 'Divider',
        value: ELEMENT_HR,
      },
    ],
    label: 'Basic blocks',
  },
  // {
  //   label: 'Media',
  //   items: [
  //     {
  //       value: ELEMENT_CODE_BLOCK,
  //       label: 'Code',
  //       description: 'Code (```)',
  //       icon: Icons.codeblock,
  //     },
  //     {
  //       value: ELEMENT_IMAGE,
  //       label: 'Image',
  //       description: 'Image',
  //       icon: Icons.image,
  //     },
  //     {
  //       value: ELEMENT_MEDIA_EMBED,
  //       label: 'Embed',
  //       description: 'Embed',
  //       icon: Icons.embed,
  //     },
  //     {
  //       value: ELEMENT_EXCALIDRAW,
  //       label: 'Excalidraw',
  //       description: 'Excalidraw',
  //       icon: Icons.excalidraw,
  //     },
  //   ],
  // },
  // {
  //   label: 'Inline',
  //   items: [
  //     {
  //       value: ELEMENT_LINK,
  //       label: 'Link',
  //       description: 'Link',
  //       icon: Icons.link,
  //     },
  //   ],
  // },
]

export function InsertDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState()
  const openState = useOpenState()

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger
        asChild
        className='inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([data-icon])]:h-5 [&_svg:not([data-icon])]:w-5 bg-transparent hover:bg-slate-100 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-2 my-1 justify-between pr-1'
      >
        <ToolbarButton pressed={openState.open} tooltip='Insert' isDropdown>
          <Icons.add />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto'>
        {items.map(({ items: nestedItems, label }, index) => (
          <Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(({ value: type, label: itemLabel, icon: Icon }) => (
              <DropdownMenuItem
                key={type}
                className='min-w-[180px]'
                onSelect={async () => {
                  switch (type) {
                    // case ELEMENT_CODE_BLOCK: {
                    //   insertEmptyCodeBlock(editor);
                    //
                    //   break;
                    // }
                    // case ELEMENT_IMAGE: {
                    //   await insertMedia(editor, { type: ELEMENT_IMAGE });
                    //
                    //   break;
                    // }
                    // case ELEMENT_MEDIA_EMBED: {
                    //   await insertMedia(editor, {
                    //     type: ELEMENT_MEDIA_EMBED,
                    //   });
                    //
                    //   break;
                    // }
                    // case 'ul':
                    // case 'ol': {
                    //   insertEmptyElement(editor, ELEMENT_PARAGRAPH, {
                    //     select: true,
                    //     nextBlock: true,
                    //   });
                    //
                    //   if (settingsStore.get.checkedId(KEY_LIST_STYLE_TYPE)) {
                    //     toggleIndentList(editor, {
                    //       listStyleType: type === 'ul' ? 'disc' : 'decimal',
                    //     });
                    //   } else if (settingsStore.get.checkedId('list')) {
                    //     toggleList(editor, { type });
                    //   }
                    //
                    //   break;
                    // }
                    // case ELEMENT_TABLE: {
                    //   insertTable(editor);
                    //
                    //   break;
                    // }
                    // case ELEMENT_LINK: {
                    //   triggerFloatingLink(editor, { focused: true });
                    //
                    //   break;
                    // }
                    default: {
                      insertEmptyElement(editor, type, {
                        nextBlock: true,
                        select: true,
                      })
                    }
                  }

                  focusEditor(editor)
                }}
              >
                <Icon className='mr-2 h-5 w-5' />
                {itemLabel}
              </DropdownMenuItem>
            ))}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
