import { EAlign, EBlockElement, EInlineElement, EVoidElement, type TDocument } from '@/types/plate'

import { nanoid } from './util'

export const html =
  '<p>Y<span class="inline numeric" contenteditable="false" data-questiontext="%3Cinput%20type%3D%22text%22%20size%3D%2220%22%20value%3D%22Numeric%20with%20Units%22%20class%3D%22blankdisabled%20form-control%22%20readonly%3D%22readonly%22%3E" data-source="mode%3DNumeric%40negStyle%3Dminus%40grading%3Dexact_value%40name%3DresponseNaN%40answer.num%3D43%40numStyle%3Dthousands%20scientific%20%20arithmetic%40comment%3D%40weighting%3D1%40answer.units%3Dff%40showUnits%3Dtrue%40" id="sro_id_1" style="display:inline" title="Double-click the response area to edit">&zwnj;</span><span>&nbsp;</span>OOOOOOOOOOOOO IT WORKDS NOWWWWWWWWW</p><p>testing new one stuffwdraftedork great agin</p><div class="question-container"><div class="input-container"><div><label for="radius-range">Radius</label><input class="radius-range" id="radius-range" type="range"></div><fieldset><legend>Position</legend><div><label for="x-range">Left Right</label><input class="x-range" id="x-range" max="500" type="range"></div><div><label for="y-range">Up Down</label><input class="y-range" id="y-range" max="300" type="range"></div></fieldset><fieldset><legend>Color</legend><div><label for="red-range">Red</label><input class="red-range" defaultvalue="50" id="red-range" max="255" type="range"></div><div><label for="green-range">Green</label><input class="green-range" defaultvalue="50" id="green-range" max="255" type="range"></div><div><label for="blue-range">Blue</label><input class="blue-range" defaultvalue="50" id="blue-range" max="255" type="range"></div></fieldset></div><svg height="300" width="500"><circle class="circle" cx="250" cy="150" r="50" style="fill:#7b7b7b"></circle></svg>Now it should save again</div>'

export const initialValue: TDocument = [
  {
    children: [
      {
        text: '🌳 Blocks',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_1,
  },
  {
    children: [
      {
        text: 'Easily create headings of various levels, from H1 to H6, to structure your content and make it more organized.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Create blockquotes to emphasize important information or highlight quotes from external sources.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.BLOCK_QUOTE,
  },
  {
    children: [
      {
        children: [
          {
            text: '// Use code blocks to showcase code snippets',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
      {
        children: [
          {
            text: 'function greet() {',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
      {
        children: [
          {
            text: "  console.info('Hello World!');",
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
      {
        children: [
          {
            text: '}',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
    ],
    id: nanoid(),
    lang: 'javascript',
    type: EBlockElement.CODE_BLOCK,
  },
  {
    children: [
      {
        text: 'Each block is a React component in which you can manage the state:',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    checked: true,
    children: [
      {
        text: 'Create a "banana language" translation plugin',
      },
    ],
    id: nanoid(),
    type: EBlockElement.TODO,
  },
  {
    checked: true,
    children: [
      {
        text: 'Create a "detect sarcasm" plugin (good luck with that)',
      },
    ],
    id: nanoid(),
    type: EBlockElement.TODO,
  },
  {
    children: [
      {
        text: 'Create an AI auto-complete plugin',
      },
    ],
    id: nanoid(),
    type: EBlockElement.TODO,
  },
  {
    children: [
      {
        text: '🔗 Link',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Add ',
      },
      {
        children: [
          {
            text: 'hyperlinks',
          },
        ],
        id: nanoid(),
        type: EInlineElement.LINK,
        url: 'https://en.wikipedia.org/wiki/Hypertext',
      },
      {
        text: ' within your text to reference external sources or provide additional information using the Link plugin.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Effortlessly create hyperlinks using the toolbar or by pasting a URL while selecting the desired text.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '🌱 Marks',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_1,
  },
  {
    children: [
      {
        text: 'Add style and emphasis to your text using the mark plugins, which offers a variety of formatting options.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Make text ',
      },
      {
        bold: true,
        text: 'bold',
      },
      {
        text: ', ',
      },
      {
        italic: true,
        text: 'italic',
      },
      {
        text: ', ',
      },
      {
        text: 'underlined',
        underline: true,
      },
      {
        text: ', or apply a ',
      },
      {
        bold: true,
        italic: true,
        text: 'combination',
        underline: true,
      },
      {
        text: ' of these styles for a visually striking effect.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Add ',
      },
      {
        strikethrough: true,
        text: 'strikethrough',
      },
      {
        text: ' to indicate deleted or outdated content.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Write code snippets with inline ',
      },
      {
        code: true,
        text: 'code',
      },
      {
        text: ' formatting for easy readability.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Add ',
      },
      {
        backgroundColor: '#df4538',
        color: 'white',
        text: 'm',
      },
      {
        backgroundColor: '#e2533a',
        color: 'white',
        text: 'u',
      },
      {
        backgroundColor: '#e6603d',
        color: 'white',
        text: 'l',
      },
      {
        backgroundColor: '#e96f40',
        color: 'white',
        text: 't',
      },
      {
        backgroundColor: '#ec7d43',
        color: 'white',
        text: 'i',
      },
      {
        backgroundColor: '#ef8a45',
        color: 'white',
        text: 'p',
      },
      {
        backgroundColor: '#f29948',
        color: 'white',
        text: 'l',
      },
      {
        backgroundColor: '#f5a74b',
        color: 'white',
        text: 'e',
      },
      {
        text: ' ',
      },
      {
        color: 'rgb(252, 109, 38)',
        text: 'font',
      },
      {
        text: ' and ',
      },
      {
        backgroundColor: 'rgb(252, 109, 38)',
        color: 'white',
        text: 'background',
      },
      {
        text: ' colors to create vibrant and eye-catching text.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        highlight: true,
        text: 'Highlight',
      },
      {
        text: ' important information for better clarity.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Press ',
      },
      {
        kbd: true,
        text: '⌘ + B',
      },
      {
        text: ' to apply bold mark or ',
      },
      {
        kbd: true,
        text: '⌘ + I',
      },
      {
        text: ' for italic mark.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '＠ Mention',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Mention and reference other users or entities within your text using @-mentions.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Try mentioning ',
      },
      {
        children: [
          {
            text: '',
          },
        ],
        id: nanoid(),
        type: EInlineElement.MENTION,
        value: 'R2-D2',
      },
      {
        text: ' or ',
      },
      {
        children: [
          {
            text: '',
          },
        ],
        id: nanoid(),
        type: EInlineElement.MENTION,
        value: 'Mace Windu',
      },
      {
        text: '.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: "🙂 Emoji's",
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Express yourself with a touch of fun 🎉 and emotion 😃.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Pick from the toolbar or write after the colon to open the combobox :',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    align: EAlign.RIGHT,
    children: [
      {
        text: 'Alignment',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    align: EAlign.RIGHT,
    children: [
      {
        text: 'Align text within blocks to create visually appealing and balanced layouts.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    align: EAlign.CENTER,
    children: [
      {
        text: 'Center',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_3,
  },
  {
    align: EAlign.JUSTIFY,
    children: [
      {
        text: 'Create clean and balanced layouts by justifying block text, providing a professional and polished look.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Line Height',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Control the line height of your text to improve readability and adjust the spacing between lines.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Choose the ideal line height to ensure comfortable reading and an aesthetically pleasing document.',
      },
    ],
    id: nanoid(),
    lineHeight: 2,
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Indentation',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Easily control the indentation of specific blocks to highlight important information and improve visual structure.',
      },
    ],
    id: nanoid(),
    indent: 1,
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'For instance, this paragraph looks like it belongs to the previous one.',
      },
    ],
    id: nanoid(),
    indent: 2,
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Indent List',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Create indented lists with multiple levels of indentation and customize the list style type for each level.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Horizontal Rule',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Add horizontal rules to visually separate sections and content within your document.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EVoidElement.DIVIDER,
  },
  {
    children: [
      {
        text: '📸 Image',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Add images by either uploading them or providing the image URL:',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EVoidElement.BLOCK_IMAGE,
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    width: '75%',
  },
  {
    children: [
      {
        text: 'Customize image captions and resize images.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '📺 Embed',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Embed various types of content, such as videos and tweets:',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EVoidElement.VIDEO,
    url: 'https://www.youtube.com/watch?v=MyiBAziEWUA',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EVoidElement.VIDEO,
    url: 'https://twitter.com/zbeyens/status/1677214892212776960',
  },
  {
    children: [
      {
        text: '🏓 Table',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Create customizable tables with resizable columns and rows, allowing you to design structured layouts.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Plugin',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Element',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Inline',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Void',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Heading',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Image',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Mention',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
    ],
    colSizes: [100, 100, 100, 100],
    id: nanoid(),
    marginLeft: 20,
    type: EBlockElement.TABLE,
  },
  {
    children: [
      {
        text: '🏃‍♀️ Autoformat',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Empower your writing experience by enabling autoformatting features. Add Markdown-like shortcuts that automatically apply formatting as you type.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'While typing, try these mark rules:',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '**',
              },
              {
                text: ' or ',
              },
              {
                code: true,
                text: '__',
              },
              {
                text: ' on either side of your text to add **bold* mark.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '*',
              },
              {
                text: ' or ',
              },
              {
                code: true,
                text: '_',
              },
              {
                text: ' on either side of your text to add *italic mark.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '`',
              },
              {
                text: ' on either side of your text to add `inline code mark.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '~~',
              },
              {
                text: ' on either side of your text to add ~~strikethrough~ mark.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Note that nothing happens when there is a character before, try on:*bold',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'We even support smart quotes, try typing ',
              },
              {
                code: true,
                text: '"hello" \'world\'',
              },
              {
                text: '.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
    ],
    id: nanoid(),
    type: EBlockElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'At the beginning of any new block or existing block, try these (block rules):',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '*',
              },
              {
                text: ', ',
              },
              {
                code: true,
                text: '-',
              },
              {
                text: ' or ',
              },
              {
                code: true,
                text: '+',
              },
              {
                text: 'followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create a bulleted list.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '1.',
              },
              {
                text: ' or ',
              },
              {
                code: true,
                text: '1)',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: 'to create a numbered list.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '>',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create a block quote.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '```',
              },
              {
                text: ' to create a code block.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '---',
              },
              {
                text: ' to create a horizontal rule.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '#',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create an H1 heading.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '##',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create an H2 sub-heading.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '###',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create an H3 sub-heading.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '####',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create an H4 sub-heading.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '#####',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create an H5 sub-heading.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Type ',
              },
              {
                code: true,
                text: '######',
              },
              {
                text: ' followed by ',
              },
              {
                code: true,
                text: 'space',
              },
              {
                text: ' to create an H6 sub-heading.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
    ],
    id: nanoid(),
    type: EBlockElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'Soft Break ⇧⏎',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Customize how soft breaks (line breaks within a paragraph) are handled using configurable rules',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                text: 'hotkey – Use hotkeys like ⇧⏎ to insert a soft break anywhere within a paragraph.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'query – Define custom rules to limit soft breaks to specific block types.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
    ],
    id: nanoid(),
    type: EBlockElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'Try here ⏎',
      },
    ],
    id: nanoid(),
    type: EBlockElement.BLOCK_QUOTE,
  },
  {
    children: [
      {
        children: [
          {
            text: 'And here ⏎ as well.',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
    ],
    id: nanoid(),
    type: EBlockElement.CODE_BLOCK,
  },
  {
    children: [
      {
        text: 'Exit Break ⏎',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Configure how exit breaks (line breaks between blocks) behave using simple rules:',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                text: 'hotkey – Use hotkeys like ⌘⏎ to move the cursor to the next block',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'query – Specify block types where exit breaks are allowed.',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'before – Choose whether the cursor exits to the next or previous block',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
    ],
    id: nanoid(),
    type: EBlockElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'Try here ⌘⏎',
      },
    ],
    id: nanoid(),
    type: EBlockElement.BLOCK_QUOTE,
  },
  {
    children: [
      {
        children: [
          {
            text: 'And in the middle ⌘⏎ of a block.',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
    ],
    id: nanoid(),
    type: EBlockElement.CODE_BLOCK,
  },
  {
    children: [
      {
        text: 'Exit breaks also work within nested blocks:',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Plugin',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Element',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Inline',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Void',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_HEADER,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Heading',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Image',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    bold: true,
                    text: 'Mention',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: nanoid(),
                type: EBlockElement.PARAGRAPH,
              },
            ],
            id: nanoid(),
            type: EBlockElement.TABLE_CELL,
          },
        ],
        id: nanoid(),
        type: EBlockElement.TABLE_ROW,
      },
    ],
    colSizes: [100, 100, 100, 100],
    id: nanoid(),
    marginLeft: 20,
    type: EBlockElement.TABLE,
  },
  {
    children: [
      {
        text: 'Cursor Overlay',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Try to drag over text: you will see a black cursor on the drop target: color and other styles are customizable!',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Tabbable',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Ensure a smooth tab navigation experience within your editor with the Tabbable plugin.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Properly handle tab orders for void nodes, allowing for seamless navigation and interaction. Without this plugin, DOM elements inside void nodes come after the editor in the tab order.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EBlockElement.TABBABLE,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EBlockElement.TABBABLE,
  },
  {
    children: [
      {
        text: 'Place your cursor here and try pressing tab or shift+tab.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                text: 'List item 1',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'List item 2',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'List item 3',
              },
            ],
            id: nanoid(),
            type: EBlockElement.LIST_CONTENT,
          },
        ],
        id: nanoid(),
        type: EBlockElement.LIST_ITEM,
      },
    ],
    id: nanoid(),
    type: EBlockElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        children: [
          {
            text: 'if (true) {',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
      {
        children: [
          {
            text: '// <- Place cursor at start of line and press tab',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
      {
        children: [
          {
            text: '}',
          },
        ],
        id: nanoid(),
        type: EBlockElement.CODE_LINE,
      },
    ],
    id: nanoid(),
    lang: 'javascript',
    type: EBlockElement.CODE_BLOCK,
  },
  {
    children: [
      {
        text: 'In this example, the plugin is disabled when the cursor is inside a list or a code block. You can customise this using the ',
      },
      {
        code: true,
        text: 'query',
      },
      {
        text: ' option.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EBlockElement.TABBABLE,
  },
  {
    children: [
      {
        text: 'When you press tab at the end of the editor, the focus should go to the button below.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '💬 Comments',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Deserialize HTML',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: "By default, when you paste content into the Slate editor, it will utilize the clipboard's ",
      },
      {
        code: true,
        text: "'text/plain'",
      },
      {
        text: 'data. While this is suitable for certain scenarios, there are times when you want users to be able to paste content while preserving its formatting. To achieve this, your editor should be capable of handling ',
      },
      {
        code: true,
        text: "'text/html'",
      },
      {
        text: 'data.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: "To experience the seamless preservation of formatting, simply copy and paste rendered HTML rich text content (not the source code) from another website into this editor. You'll notice that the formatting of the pasted content is maintained.",
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Deserialize Markdown',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Copy and paste Markdown content from popular Markdown editors like ',
      },
      {
        children: [
          {
            text: 'markdown-it.github.io/',
          },
        ],
        id: nanoid(),
        type: EInlineElement.LINK,
        url: 'https://markdown-it.github.io/',
      },
      {
        text: ' into the editor for easy conversion and editing.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Deserialize Docx',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Easily import content from Microsoft Word documents by simply copying and pasting the Docx content into the editor.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Deserialize CSV',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Copy and paste CSV content into a table.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Trailing Block',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Always have a trailing paragraph at the end of your editor.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Excalidraw',
      },
    ],
    id: nanoid(),
    type: EBlockElement.HEADING_2,
  },
  {
    children: [
      {
        text: 'Unleash your creativity with the Excalidraw plugin, which enables you to embed and draw diagrams directly within your editor.',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    data: {
      elements: [
        {
          angle: 0,
          backgroundColor: 'transparent',
          fillStyle: 'hachure',
          groupIds: [],
          height: 141.9765625,
          id: nanoid(),
          isDeleted: false,
          opacity: 100,
          roughness: 1,
          seed: 1968410350,
          strokeColor: '#000000',
          strokeStyle: 'solid',
          strokeWidth: 1,
          type: 'rectangle',
          version: 141,
          versionNonce: 361174001,
          width: 186.47265625,
          x: 100.50390625,
          y: 93.67578125,
        },
        {
          angle: 0,
          backgroundColor: 'transparent',
          fillStyle: 'hachure',
          groupIds: [],
          height: 129.51171875,
          id: nanoid(),
          isDeleted: false,
          opacity: 100,
          roughness: 1,
          seed: 957947807,
          strokeColor: '#000000',
          strokeStyle: 'solid',
          strokeWidth: 1,
          type: 'ellipse',
          version: 47,
          versionNonce: 1128618623,
          width: 198.21875,
          x: 300.5703125,
          y: 190.69140625,
        },
      ],
      state: {
        currentItemFontFamily: 1,
        viewBackgroundColor: '#AFEEEE',
      },
    },
    id: nanoid(),
    type: EVoidElement.EXCALIDRAW,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: nanoid(),
    type: EBlockElement.PARAGRAPH,
  },
]
