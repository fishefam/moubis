import esbuild from 'esbuild'
import clean from 'esbuild-plugin-clean'
import postcss from 'esbuild-postcss'
import { readdirSync } from 'fs'
import { resolve } from 'path'

const ASSETS_DIR_PATH = 'src/page/assets'
const MATHJAX_DIR_PATH = `${ASSETS_DIR_PATH}/mathjax`

const mathjax = readdirSync(resolve(MATHJAX_DIR_PATH))
const mathjaxEntryPoints = mathjax.map((file) => ({
  in: `${MATHJAX_DIR_PATH}/${file}`,
  out: `assets${!/tex-mml-chtml/.test(file) ? '/output/chtml/fonts/woff-v2' : ''}/${file.replace(/\..*$/, '')}`,
}))

const context = await esbuild.context({
  bundle: true,
  entryPoints: [
    { in: 'index.html', out: 'index' },
    { in: 'index.ts', out: 'index' },
    { in: 'manifest/v2.mf.json', out: 'manifest' },
    { in: 'page/assets/favicon.ico', out: 'assets/favicon' },
    { in: 'page/main.tsx', out: 'main' },
    ...mathjaxEntryPoints,
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
