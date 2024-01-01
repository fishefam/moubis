import esbuild from 'esbuild'
import clean from 'esbuild-plugin-clean'
import postcss from 'esbuild-postcss'
import { readdirSync } from 'fs'
import { resolve } from 'path'

const ASSETS_DIR_PATH = 'src/page/assets'
const MATHJAX_DIR_PATH = `${ASSETS_DIR_PATH}/mathjax`

const mathjax = readdirSync(resolve(MATHJAX_DIR_PATH))
const mathjaxFirefoxEntryPoints = mathjax.map((file) => ({
  in: `${MATHJAX_DIR_PATH}/${file}`,
  out: `firefox/assets${!/tex-mml-chtml/.test(file) ? '/output/chtml/fonts/woff-v2' : ''}/${file.replace(/\..*$/, '')}`,
}))
const mathjaxChromiumEntryPoints = mathjax.map((file) => ({
  in: `${MATHJAX_DIR_PATH}/${file}`,
  out: `chromium/assets${!/tex-mml-chtml/.test(file) ? '/output/chtml/fonts/woff-v2' : ''}/${file.replace(
    /\..*$/,
    '',
  )}`,
}))

const context = await esbuild.context({
  bundle: true,
  entryPoints: [
    { in: 'index.html', out: 'firefox/index' },
    { in: 'index.ts', out: 'firefox/index' },
    { in: 'manifest/v2.mf.json', out: 'firefox/manifest' },
    { in: 'page/assets/favicon.ico', out: 'firefox/assets/favicon' },
    { in: 'page/main.tsx', out: 'firefox/main' },

    { in: 'index.html', out: 'chromium/index' },
    { in: 'index.ts', out: 'chromium/index' },
    { in: 'manifest/v3.mf.json', out: 'chromium/manifest' },
    { in: 'page/assets/favicon.ico', out: 'chromium/assets/favicon' },
    { in: 'page/main.tsx', out: 'chromium/main' },
    ...mathjaxFirefoxEntryPoints,
    ...mathjaxChromiumEntryPoints,
  ],
  jsx: 'transform',
  loader: {
    '.html': 'copy',
    '.ico': 'copy',
    '.mf.json': 'copy',
    '.min.js': 'copy',
    '.ts': 'ts',
    '.tsx': 'tsx',
    '.woff': 'copy',
  },
  logLevel: 'info',
  outdir: 'dist',
  plugins: [clean({ patterns: 'dist' }), postcss()],
  sourcemap: true,
  treeShaking: true,
})

context.watch()
context.serve()
