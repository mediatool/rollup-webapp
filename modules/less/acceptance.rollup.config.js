import less from './lib/plugin'

export default {
  input: 'test/file.js',
  plugins: [
    less({
      lessOptions: { paths: [ 'test' ] },
      lessFiles: [
        { input: 'test/style.less', output: 'style.css' },
      ]
    })
  ],
  output: {
    file: 'dist/file.js',
    format: 'es',
  }
}
