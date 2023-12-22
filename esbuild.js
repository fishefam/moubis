import esbuild from 'esbuild'
import clean from 'esbuild-plugin-clean'
import postcss from 'esbuild-postcss'

const context = await esbuild.context({
  bundle: true,
  entryPoints: [
    { in: 'manifest/v2.mf.json', out: 'manifest' },
    { in: 'index.ts', out: 'index' },
    { in: 'page/main.tsx', out: 'main' },
  ],
  jsx: 'transform',
  loader: {
    '.mf.json': 'copy',
    '.ts': 'ts',
    '.tsx': 'tsx',
  },
  logLevel: 'info',
  outdir: 'dist',
  plugins: [clean({ patterns: 'dist' }), postcss()],
  sourcemap: true,
  treeShaking: true,
})

context.watch()
context.serve()