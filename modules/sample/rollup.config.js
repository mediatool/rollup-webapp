import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import less from 'rollup-plugin-less'
import html from 'rollup-plugin-html'

export default {
  input: 'lib/main.jsx',
  external: [ 'react', 'react-dom' ],
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    less({
      lessFiles: [ { input: 'lib/style.less', output: 'style.css' } ],
    }),
    html({
      body: '<div id="main"/>',
      scripts: [
        'https://unpkg.com/react@17/umd/react.development.js',
        'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
      ],
    }),
  ],
  output: {
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'sample',
  },
}
