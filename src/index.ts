import { ELocalStorage } from '@/types/app'
import { createElement, selectElement } from 'page/lib/dom'

main()

async function main() {
  /** Intercept page load and inject a new HTML template for React */
  window.stop()
  localStorage.setItem(ELocalStorage.EXT_URL, resolveUrl(''))

  await prepareData()
  preparePage()
}

function preparePage() {
  selectElement('html')!.innerHTML = `
    <head>
        <link rel="stylesheet" href="${resolveUrl('main.css')}" /> 
        <link rel="icon" type="image/x-icon" href="${resolveUrl('assets/favicon.ico')}">
    </head>
    <body>
        <div id="root"></div> 
        <div data-userscript></div> 
    </body>
  `
  /** Scripts need to be injected after the template has been set for them to take effect */
  createElement({ attributes: [['src', 'http://localhost:8097']], parent: document.head, tag: 'script' })
  createElement({ attributes: [['src', resolveUrl('main.js')]], parent: document.head, tag: 'script' })
}

function resolveUrl(path: string): string {
  return browser.runtime.getURL(path)
}

async function prepareData() {
  const response = await fetch(location.href)
  const html = await response.text()
  const forms = new DOMParser().parseFromString(html, 'text/html').forms[1] // Exact index of this form from mobius
  const formData = new FormData(forms)
  const data: Record<string, string> = {}
  formData.forEach((val, key) => {
    if (val.toString()) data[key] = val.toString()
  })
  localStorage.setItem('data', JSON.stringify(data))
}
