import createHTML from './create-html'

export default function plugin (opts) {
  const {
    file = 'index.html',
    scripts: preScripts = [],
    ...rest
  } = opts

  return {
    generateBundle (_, a) {
      const scripts = Object.entries(a).map(([ key, value ]) => {
        const { fileName } = value
        return `/${fileName}`
      })
      this.emitFile({
        type: 'asset',
        fileName: file,
        source: createHTML({ scripts: preScripts.concat(scripts), ...rest }),
      })
    }
  }
}
