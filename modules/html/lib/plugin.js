import {
  compose,
  filter,
  into,
  map,
  test,
} from 'ramda'
import createHTML from './create-html'

const isCss = test(/css$/)
const isJs = test(/js$/)
const intoArray = into([])

const createLink = (s) => `/${s}`

export default function plugin (opts) {
  const {
    file = 'index.html',
    scripts: preScripts = [],
    ...rest
  } = opts

  return {
    generateBundle (_, a) {
      const files = Object.keys(a)
      const styles = intoArray(compose(filter(isCss), map(createLink)), files)
      const scripts = intoArray(compose(filter(isJs), map(createLink)), files)
      this.emitFile({
        type: 'asset',
        fileName: file,
        source: createHTML({ scripts: preScripts.concat(scripts), styles, ...rest }),
      })
    },
  }
}
