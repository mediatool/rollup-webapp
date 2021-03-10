import { readFile } from 'fs-extra'

async function rf (path) {
  return readFile(require.resolve(path), 'utf-8')
}

export default function plugin (bundles = []) {
  return {
    async buildStart () {
      return Promise.all(bundles.map(async ({ input, name = 'joined.js' }) => {
        const paths = input.map(require.resolve)
        const contents = await Promise.all(paths.map(rf))
        paths.forEach(this.addWatchFile)
        this.emitFile({
          type: 'asset',
          name,
          source: contents.join('\n'),
        })
      }))
    },
  }
}
