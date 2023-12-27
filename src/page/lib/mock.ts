import type { TDocument } from '@/types/plate'

import { EAlign, ECommonElement, EHeadingElement } from '@/types/plate'

export const html =
  '<p>Y<span class="inline numeric" contenteditable="false" data-questiontext="%3Cinput%20type%3D%22text%22%20size%3D%2220%22%20value%3D%22Numeric%20with%20Units%22%20class%3D%22blankdisabled%20form-control%22%20readonly%3D%22readonly%22%3E" data-source="mode%3DNumeric%40negStyle%3Dminus%40grading%3Dexact_value%40name%3DresponseNaN%40answer.num%3D43%40numStyle%3Dthousands%20scientific%20%20arithmetic%40comment%3D%40weighting%3D1%40answer.units%3Dff%40showUnits%3Dtrue%40" id="sro_id_1" style="display:inline" title="Double-click the response area to edit">&zwnj;</span><span>&nbsp;</span>OOOOOOOOOOOOO IT WORKDS NOWWWWWWWWW</p><p>testing new one stuffwdraftedork great agin</p><div class="question-container"><div class="input-container"><div><label for="radius-range">Radius</label><input class="radius-range" id="radius-range" type="range"></div><fieldset><legend>Position</legend><div><label for="x-range">Left Right</label><input class="x-range" id="x-range" max="500" type="range"></div><div><label for="y-range">Up Down</label><input class="y-range" id="y-range" max="300" type="range"></div></fieldset><fieldset><legend>Color</legend><div><label for="red-range">Red</label><input class="red-range" defaultvalue="50" id="red-range" max="255" type="range"></div><div><label for="green-range">Green</label><input class="green-range" defaultvalue="50" id="green-range" max="255" type="range"></div><div><label for="blue-range">Blue</label><input class="blue-range" defaultvalue="50" id="blue-range" max="255" type="range"></div></fieldset></div><svg height="300" width="500"><circle class="circle" cx="250" cy="150" r="50" style="fill:#7b7b7b"></circle></svg>Now it should save again</div>'

export const initialValue: TDocument = [
  {
    children: [
      {
        text: '🌳Blocks',
      },
    ],
    type: EHeadingElement.H1,
  },
  {
    children: [
      { text: 'Before the mathjax element' },
      {
        text: '\\(\\frac{3}{1234}\\)',
      },
      {
        text: 'Easily create headings of various levels, from H1 to H6, to structure your content and make it more organized.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Create blockquotes to emphasize important information or highlight quotes from external sources.',
      },
    ],
    type: ECommonElement.BLOCK_QUOTE,
  },
  {
    children: [
      {
        children: [
          {
            text: '// Use code blocks to showcase code snippets',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
      {
        children: [
          {
            text: 'function greet() {',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
      {
        children: [
          {
            text: "  console.info('Hello World!');",
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
      {
        children: [
          {
            text: '}',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
    ],
    codeLang: 'javascript',
    type: ECommonElement.CODE_BLOCK,
  },
  {
    children: [
      {
        text: 'Each block is a React component in which you can manage the state:',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    checked: true,
    children: [
      {
        text: 'Create a "banana language" translation plugin',
      },
    ],
    type: ECommonElement.TODO,
  },
  {
    checked: true,
    children: [
      {
        text: 'Create a "detect sarcasm" plugin (good luck with that)',
      },
    ],
    type: ECommonElement.TODO,
  },
  {
    children: [
      {
        text: 'Create an AI auto-complete plugin',
      },
    ],
    type: ECommonElement.TODO,
  },
  {
    children: [
      {
        text: '🔗 Link',
      },
    ],
    type: EHeadingElement.H2,
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
        type: ECommonElement.LINK,
        url: 'https://en.wikipedia.org/wiki/Hypertext',
      },
      {
        text: ' within your text to reference external sources or provide additional information using the Link plugin.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Effortlessly create hyperlinks using the toolbar or by pasting a URL while selecting the desired text.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '🌱 Marks',
      },
    ],
    type: EHeadingElement.H1,
  },
  {
    children: [
      {
        text: 'Add style and emphasis to your text using the mark plugins, which offers a variety of formatting options.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
    type: ECommonElement.PARAGRAPH,
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
    type: ECommonElement.PARAGRAPH,
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
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Add ',
      },
      {
        color: 'white',
        highlight: '#df4538',
        text: 'm',
      },
      {
        color: 'white',
        highlight: '#e2533a',
        text: 'u',
      },
      {
        color: 'white',
        highlight: '#e6603d',
        text: 'l',
      },
      {
        color: 'white',
        highlight: '#e96f40',
        text: 't',
      },
      {
        color: 'white',
        highlight: '#ec7d43',
        text: 'i',
      },
      {
        color: 'white',
        highlight: '#ef8a45',
        text: 'p',
      },
      {
        color: 'white',
        highlight: '#f29948',
        text: 'l',
      },
      {
        color: 'white',
        highlight: '#f5a74b',
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
        color: 'white',
        highlight: 'rgb(252, 109, 38)',
        text: 'background',
      },
      {
        text: ' colors to create vibrant and eye-catching text.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Press ',
      },
      {
        highlight: '#637647',
        text: '⌘ + B',
      },
      {
        text: ' to apply bold mark or ',
      },
      {
        highlight: '#637647',
        text: '⌘ + I',
      },
      {
        text: ' for italic mark.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '＠ Mention',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Mention and reference other users or entities within your text using @-mentions.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
        type: ECommonElement.MENTION,
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
        type: ECommonElement.MENTION,
        value: 'Mace Windu',
      },
      {
        text: '.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: "🙂 Emoji's",
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Express yourself with a touch of fun 🎉 and emotion 😃.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Pick from the toolbar or write after the colon to open the combobox :',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    align: EAlign.RIGHT,
    children: [
      {
        text: 'Alignment',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    align: EAlign.RIGHT,
    children: [
      {
        text: 'Align text within blocks to create visually appealing and balanced layouts.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    align: EAlign.CENTER,
    children: [
      {
        text: 'Center',
      },
    ],
    type: EHeadingElement.H3,
  },
  {
    align: EAlign.JUSTIFY,
    children: [
      {
        text: 'Create clean and balanced layouts by justifying block text, providing a professional and polished look.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Line Height',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Control the line height of your text to improve readability and adjust the spacing between lines.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Choose the ideal line height to ensure comfortable reading and an aesthetically pleasing document.',
      },
    ],
    lineHeight: 2,
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Indentation',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Easily control the indentation of specific blocks to highlight important information and improve visual structure.',
      },
    ],
    indent: 1,
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'For instance, this paragraph looks like it belongs to the previous one.',
      },
    ],
    indent: 2,
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Horizontal Rule',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Add horizontal rules to visually separate sections and content within your document.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.DIVIDER,
  },
  {
    children: [
      {
        text: '✍️ List',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                text: 'Cats',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Dogs',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Birds',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
          {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        text: 'Parrots',
                      },
                    ],
                    type: ECommonElement.LIST_CONTENT,
                  },
                ],
                type: ECommonElement.LIST_ITEM,
              },
              {
                children: [
                  {
                    children: [
                      {
                        text: 'Owls',
                      },
                    ],
                    type: ECommonElement.LIST_CONTENT,
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [
                              {
                                text: 'Barn Owls',
                              },
                            ],
                            type: ECommonElement.LIST_CONTENT,
                          },
                        ],
                        type: ECommonElement.LIST_ITEM,
                      },
                      {
                        children: [
                          {
                            children: [
                              {
                                text: 'Snowy Owls',
                              },
                            ],
                            type: ECommonElement.LIST_CONTENT,
                          },
                        ],
                        type: ECommonElement.LIST_ITEM,
                      },
                    ],
                    type: ECommonElement.UNORDERED_LIST,
                  },
                ],
                type: ECommonElement.LIST_ITEM,
              },
            ],
            type: ECommonElement.UNORDERED_LIST,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
    ],
    type: ECommonElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        children: [
          {
            children: [
              {
                text: 'Red',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Blue',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
          {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        text: 'Light blue',
                      },
                    ],
                    type: ECommonElement.LIST_CONTENT,
                  },
                ],
                type: ECommonElement.LIST_ITEM,
              },
              {
                children: [
                  {
                    children: [
                      {
                        text: 'Dark blue',
                      },
                    ],
                    type: ECommonElement.LIST_CONTENT,
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [
                              {
                                text: 'Navy blue',
                              },
                            ],
                            type: ECommonElement.LIST_CONTENT,
                          },
                        ],
                        type: ECommonElement.LIST_ITEM,
                      },
                      {
                        children: [
                          {
                            children: [
                              {
                                text: 'Turquoise blue',
                              },
                            ],
                            type: ECommonElement.LIST_CONTENT,
                          },
                        ],
                        type: ECommonElement.LIST_ITEM,
                      },
                    ],
                    type: ECommonElement.ORDERED_LIST,
                  },
                ],
                type: ECommonElement.LIST_ITEM,
              },
            ],
            type: ECommonElement.UNORDERED_LIST,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Green',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
    ],
    type: ECommonElement.ORDERED_LIST,
  },
  {
    children: [
      {
        text: '📸 Image',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Add images by either uploading them or providing the image URL:',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.IMAGE,
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    width: '75%',
  },
  {
    children: [
      {
        text: 'Customize image captions and resize images.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '📺 Embed',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Embed various types of content, such as videos and tweets:',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.VIDEO,
    url: 'https://www.youtube.com/watch?v=MyiBAziEWUA',
  },
  {
    children: [
      {
        text: '🏓 Table',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Create customizable tables with resizable columns and rows, allowing you to design structured layouts.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
          },
        ],
        type: ECommonElement.TABLE_ROW,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
        ],
        type: ECommonElement.TABLE_ROW,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
        ],
        type: ECommonElement.TABLE_ROW,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
        ],
        type: ECommonElement.TABLE_ROW,
      },
    ],
    colSizes: [100, 100, 100, 100],
    marginLeft: 20,
    type: ECommonElement.TABLE,
  },
  {
    children: [
      {
        text: '🏃‍♀️ Autoformat',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Empower your writing experience by enabling autoformatting features. Add Markdown-like shortcuts that automatically apply formatting as you type.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'While typing, try these mark rules:',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'Note that nothing happens when there is a character before, try on:*bold',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
    ],
    type: ECommonElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'At the beginning of any new block or existing block, try these (block rules):',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
    ],
    type: ECommonElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'Soft Break ⇧⏎',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Customize how soft breaks (line breaks within a paragraph) are handled using configurable rules',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'query – Define custom rules to limit soft breaks to specific block types.',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
    ],
    type: ECommonElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'Try here ⏎',
      },
    ],
    type: ECommonElement.BLOCK_QUOTE,
  },
  {
    children: [
      {
        children: [
          {
            text: 'And here ⏎ as well.',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
    ],
    type: ECommonElement.CODE_BLOCK,
  },
  {
    children: [
      {
        text: 'Exit Break ⏎',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Configure how exit breaks (line breaks between blocks) behave using simple rules:',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'query – Specify block types where exit breaks are allowed.',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'before – Choose whether the cursor exits to the next or previous block',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
    ],
    type: ECommonElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        text: 'Try here ⌘⏎',
      },
    ],
    type: ECommonElement.BLOCK_QUOTE,
  },
  {
    children: [
      {
        children: [
          {
            text: 'And in the middle ⌘⏎ of a block.',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
    ],
    type: ECommonElement.CODE_BLOCK,
  },
  {
    children: [
      {
        text: 'Exit breaks also work within nested blocks:',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_HEADER,
          },
        ],
        type: ECommonElement.TABLE_ROW,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
        ],
        type: ECommonElement.TABLE_ROW,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
        ],
        type: ECommonElement.TABLE_ROW,
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
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                type: ECommonElement.PARAGRAPH,
              },
            ],
            type: ECommonElement.TABLE_CELL,
          },
        ],
        type: ECommonElement.TABLE_ROW,
      },
    ],
    colSizes: [100, 100, 100, 100],
    marginLeft: 20,
    type: ECommonElement.TABLE,
  },
  {
    children: [
      {
        text: 'Cursor Overlay',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Try to drag over text: you will see a black cursor on the drop target: color and other styles are customizable!',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Tabbable',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Ensure a smooth tab navigation experience within your editor with the Tabbable plugin.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Properly handle tab orders for void nodes, allowing for seamless navigation and interaction. Without this plugin, DOM elements inside void nodes come after the editor in the tab order.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.TABBABLE,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.TABBABLE,
  },
  {
    children: [
      {
        text: 'Place your cursor here and try pressing tab or shift+tab.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
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
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'List item 2',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
      {
        children: [
          {
            children: [
              {
                text: 'List item 3',
              },
            ],
            type: ECommonElement.LIST_CONTENT,
          },
        ],
        type: ECommonElement.LIST_ITEM,
      },
    ],
    type: ECommonElement.UNORDERED_LIST,
  },
  {
    children: [
      {
        children: [
          {
            text: 'if (true) {',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
      {
        children: [
          {
            text: '// <- Place cursor at start of line and press tab',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
      {
        children: [
          {
            text: '}',
          },
        ],
        type: ECommonElement.CODE_LINE,
      },
    ],
    codeLang: 'javascript',
    type: ECommonElement.CODE_BLOCK,
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
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.TABBABLE,
  },
  {
    children: [
      {
        text: 'When you press tab at the end of the editor, the focus should go to the button below.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '💬 Comments',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Add ',
      },
      {
        text: 'comments to your content',
      },
      {
        text: ' to provide additional context, insights, or ',
      },
      {
        text: 'collaborate',
      },
      {
        text: '  with others',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Deserialize HTML',
      },
    ],
    type: EHeadingElement.H2,
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
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: "To experience the seamless preservation of formatting, simply copy and paste rendered HTML rich text content (not the source code) from another website into this editor. You'll notice that the formatting of the pasted content is maintained.",
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Deserialize Markdown',
      },
    ],
    type: EHeadingElement.H2,
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
        type: ECommonElement.LINK,
        url: 'https://markdown-it.github.io/',
      },
      {
        text: ' into the editor for easy conversion and editing.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Deserialize Docx',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Easily import content from Microsoft Word documents by simply copying and pasting the Docx content into the editor.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Deserialize CSV',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Copy and paste CSV content into a table.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Trailing Block',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Always have a trailing paragraph at the end of your editor.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: 'Excalidraw',
      },
    ],
    type: EHeadingElement.H2,
  },
  {
    children: [
      {
        text: 'Unleash your creativity with the Excalidraw plugin, which enables you to embed and draw diagrams directly within your editor.',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    excalidrawData: {
      elements: [
        {
          angle: 0,
          fillStyle: 'hachure',
          groupIds: [],
          height: 141.9765625,
          highlight: 'transparent',
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
          fillStyle: 'hachure',
          groupIds: [],
          height: 129.51171875,
          highlight: 'transparent',
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
        viewhighlight: '#AFEEEE',
      },
    },
    type: ECommonElement.EXCALIDRAW,
  },
  {
    children: [
      {
        text: '',
      },
    ],
    type: ECommonElement.PARAGRAPH,
  },
]
