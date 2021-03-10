import join from './lib/plugin'

export default {
  input: 'test/file.js',
  plugins: [
    join([{
      name: 'js/react.js',
      input: [
        'react/umd/react.development.js',
        'react-dom/umd/react-dom.development.js',
      ],
    }])
  ],
  output: {
    file: 'dist/file.js',
    format: 'es',
  }
}
