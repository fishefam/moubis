import { createElement, selectElement } from 'page/lib/dom'

window.stop()
selectElement('html')!.innerHTML = `
    <head>
        <link rel="stylesheet" href="${resolveUrl('main.css')}" /> 
    </head>
    <body>
        <div id="root"></div> 
        <div data-userscript></div> 
    </body>
  `
createElement({ attributes: [['src', resolveUrl('main.js')]], parent: document.head, tag: 'script' })

function resolveUrl(path: string): string {
  return browser.runtime.getURL(path)
}
