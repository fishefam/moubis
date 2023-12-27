export const html =
  '<p>Y<span class="inline numeric" contenteditable="false" data-questiontext="%3Cinput%20type%3D%22text%22%20size%3D%2220%22%20value%3D%22Numeric%20with%20Units%22%20class%3D%22blankdisabled%20form-control%22%20readonly%3D%22readonly%22%3E" data-source="mode%3DNumeric%40negStyle%3Dminus%40grading%3Dexact_value%40name%3DresponseNaN%40answer.num%3D43%40numStyle%3Dthousands%20scientific%20%20arithmetic%40comment%3D%40weighting%3D1%40answer.units%3Dff%40showUnits%3Dtrue%40" id="sro_id_1" style="display:inline" title="Double-click the response area to edit">&zwnj;</span><span>&nbsp;</span>OOOOOOOOOOOOO IT WORKDS NOWWWWWWWWW</p><p>testing new one stuffwdraftedork great agin</p><div class="question-container"><div class="input-container"><div><label for="radius-range">Radius</label><input class="radius-range" id="radius-range" type="range"></div><fieldset><legend>Position</legend><div><label for="x-range">Left Right</label><input class="x-range" id="x-range" max="500" type="range"></div><div><label for="y-range">Up Down</label><input class="y-range" id="y-range" max="300" type="range"></div></fieldset><fieldset><legend>Color</legend><div><label for="red-range">Red</label><input class="red-range" defaultvalue="50" id="red-range" max="255" type="range"></div><div><label for="green-range">Green</label><input class="green-range" defaultvalue="50" id="green-range" max="255" type="range"></div><div><label for="blue-range">Blue</label><input class="blue-range" defaultvalue="50" id="blue-range" max="255" type="range"></div></fieldset></div><svg height="300" width="500"><circle class="circle" cx="250" cy="150" r="50" style="fill:#7b7b7b"></circle></svg>Now it should save again</div>'

export const initialValue = [
  {
    children: [
      {
        text: '🌳&Blocks',
      },
    ],
    id: '1',
    type: 'h1',
  },
  {
    children: [
      {
        attributes: {
          type: 'range',
        },
        children: [{ text: '' }],
        type: 'input',
      },
      {
        attributes: {
          type: 'text',
        },
        children: [{ text: '' }],
        type: 'input',
      },
      {
        attributes: {
          type: 'checkbox',
        },
        children: [{ text: '' }],
        type: 'input',
      },
      { text: 'Before the mathjax element' },
      {
        latex: true,
        text: '\\(\\frac{3}{1234}\\)',
      },
      {
        text: 'Easily create headings of various levels, from H1 to H6, to structure your content and make it more organized.',
      },
    ],
    id: '2',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Create blockquotes to emphasize important information or highlight quotes from external sources.',
      },
    ],
    id: '3',
    type: 'blockquote',
  },
  {
    children: [
      {
        children: [
          {
            text: '// Use code blocks to showcase code snippets',
          },
        ],
        id: 'qqr2d',
        type: 'code_line',
      },
      {
        children: [
          {
            text: 'function greet() {',
          },
        ],
        id: 's43cc',
        type: 'code_line',
      },
      {
        children: [
          {
            text: "  console.info('Hello World!');",
          },
        ],
        id: 'hr5cw',
        type: 'code_line',
      },
      {
        children: [
          {
            text: '}',
          },
        ],
        id: '0qdsi',
        type: 'code_line',
      },
    ],
    id: '4',
    lang: 'javascript',
    type: 'code_block',
  },
  {
    children: [
      {
        text: 'Each block is a React component in which you can manage the state:',
      },
    ],
    id: '5',
    type: 'p',
  },
  {
    checked: true,
    children: [
      {
        text: 'Create a "banana language" translation plugin',
      },
    ],
    id: '6',
    type: 'action_item',
  },
  {
    checked: true,
    children: [
      {
        text: 'Create a "detect sarcasm" plugin (good luck with that)',
      },
    ],
    id: '7',
    type: 'action_item',
  },
  {
    children: [
      {
        text: 'Create an AI auto-complete plugin',
      },
    ],
    id: '8',
    type: 'action_item',
  },
  {
    children: [
      {
        text: '🔗 Link',
      },
    ],
    id: '9',
    type: 'h2',
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
        id: 'st4tu',
        type: 'a',
        url: 'https://en.wikipedia.org/wiki/Hypertext',
      },
      {
        text: ' within your text to reference external sources or provide additional information using the Link plugin.',
      },
    ],
    id: '10',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Effortlessly create hyperlinks using the toolbar or by pasting a URL while selecting the desired text.',
      },
    ],
    id: '11',
    type: 'p',
  },
  {
    children: [
      {
        text: '🌱 Marks',
      },
    ],
    id: '12',
    type: 'h1',
  },
  {
    children: [
      {
        text: 'Add style and emphasis to your text using the mark plugins, which offers a variety of formatting options.',
      },
    ],
    id: '13',
    type: 'p',
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
    id: '14',
    type: 'p',
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
    id: '15',
    type: 'p',
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
    id: '16',
    type: 'p',
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
    id: '17',
    type: 'p',
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
    id: '18',
    type: 'p',
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
    id: '19',
    type: 'p',
  },
  {
    children: [
      {
        text: '＠ Mention',
      },
    ],
    id: '20',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Mention and reference other users or entities within your text using @-mentions.',
      },
    ],
    id: '21',
    type: 'p',
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
        id: 'wuac8',
        type: 'mention',
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
        id: 'g8apb',
        type: 'mention',
        value: 'Mace Windu',
      },
      {
        text: '.',
      },
    ],
    id: '22',
    type: 'p',
  },
  {
    children: [
      {
        text: "🙂 Emoji's",
      },
    ],
    id: '23',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Express yourself with a touch of fun 🎉 and emotion 😃.',
      },
    ],
    id: '24',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Pick from the toolbar or write after the colon to open the combobox :',
      },
    ],
    id: '25',
    type: 'p',
  },
  {
    align: 'right',
    children: [
      {
        text: 'Alignment',
      },
    ],
    id: '26',
    type: 'h2',
  },
  {
    align: 'right',
    children: [
      {
        text: 'Align text within blocks to create visually appealing and balanced layouts.',
      },
    ],
    id: '27',
    type: 'p',
  },
  {
    align: 'center',
    children: [
      {
        text: 'Center',
      },
    ],
    id: '28',
    type: 'h3',
  },
  {
    align: 'justify',
    children: [
      {
        text: 'Create clean and balanced layouts by justifying block text, providing a professional and polished look.',
      },
    ],
    id: '29',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Line Height',
      },
    ],
    id: '30',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Control the line height of your text to improve readability and adjust the spacing between lines.',
      },
    ],
    id: '31',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Choose the ideal line height to ensure comfortable reading and an aesthetically pleasing document.',
      },
    ],
    id: '32',
    lineHeight: 2,
    type: 'p',
  },
  {
    children: [
      {
        text: 'Indentation',
      },
    ],
    id: '33',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Easily control the indentation of specific blocks to highlight important information and improve visual structure.',
      },
    ],
    id: '34',
    indent: 1,
    type: 'p',
  },
  {
    children: [
      {
        text: 'For instance, this paragraph looks like it belongs to the previous one.',
      },
    ],
    id: '35',
    indent: 2,
    type: 'p',
  },
  {
    children: [
      {
        text: 'Horizontal Rule',
      },
    ],
    id: '36',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Add horizontal rules to visually separate sections and content within your document.',
      },
    ],
    id: '37',
    type: 'p',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: '38',
    type: 'hr',
  },
  {
    children: [
      {
        text: '✍️ List',
      },
    ],
    id: '39',
    type: 'h2',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: '40',
    type: 'p',
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
            id: 'vfpyl',
            type: 'lic',
          },
        ],
        id: '4marf',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'Dogs',
              },
            ],
            id: 'gvzxs',
            type: 'lic',
          },
        ],
        id: 'ydaof',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'Birds',
              },
            ],
            id: 'wayw8',
            type: 'lic',
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
                    id: 'ytn6y',
                    type: 'lic',
                  },
                ],
                id: '34qab',
                type: 'li',
              },
              {
                children: [
                  {
                    children: [
                      {
                        text: 'Owls',
                      },
                    ],
                    id: '9ubyh',
                    type: 'lic',
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
                            id: 'xmvx0',
                            type: 'lic',
                          },
                        ],
                        id: '3781k',
                        type: 'li',
                      },
                      {
                        children: [
                          {
                            children: [
                              {
                                text: 'Snowy Owls',
                              },
                            ],
                            id: 'b6b2i',
                            type: 'lic',
                          },
                        ],
                        id: '38f1r',
                        type: 'li',
                      },
                    ],
                    id: '3ovau',
                    type: 'ul',
                  },
                ],
                id: 'musfw',
                type: 'li',
              },
            ],
            id: 'mj7z3',
            type: 'ul',
          },
        ],
        id: '7nf3m',
        type: 'li',
      },
    ],
    id: '41',
    type: 'ul',
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
            id: 'hyny7',
            type: 'lic',
          },
        ],
        id: 'x0kuz',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'Blue',
              },
            ],
            id: '4qooa',
            type: 'lic',
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
                    id: '792st',
                    type: 'lic',
                  },
                ],
                id: 'p7b05',
                type: 'li',
              },
              {
                children: [
                  {
                    children: [
                      {
                        text: 'Dark blue',
                      },
                    ],
                    id: 'm70e9',
                    type: 'lic',
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
                            id: 'hcljb',
                            type: 'lic',
                          },
                        ],
                        id: 'kky7e',
                        type: 'li',
                      },
                      {
                        children: [
                          {
                            children: [
                              {
                                text: 'Turquoise blue',
                              },
                            ],
                            id: '506v5',
                            type: 'lic',
                          },
                        ],
                        id: 'cc9ja',
                        type: 'li',
                      },
                    ],
                    id: 'kvjeg',
                    type: 'ol',
                  },
                ],
                id: 'x2437',
                type: 'li',
              },
            ],
            id: 'uapbm',
            type: 'ul',
          },
        ],
        id: 'kl83b',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'Green',
              },
            ],
            id: 'g7ebx',
            type: 'lic',
          },
        ],
        id: '9oa96',
        type: 'li',
      },
    ],
    id: '42',
    type: 'ol',
  },
  {
    children: [
      {
        text: '📸 Image',
      },
    ],
    id: '43',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Add images by either uploading them or providing the image URL:',
      },
    ],
    id: '44',
    type: 'p',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: '45',
    type: 'img',
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    width: '75%',
  },
  {
    children: [
      {
        text: 'Customize image captions and resize images.',
      },
    ],
    id: '46',
    type: 'p',
  },
  {
    children: [
      {
        text: '📺 Embed',
      },
    ],
    id: '47',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Embed various types of content, such as videos and tweets:',
      },
    ],
    id: '48',
    type: 'p',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: '49',
    type: 'media_embed',
    url: 'https://www.youtube.com/watch?v=MyiBAziEWUA',
  },
  {
    children: [
      {
        text: '🏓 Table',
      },
    ],
    id: '51',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Create customizable tables with resizable columns and rows, allowing you to design structured layouts.',
      },
    ],
    id: '52',
    type: 'p',
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
                id: 'scxev',
                type: 'p',
              },
            ],
            id: 'cdiik',
            type: 'th',
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
                id: 'dr2d3',
                type: 'p',
              },
            ],
            id: 'ekxnz',
            type: 'th',
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
                id: 'fi7kv',
                type: 'p',
              },
            ],
            id: 'el50o',
            type: 'th',
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
                id: 'mlaw3',
                type: 'p',
              },
            ],
            id: 'ep3q3',
            type: 'th',
          },
        ],
        id: 'c7ari',
        type: 'tr',
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
                id: 'piopx',
                type: 'p',
              },
            ],
            id: 'qq4wl',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'x50y4',
                type: 'p',
              },
            ],
            id: 'tt4av',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: '5evzz',
                type: 'p',
              },
            ],
            id: 'stfoa',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: 'gy468',
                type: 'p',
              },
            ],
            id: '4kduc',
            type: 'td',
          },
        ],
        id: 'q5lpq',
        type: 'tr',
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
                id: 'gj96u',
                type: 'p',
              },
            ],
            id: 'l2rv5',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'sqktj',
                type: 'p',
              },
            ],
            id: '14rj0',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: 'usnrg',
                type: 'p',
              },
            ],
            id: 'ya4g7',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: '9i9yo',
                type: 'p',
              },
            ],
            id: 'n50tq',
            type: 'td',
          },
        ],
        id: '26ggp',
        type: 'tr',
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
                id: 'hqly5',
                type: 'p',
              },
            ],
            id: 'funem',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'i95n4',
                type: 'p',
              },
            ],
            id: 'lmy15',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'r0va9',
                type: 'p',
              },
            ],
            id: '4jpan',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: '1c365',
                type: 'p',
              },
            ],
            id: 'bfmpr',
            type: 'td',
          },
        ],
        id: 'u92dx',
        type: 'tr',
      },
    ],
    colSizes: [100, 100, 100, 100],
    id: '53',
    marginLeft: 20,
    type: 'table',
  },
  {
    children: [
      {
        text: '🏃‍♀️ Autoformat',
      },
    ],
    id: '54',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Empower your writing experience by enabling autoformatting features. Add Markdown-like shortcuts that automatically apply formatting as you type.',
      },
    ],
    id: '55',
    type: 'p',
  },
  {
    children: [
      {
        text: 'While typing, try these mark rules:',
      },
    ],
    id: '56',
    type: 'p',
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
            id: '8b75t',
            type: 'lic',
          },
        ],
        id: 'bkmrv',
        type: 'li',
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
            id: 'thkuz',
            type: 'lic',
          },
        ],
        id: 'h3n3t',
        type: 'li',
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
            id: 'vp54e',
            type: 'lic',
          },
        ],
        id: 'z1aap',
        type: 'li',
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
            id: 'cwbdt',
            type: 'lic',
          },
        ],
        id: 'np965',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'Note that nothing happens when there is a character before, try on:*bold',
              },
            ],
            id: 'dtx28',
            type: 'lic',
          },
        ],
        id: '900ws',
        type: 'li',
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
            id: 'ffkcb',
            type: 'lic',
          },
        ],
        id: 'vnofb',
        type: 'li',
      },
    ],
    id: '57',
    type: 'ul',
  },
  {
    children: [
      {
        text: 'At the beginning of any new block or existing block, try these (block rules):',
      },
    ],
    id: '58',
    type: 'p',
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
            id: '87en8',
            type: 'lic',
          },
        ],
        id: 'c76dw',
        type: 'li',
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
            id: 'vg141',
            type: 'lic',
          },
        ],
        id: 'nxtam',
        type: 'li',
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
            id: '09lap',
            type: 'lic',
          },
        ],
        id: 'ppf1f',
        type: 'li',
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
            id: 'b3j0r',
            type: 'lic',
          },
        ],
        id: 'pfgzp',
        type: 'li',
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
            id: 'p569q',
            type: 'lic',
          },
        ],
        id: '99o31',
        type: 'li',
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
            id: '5xe81',
            type: 'lic',
          },
        ],
        id: '0591l',
        type: 'li',
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
            id: 'uyz3w',
            type: 'lic',
          },
        ],
        id: 'dr20c',
        type: 'li',
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
            id: 'sknst',
            type: 'lic',
          },
        ],
        id: '5rnaz',
        type: 'li',
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
            id: '3t5wa',
            type: 'lic',
          },
        ],
        id: 'w28sp',
        type: 'li',
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
            id: 'qg4zw',
            type: 'lic',
          },
        ],
        id: 'uwyt6',
        type: 'li',
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
            id: 'ww61j',
            type: 'lic',
          },
        ],
        id: 'a4zay',
        type: 'li',
      },
    ],
    id: '59',
    type: 'ul',
  },
  {
    children: [
      {
        text: 'Soft Break ⇧⏎',
      },
    ],
    id: '60',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Customize how soft breaks (line breaks within a paragraph) are handled using configurable rules',
      },
    ],
    id: '61',
    type: 'p',
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
            id: 'dct5f',
            type: 'lic',
          },
        ],
        id: 'dv9oo',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'query – Define custom rules to limit soft breaks to specific block types.',
              },
            ],
            id: 'z1aeg',
            type: 'lic',
          },
        ],
        id: 'ie17v',
        type: 'li',
      },
    ],
    id: '62',
    type: 'ul',
  },
  {
    children: [
      {
        text: 'Try here ⏎',
      },
    ],
    id: '63',
    type: 'blockquote',
  },
  {
    children: [
      {
        children: [
          {
            text: 'And here ⏎ as well.',
          },
        ],
        id: 'txjya',
        type: 'code_line',
      },
    ],
    id: '64',
    type: 'code_block',
  },
  {
    children: [
      {
        text: 'Exit Break ⏎',
      },
    ],
    id: '65',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Configure how exit breaks (line breaks between blocks) behave using simple rules:',
      },
    ],
    id: '66',
    type: 'p',
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
            id: '0scv1',
            type: 'lic',
          },
        ],
        id: '8l60p',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'query – Specify block types where exit breaks are allowed.',
              },
            ],
            id: 'r6vdk',
            type: 'lic',
          },
        ],
        id: 'ui4bd',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'before – Choose whether the cursor exits to the next or previous block',
              },
            ],
            id: '90gv2',
            type: 'lic',
          },
        ],
        id: 'c3ewm',
        type: 'li',
      },
    ],
    id: '67',
    type: 'ul',
  },
  {
    children: [
      {
        text: 'Try here ⌘⏎',
      },
    ],
    id: '68',
    type: 'blockquote',
  },
  {
    children: [
      {
        children: [
          {
            text: 'And in the middle ⌘⏎ of a block.',
          },
        ],
        id: 'nqagl',
        type: 'code_line',
      },
    ],
    id: '69',
    type: 'code_block',
  },
  {
    children: [
      {
        text: 'Exit breaks also work within nested blocks:',
      },
    ],
    id: '70',
    type: 'p',
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
                id: '89yd0',
                type: 'p',
              },
            ],
            id: 'l1a9a',
            type: 'th',
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
                id: '0zek7',
                type: 'p',
              },
            ],
            id: 'c4ct7',
            type: 'th',
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
                id: '9bnqp',
                type: 'p',
              },
            ],
            id: 'xkfx9',
            type: 'th',
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
                id: 'glfao',
                type: 'p',
              },
            ],
            id: '1vab8',
            type: 'th',
          },
        ],
        id: 'xuqho',
        type: 'tr',
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
                id: 'amlvb',
                type: 'p',
              },
            ],
            id: 'cep94',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: '69cgk',
                type: 'p',
              },
            ],
            id: 'oelt7',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: 'zam3r',
                type: 'p',
              },
            ],
            id: '6zjb2',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: 'ph3ha',
                type: 'p',
              },
            ],
            id: 'tss1e',
            type: 'td',
          },
        ],
        id: 'rydxt',
        type: 'tr',
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
                id: '0rsay',
                type: 'p',
              },
            ],
            id: 'cj8eo',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 's69lp',
                type: 'p',
              },
            ],
            id: '5axk4',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'No',
                  },
                ],
                id: 'e35zs',
                type: 'p',
              },
            ],
            id: 'r1xy5',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'krltb',
                type: 'p',
              },
            ],
            id: '3tkrr',
            type: 'td',
          },
        ],
        id: 'd03c9',
        type: 'tr',
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
                id: '2m5mh',
                type: 'p',
              },
            ],
            id: 'udv8e',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'tsfkl',
                type: 'p',
              },
            ],
            id: '508yk',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'bao8p',
                type: 'p',
              },
            ],
            id: '67w0a',
            type: 'td',
          },
          {
            children: [
              {
                children: [
                  {
                    text: 'Yes',
                  },
                ],
                id: 'hioi1',
                type: 'p',
              },
            ],
            id: '10kpz',
            type: 'td',
          },
        ],
        id: '18yer',
        type: 'tr',
      },
    ],
    colSizes: [100, 100, 100, 100],
    id: '71',
    marginLeft: 20,
    type: 'table',
  },
  {
    children: [
      {
        text: 'Cursor Overlay',
      },
    ],
    id: '72',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Try to drag over text: you will see a black cursor on the drop target: color and other styles are customizable!',
      },
    ],
    id: '73',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Tabbable',
      },
    ],
    id: '74',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Ensure a smooth tab navigation experience within your editor with the Tabbable plugin.',
      },
    ],
    id: '75',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Properly handle tab orders for void nodes, allowing for seamless navigation and interaction. Without this plugin, DOM elements inside void nodes come after the editor in the tab order.',
      },
    ],
    id: '76',
    type: 'p',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: '77',
    type: 'tabbable_element',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: '78',
    type: 'tabbable_element',
  },
  {
    children: [
      {
        text: 'Place your cursor here and try pressing tab or shift+tab.',
      },
    ],
    id: '79',
    type: 'p',
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
            id: 'xk3ml',
            type: 'lic',
          },
        ],
        id: 'dks7j',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'List item 2',
              },
            ],
            id: 'fjbpw',
            type: 'lic',
          },
        ],
        id: 'xl1vd',
        type: 'li',
      },
      {
        children: [
          {
            children: [
              {
                text: 'List item 3',
              },
            ],
            id: 'chzg6',
            type: 'lic',
          },
        ],
        id: '7gu4i',
        type: 'li',
      },
    ],
    id: '80',
    type: 'ul',
  },
  {
    children: [
      {
        children: [
          {
            text: 'if (true) {',
          },
        ],
        id: 'n8lam',
        type: 'code_line',
      },
      {
        children: [
          {
            text: '// <- Place cursor at start of line and press tab',
          },
        ],
        id: 'rwse1',
        type: 'code_line',
      },
      {
        children: [
          {
            text: '}',
          },
        ],
        id: 'we1i0',
        type: 'code_line',
      },
    ],
    id: '81',
    lang: 'javascript',
    type: 'code_block',
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
    id: '82',
    type: 'p',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: '83',
    type: 'tabbable_element',
  },
  {
    children: [
      {
        text: 'When you press tab at the end of the editor, the focus should go to the button below.',
      },
    ],
    id: '84',
    type: 'p',
  },
  {
    children: [
      {
        text: '💬 Comments',
      },
    ],
    id: '85',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Add ',
      },
      {
        comment: true,
        comment_1: true,
        text: 'comments to your content',
      },
      {
        text: ' to provide additional context, insights, or ',
      },
      {
        comment: true,
        comment_2: true,
        text: 'collaborate',
      },
      {
        text: '  with others',
      },
    ],
    id: '86',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Deserialize HTML',
      },
    ],
    id: '87',
    type: 'h2',
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
    id: '88',
    type: 'p',
  },
  {
    children: [
      {
        text: "To experience the seamless preservation of formatting, simply copy and paste rendered HTML rich text content (not the source code) from another website into this editor. You'll notice that the formatting of the pasted content is maintained.",
      },
    ],
    id: '89',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Deserialize Markdown',
      },
    ],
    id: '90',
    type: 'h2',
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
        id: 'izqc9',
        type: 'a',
        url: 'https://markdown-it.github.io/',
      },
      {
        text: ' into the editor for easy conversion and editing.',
      },
    ],
    id: '91',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Deserialize Docx',
      },
    ],
    id: '92',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Easily import content from Microsoft Word documents by simply copying and pasting the Docx content into the editor.',
      },
    ],
    id: '93',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Deserialize CSV',
      },
    ],
    id: '94',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Copy and paste CSV content into a table.',
      },
    ],
    id: '95',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Trailing Block',
      },
    ],
    id: '96',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Always have a trailing paragraph at the end of your editor.',
      },
    ],
    id: '97',
    type: 'p',
  },
  {
    children: [
      {
        text: 'Excalidraw',
      },
    ],
    id: '98',
    type: 'h2',
  },
  {
    children: [
      {
        text: 'Unleash your creativity with the Excalidraw plugin, which enables you to embed and draw diagrams directly within your editor.',
      },
    ],
    id: '99',
    type: 'p',
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
          id: 'oDVXy8D6rom3H1-LLH2-f',
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
          id: '-xMIs_0jIFqvpx-R9UnaG',
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
    id: '100',
    type: 'excalidraw',
  },
  {
    children: [
      {
        text: '',
      },
    ],
    id: 'qkzld',
    type: 'p',
  },
]
